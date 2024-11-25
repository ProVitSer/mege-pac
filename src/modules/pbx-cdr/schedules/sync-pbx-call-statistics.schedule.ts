import { PacSqlService } from '@app/modules/pac-connector/modules/pac-sql/services/pac-sql.service';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { format, startOfDay, endOfDay } from 'date-fns';
import { getPbxStatisticsByIdQuery, getPbxStatisticsQuery } from '@app/common/constants/sql';
import { ConfigService } from '@nestjs/config';
import { PbxCallStatisticsData, TransformedPbxCallStatisticsData } from '../interfaces/pbx-cdr.interface';
import { PrismaService } from '@app/modules/prisma/prisma.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class SyncPbxCdrSchedule {
    constructor(
        private readonly pacSqlService: PacSqlService,
        private readonly configService: ConfigService,
        private readonly prismaPbxCdr: PrismaService,
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
    ) {}

    @Cron(CronExpression.EVERY_MINUTE)
    async syncCdr() {
        await this.getPbxCallStatistics();
    }

    private async getPbxCallStatistics() {
        try {
            const query = await this.getCdrQuery();

            const pbxCallStatistics = await this._getPbxCallStatistics(query);

            if (!pbxCallStatistics) return;

            const aggregatedData = this.aggregatePbxCallStatisticsData(JSON.parse(pbxCallStatistics));

            const sortedCalls = [...aggregatedData].sort((a, b) => a.segmentId - b.segmentId);

            for (const call of sortedCalls) {
                await this.addPbxCallStatistic(call);
            }
        } catch (e) {
            this.logger.error(e);
        }
    }

    private async addPbxCallStatistic(data: TransformedPbxCallStatisticsData) {
        try {
            await this.prismaPbxCdr.pbxCdr.upsert({
                where: {
                    segment_id: data.segmentId,
                },
                create: {
                    call_id: data.callId,
                    answered: data.answered,
                    destination_caller_id: data.destinationCallerId,
                    ringing_duration: data.ringingDuration,
                    source_caller_id: data.sourceCallerId,
                    start_time: data.startTime,
                    talking_duration: data.talkingDuration,
                    recording_url: data.recordingUrl,
                    segment_id: data.segmentId,
                },
                update: {
                    call_id: data.callId,
                    answered: data.answered,
                    destination_caller_id: data.destinationCallerId,
                    ringing_duration: data.ringingDuration,
                    source_caller_id: data.sourceCallerId,
                    start_time: data.startTime,
                    talking_duration: data.talkingDuration,
                    recording_url: data.recordingUrl,
                },
            });
        } catch (e) {
            this.logger.error(e);
            return;
        }
    }

    private async getCdrQuery(): Promise<string> {
        const cdr = await this.prismaPbxCdr.pbxCdr.findFirst({
            orderBy: {
                id: 'desc',
            },
        });

        const date = this.getStartAndToday();

        return cdr
            ? getPbxStatisticsByIdQuery(date.formattedStart, date.formattedEnd, cdr.call_id)
            : getPbxStatisticsQuery(date.formattedStart, date.formattedEnd);
    }

    private async _getPbxCallStatistics(query: string) {
        const result = await this.pacSqlService.sqlRequest({ query });

        const parseResult = JSON.parse(result.result);

        return parseResult[0][0];
    }

    private getStartAndToday() {
        const now = new Date();

        const startOfToday = startOfDay(now);

        const endOfToday = endOfDay(now);

        return {
            formattedStart: format(startOfToday, 'yyyy-MM-dd HH:mm:ss+00'),
            formattedEnd: format(endOfToday, 'yyyy-MM-dd HH:mm:ss+00'),
        };
    }

    private aggregatePbxCallStatisticsData(data: PbxCallStatisticsData[]): TransformedPbxCallStatisticsData[] {
        const aggregatedMap: TransformedPbxCallStatisticsData[] = [];

        const pbx = this.configService.get('pbx');
        for (const callData of data) {
            aggregatedMap.push({
                callId: callData.call_id,
                answered: callData.answered,
                destinationCallerId: callData.destination_caller_id,
                ringingDuration: callData.ringing_duration,
                sourceCallerId: callData.source_caller_id,
                startTime: callData.start_time,
                talkingDuration: callData.talking_duration,
                recordingUrl: callData.recording_url ? `${pbx.recordingPath}/${callData.recording_url}` : null,
                segmentId: callData.segment_id,
            });
        }

        return aggregatedMap;
    }
}
