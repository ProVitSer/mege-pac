import { AppProtocol, LogLevel } from './config.enum';
export interface ConfigEnvironment {
    appPort: number;
    appProtocol: AppProtocol;
    apiPrefix: string;
    cors: CorsEnvironmentVariables;
    log: LogEnvironmentVariables;
    pacHost: string;
    pbx: PbxEnvironmentVariables;
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
