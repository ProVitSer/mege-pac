import { AppProtocol, LogLevel } from './config.enum';
export interface ConfigEnvironment {
    appPort: number;
    appProtocol: AppProtocol;
    apiPrefix: string;
    cors: CorsEnvironmentVariables;
    log: LogEnvironmentVariables;
    pacHost: string;
    pbx: PbxEnvironmentVariables;
    voip: VoipEnvironmentVariables;
}

export interface CorsEnvironmentVariables {
    allowedHeaders: string;
    origin: string[];
    methods: string;
    credentials: boolean;
    maxAge: number;
}

export interface LogEnvironmentVariables {
    level: LogLevel[];
    path: string;
    formatDate: string;
    mixSize: string;
    maxFiles: string;
}

export interface PbxEnvironmentVariables {
    extensionLength: number;
    fqdn: string;
    recordingPath: string;
}

export interface VoipEnvironmentVariables {
    asterisk: AsteriskEnvironmentVariables;
}

export interface AsteriskEnvironmentVariables {
    ari: AsteriskAriEnvironmentVariables[];
    pbx3cx: {
        trunkId: string;
        outgoingContext: string;
        timeout: number;
    };
}

export interface AsteriskAriEnvironmentVariables {
    providerName: string;
    host: string;
    port: number;
    stasis: string;
    user: string;
    password: string;
}
