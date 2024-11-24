/* eslint-disable @typescript-eslint/ban-types */
import { PacGrpcConnectorData } from '@app/modules/pac-connector/interfaces/pac-connector.interface';
import { PacGrpcConnectorService } from '@app/modules/pac-connector/services/pac-grpc-connector.service';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CALL_PACKAGE, CALL_PROTO_PATH } from '../pac-call.config';
import { CallServiceMethods, CallServiceName } from '../interfaces/pac-call.enum';
import { BaseCallReply, MakeCallRequest } from '../interfaces/pac-call.interface';

@Injectable()
export class PacCallService {
    constructor(private readonly pgcs: PacGrpcConnectorService) {}

    public async makeCall(data: MakeCallRequest): Promise<BaseCallReply> {
        return await this.grpcSend<MakeCallRequest, BaseCallReply>(data, CallServiceMethods.MakeCall);
    }

    private async grpcSend<T, D>(data: T, methodName: CallServiceMethods): Promise<D> {
        const pacGrpcConnectorData: PacGrpcConnectorData<T> = {
            serviceName: CallServiceName.CallPbxService,
            methodName,
            data,
            package: CALL_PACKAGE,
            protoPath: CALL_PROTO_PATH,
        };

        return await firstValueFrom(await this.pgcs.callGrpcMethod<T, D>(pacGrpcConnectorData));
    }
}
