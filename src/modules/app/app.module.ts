import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@app/common/config/config.provider';
import { WinstonModule } from 'nest-winston';
import { createLogger } from '@app/common/config/logger.config';
import { LogLevel } from '@app/common/config/interfaces/config.enum';
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { AppLoggerService } from '@app/common/logger/logger.service';
import { LoggerMiddleware } from '@app/common/middlewares/logger.middleware';
import { ErrorsInterceptor } from '@app/common/interceptors/errors.interceptor';
import { PrismaModule } from '../prisma/prisma.module';
import { PbxCdrModule } from '../pbx-cdr/pbx-cdr.module';
import { PacConnectorModule } from '../pac-connector/pac-connector.module';
import { PbxApiModule } from '../pbx-api/pbx-api.module';
import { AsteriskModule } from '../asterisk/asterisk.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
            cache: false,
        }),
        WinstonModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                return createLogger(configService.get<LogLevel[]>('log.level'));
            },
            inject: [ConfigService],
        }),
        PrismaModule,
        PbxCdrModule,
        PacConnectorModule,
        PbxApiModule,
        AsteriskModule,
        RouterModule.register([
            {
                path: '',
                children: [
                    {
                        path: 'pbx-api',
                        module: PbxApiModule,
                    },
                ],
            },
        ]),
    ],
    controllers: [],
    providers: [
        AppLoggerService,
        LoggerMiddleware,
        {
            provide: APP_INTERCEPTOR,
            useClass: ErrorsInterceptor,
        },
    ],
    exports: [AppLoggerService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
