import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as Sqlite } from '../../../prisma/generated/sqlite';

@Injectable()
export class PrismaService extends Sqlite implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    public async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', () => {
            app.close();
        });
    }

    public async disconnect(): Promise<void> {
        await this.$disconnect();
    }
}
