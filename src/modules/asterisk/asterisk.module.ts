import { Module } from '@nestjs/common';
import { AriModule } from './apis/ari/ari.module';
import { AriService } from './apis/ari/services/ari.service';
import { AstersikService } from './services/asterisk.service';

@Module({
    imports: [AriModule],
    providers: [{ provide: 'Asterisk', useClass: AstersikService }, AriService],
    exports: ['Asterisk'],
})
export class AsteriskModule {}
