import { ConfigEnvironment } from '@app/common/config/interfaces/config.interface';
import { AriOriginateData } from '../apis/ari/interfaces/ari.interface';
import { OriginateCallData } from '../interfaces/asterisk.interface';
import configuration from '@app/common/config/config.provider';

export class Originate3cxcCallAdapter {
    public static getOriginateInfo(data: OriginateCallData): AriOriginateData {
        const { voip } = configuration() as ConfigEnvironment;

        const { asterisk } = voip;

        return {
            endpoint: `PJSIP/${data.from}@${asterisk.pbx3cx.trunkId}`,
            extension: data.to,
            context: asterisk.pbx3cx.outgoingContext,
            callerId: data.to,
            timeout: asterisk.pbx3cx.timeout,
        };
    }
}
