import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as ARI from 'ari-client';
import configuration from '@app/common/config/config.provider';
import Ari from 'ari-client';
import { AsteriskAriEnvironmentVariables, ConfigEnvironment } from './interfaces/config.interface';

const asteriskAriFactory = async (ari: AsteriskAriEnvironmentVariables): Promise<{ ariClient: Ari.Client }> => {
    const url = `http://${ari.host}:${ari.port}`;

    return {
        ariClient: await ARI.connect(url, ari.user, ari.password, (err: Error) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        }),
    };
};

const createAsteriskAriProvider = (ari: AsteriskAriEnvironmentVariables): FactoryProvider<{ ariClient: Ari.Client }> => {
    return {
        provide: ari.providerName,
        useFactory: async () => {
            return asteriskAriFactory(ari);
        },
        inject: [ConfigService],
    };
};

export const createAsteriskAri = (): FactoryProvider<{ ariClient: Ari.Client }>[] => {
    const { voip } = configuration() as ConfigEnvironment;

    return voip.asterisk.ari.map((ariApplicationConf: AsteriskAriEnvironmentVariables) => {
        return createAsteriskAriProvider(ariApplicationConf);
    });
};

export const getAsteriskAriProvidesName = () => {
    const { voip } = configuration() as ConfigEnvironment;

    return voip.asterisk.ari.map((ariApplicationConf: AsteriskAriEnvironmentVariables) => {
        return ariApplicationConf.providerName;
    });
};
