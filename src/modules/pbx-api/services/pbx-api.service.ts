import { Inject, Injectable } from '@nestjs/common';
import { CdrData, LastCallId } from '../interfaces/pbx-api.interface';
import { PbxCdrService } from '@app/modules/pbx-cdr/services/pbx-cdr.service';
import MakeCallDto from '../dto/make-call.dto';
import { AstersikService } from '@app/modules/asterisk/services/asterisk.service';
import { PbxCdr } from '../../../../prisma/generated/sqlite';
import { ASTERISK_TOKEN } from '@app/modules/asterisk/asterisk.constants';

@Injectable()
export class PbxApiService {
    constructor(
        private readonly pbxCdrService: PbxCdrService,
        @Inject(ASTERISK_TOKEN) private readonly voipPbxService: AstersikService,
    ) {}

    public async getLastPbxCdrCallId(): Promise<LastCallId> {
        return {
            call_id: await this.pbxCdrService.getLastCallId(),
        };
    }

    public async getCdr(callId: string): Promise<CdrData[]> {
        return await this.getCdrByCallHistoryId(callId);
    }

    private async getCdrByCallHistoryId(callHistoryId: string): Promise<CdrData[]> {
        const cdrs = await this.pbxCdrService.cdrByCallHistoryId(callHistoryId);
        if (cdrs.length == 0) return [];

        const sortedCdrs = [...cdrs].sort((a, b) => {
            if (a.cdr_id < b.cdr_id) return -1;
            if (a.cdr_id > b.cdr_id) return 1;
            return 0;
        });

        return this.formatCdr(sortedCdrs);
    }

    private formatCdr(cdrs: PbxCdr[]): CdrData[]{
        const formatCdr: CdrData[] = [];

        for (const cdr of cdrs) {
            formatCdr.push({
                call_id: cdr.call_history_id,
                cdr_id: cdr.cdr_id,
                answered: cdr.answered,
                destination_caller_id: cdr.destination_caller_id,
                ringing_duration: cdr.ringing_duration,
                source_caller_id: cdr.source_caller_id,
                start_time: cdr.start_time,
                talking_duration: cdr.talking_duration,
                recording_url: cdr.recording_url,
            });
        }

        return formatCdr;
    }

    public async makePbxCall(callData: MakeCallDto): Promise<void> {
        await this.voipPbxService.originateCall({
            to: String(callData.source_caller_id),
            from: String(callData.caller_id),
        });
    }
}
