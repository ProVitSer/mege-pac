import { Module } from '@nestjs/common';
import { PbxCdrModule } from '../pbx-cdr/pbx-cdr.module';
import { PbxApiController } from './controllers/pbx-api.controller';
import { PbxApiService } from './services/pbx-api.service';
import { PacCallModule } from '../pac-connector/modules/pac-call/pac-call.module';

@Module({
    imports: [PbxCdrModule, PacCallModule],
    providers: [PbxApiService],
    controllers: [PbxApiController],
})
export class PbxApiModule {}
