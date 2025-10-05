import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import Ari from 'ari-client';
import { AriOriginateData } from '../interfaces/ari.interface';
import { ARI_ORIGINATE_ERROR } from '../ari.constants';

@Injectable()
export class AriService {
    constructor(
        @Inject('ARI_CALL')
        private readonly ariCall: {
            ariClient: Ari.Client;
        },
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
    ) {}

    public async sendAriCall(data: AriOriginateData): Promise<{ uniqueid: string }> {
        const channel = this.ariCall.ariClient.Channel();

        try {
            const result = await channel.originate({
                ...data,
            });

            return { uniqueid: result.id };
        } catch (e) {
            this.logger.error(e, AriService.name);
            throw new Error(ARI_ORIGINATE_ERROR);
        }
    }
}
