import { PacSqlService } from '@app/modules/pac-connector/modules/pac-sql/services/pac-sql.service';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { format, startOfDay, endOfDay } from 'date-fns';
import { ConfigService } from '@nestjs/config';
import { PbxCallStatisticsData } from '../interfaces/pbx-cdr.interface';
import { PrismaService } from '@app/modules/prisma/prisma.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { getPbxStatisticsQuery } from '@app/modules/pbx-cdr/pbx-cdr.utils';

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

            const callsData = JSON.parse(pbxCallStatistics);
            const sortedCallsData = [...callsData].sort((a, b) => {
                if (a.cdr_id < b.cdr_id) return -1;
                if (a.cdr_id > b.cdr_id) return 1;
                return 0;
            });
            await this.addPbxCallStatistic(sortedCallsData);
        } catch (e) {
            this.logger.error(e, SyncPbxCdrSchedule.name);
        }
    }

    private async addPbxCallStatistic(sortedCalls: PbxCallStatisticsData[]) {
        const pbx = this.configService.get('pbx');

        try {
            await this.prismaPbxCdr.$transaction(
                sortedCalls.map((data: PbxCallStatisticsData) => {
                    const callData = {
                        call_history_id: data.call_history_id,
                        answered: Boolean(data.answered),
                        destination_caller_id: data.destination_caller_id,
                        ringing_duration: data.ringing_duration,
                        source_caller_id: data.source_caller_id,
                        start_time: data.start_time,
                        talking_duration: data.talking_duration,
                        recording_url: data.recording_url ? `${pbx.recordingPath}/${data.recording_url}` : null,
                    };

                    return this.prismaPbxCdr.pbxCdr.upsert({
                        where: {
                            cdr_id: data.cdr_id,
                        },
                        create: {
                            ...callData,
                            cdr_id: data.cdr_id,
                        },
                        update: { ...callData },
                    });
                }),
            );
        } catch (e) {
            this.logger.error(e, SyncPbxCdrSchedule.name);
            return;
        }
    }

    private async getCdrQuery(): Promise<string> {
        const date = this.getStartAndToday();
        const cdr = await this.prismaPbxCdr.pbxCdr.findFirst({
            orderBy: {
                id: 'desc',
            },
        });

        return cdr
            ? getPbxStatisticsQuery(date.formattedStart, date.formattedEnd, cdr.call_history_id)
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
}
