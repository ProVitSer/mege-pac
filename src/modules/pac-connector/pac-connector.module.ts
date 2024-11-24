import { Module } from '@nestjs/common';
import { PacGrpcConnectorService } from './services/pac-grpc-connector.service';

@Module({
    imports: [],
    providers: [PacGrpcConnectorService],
    controllers: [],
    exports: [PacGrpcConnectorService],
})
export class PacConnectorModule {}
