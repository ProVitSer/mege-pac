import { Inject, Injectable } from '@nestjs/common';
import { CdrData, LastCallId } from '../interfaces/pbx-api.interface';
import { PbxCdrService } from '@app/modules/pbx-cdr/services/pbx-cdr.service';
import MakeCallDto from '../dto/make-call.dto';
import { AstersikService } from '@app/modules/asterisk/services/asterisk.service';

@Injectable()
export class PbxApiService {
    constructor(
        private readonly pbxCdrService: PbxCdrService,
        @Inject('Asterisk') private readonly voipPbxService: AstersikService,
    ) {}

    public async getLastPbxCdrCallId(): Promise<LastCallId> {
        return {
            call_id: await this.pbxCdrService.getLastCallId(),
        };
    }

    public async getCdr(callId: number): Promise<CdrData[]> {
        const cdrs = await this.pbxCdrService.getLastCdr(callId);

        if (cdrs.length == 0) return [];

        const formatCdr: CdrData[] = [];

        const sortedCdrs = [...cdrs].sort((a, b) => a.segment_id + b.segment_id);

        for (const cdr of sortedCdrs) {
            formatCdr.push({
                call_id: cdr.call_id,
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
