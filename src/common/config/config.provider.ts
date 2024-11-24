import { getEnv } from '../utils';
import { AppProtocol, LogLevel, NodeEnvType } from './interfaces/config.enum';
import { ConfigEnvironment } from './interfaces/config.interface';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });

export default (): ConfigEnvironment => {
    switch (String(getEnv())) {
        case NodeEnvType.prod:
            return PROD_CONF;
        case NodeEnvType.development:
            return DEV_CONF;
    }
};

const DEV_CONF: ConfigEnvironment = {
    appPort: 7878,
    appProtocol: AppProtocol.http,
    apiPrefix: process.env.API_PREFIX,
    cors: {
        allowedHeaders: 'Origin, Content-Type, Authorization',
        origin: ['*'],
        methods: 'GET, POST, PUT, DELETE, OPTIONS',
        credentials: true,
        maxAge: 3600,
    },
    log: {
        path: './app-log/',
        formatDate: 'YYYY-MM-DD',
        mixSize: '20m',
        maxFiles: '14d',
        level: [LogLevel.console, LogLevel.info, LogLevel.error],
    },
    pacHost: process.env.PAC_HOST,
    pbx: {
        extensionLength: parseInt(process.env.PBX_EXTENSION_LENGTH),
        fqdn: process.env.PBX_FQDN,
        recordingPath: process.env.PBX_RECORDING_PATH,
    },
};

const PROD_CONF: ConfigEnvironment = {
    appPort: Number(`${process.env.APP_PORT}`),
    appProtocol: `${process.env.HTTP_OPTIONS}` as AppProtocol,
    apiPrefix: process.env.API_PREFIX,
    cors: {
        allowedHeaders: 'Origin, Content-Type, Authorization',
        origin: ['*'],
        methods: 'GET, POST, PUT, DELETE, OPTIONS',
        credentials: true,
        maxAge: 3600,
    },
    log: {
        path: './api-log/',
        formatDate: 'YYYY-MM-DD',
        mixSize: '20m',
        maxFiles: '14d',
        level: [LogLevel.info],
    },
    pacHost: process.env.PAC_HOST,
    pbx: {
        extensionLength: parseInt(process.env.PBX_EXTENSION_LENGTH),
        fqdn: process.env.PBX_FQDN,
        recordingPath: process.env.PBX_RECORDING_PATH,
    },
};
