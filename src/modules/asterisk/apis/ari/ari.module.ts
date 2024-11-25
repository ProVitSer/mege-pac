import { createAsteriskAri, getAsteriskAriProvidesName } from '@app/common/config/asterisk.config';
import { Module } from '@nestjs/common';
import { AriService } from './services/ari.service';

const asteriskAriProviders = createAsteriskAri();
const ariProvidersName = getAsteriskAriProvidesName();

@Module({
    providers: [...asteriskAriProviders, AriService],
    exports: [...ariProvidersName, AriService],
})
export class AriModule {}
