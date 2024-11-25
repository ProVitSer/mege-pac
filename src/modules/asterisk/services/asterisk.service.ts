import { Injectable } from '@nestjs/common';
import { AriService } from '../apis/ari/services/ari.service';
import { OriginateCallStatus } from '../interfaces/asterisk.enum';
import { OriginateCallData, SendCallResult } from '../interfaces/asterisk.interface';
import { Originate3cxcCallAdapter } from '../adapters/originate-3cx-call.adapter';

@Injectable()
export class AstersikService {
    constructor(private readonly ariService: AriService) {}

    public async originateCall(data: OriginateCallData): Promise<SendCallResult> {
        try {
            const originateData = Originate3cxcCallAdapter.getOriginateInfo(data);

            const originateResult = await this.ariService.sendAriCall(originateData);

            return {
                uniqueid: originateResult.uniqueid,
                originateCallStatus: OriginateCallStatus.successful,
            };
        } catch (e) {
            return {
                originateCallStatus: OriginateCallStatus.error,
            };
        }
    }
}
