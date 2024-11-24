import { GrpcServiceMethods, GrpcServiceName } from './pac-connector.enum';

export interface PacPayload {
    clientId: number;
}

export interface PacGrpcConnectorData<T> {
    serviceName: GrpcServiceName;
    methodName: GrpcServiceMethods;
    data: T;
    package: string;
    protoPath: string;
}
