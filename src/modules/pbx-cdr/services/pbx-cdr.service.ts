import { PrismaService } from '@app/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PbxCdr } from '../../../../prisma/generated/sqlite';

@Injectable()
export class PbxCdrService {
    constructor(private prismaPbxCdr: PrismaService) {}

    public async getLastCallId(): Promise<string> {
        const cdr = await this.prismaPbxCdr.pbxCdr.findFirst({
            orderBy: {
                id: 'desc',
            },
        });

        return cdr?.call_history_id || '';
    }

    public async cdrByCallHistoryId(callHistoryId: string): Promise<PbxCdr[]> {
        return this.prismaPbxCdr.pbxCdr.findMany({
            where: {
                call_history_id: {
                    gt: callHistoryId,
                },
            },
            orderBy: {
                id: 'desc',
            },
        });
    }
}
