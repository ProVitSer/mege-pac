import { Module } from '@nestjs/common';
import { PbxCdrModule } from '../pbx-cdr/pbx-cdr.module';
import { PbxApiController } from './controllers/pbx-api.controller';
import { PbxApiService } from './services/pbx-api.service';
import { AsteriskModule } from '../asterisk/asterisk.module';

@Module({
    imports: [PbxCdrModule, AsteriskModule],
    providers: [PbxApiService],
    controllers: [PbxApiController],
})
export class PbxApiModule {}
