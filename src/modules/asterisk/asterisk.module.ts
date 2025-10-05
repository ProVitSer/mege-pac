import { Module } from '@nestjs/common';
import { AriModule } from './apis/ari/ari.module';
import { AriService } from './apis/ari/services/ari.service';
import { AstersikService } from './services/asterisk.service';
import { ASTERISK_TOKEN } from '@app/modules/asterisk/asterisk.constants';

@Module({
    imports: [AriModule],
    providers: [{ provide: ASTERISK_TOKEN, useClass: AstersikService }, AriService],
    exports: [ASTERISK_TOKEN],
})
export class AsteriskModule {}
