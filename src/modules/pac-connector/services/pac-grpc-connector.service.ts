import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { ClientGrpc, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { PacGrpcConnectorData } from '../interfaces/pac-connector.interface';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PacGrpcConnectorService {
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
        private readonly configService: ConfigService,
    ) {}

    public async callGrpcMethod<T, D>(data: PacGrpcConnectorData<T>): Promise<Observable<D>> {
        try {
            const grpcClient = await this.getGrpcClient<T>(data);

            return grpcClient.getService<D>(data.serviceName)[data.methodName](data.data);
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    private async getGrpcClient<T>(data: PacGrpcConnectorData<T>): Promise<ClientGrpc> {
        const client = ClientProxyFactory.create({
            transport: Transport.GRPC,
            options: {
                package: data.package,
                protoPath: join(__dirname, data.protoPath),
                url: this.configService.get('pacHost'),
            },
        }) as ClientGrpc;

        return client;
    }
}
