import { PrismaService } from '@app/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PbxCdr } from '../../../../prisma/generated/sqlite';

@Injectable()
export class PbxCdrService {
    constructor(private prismaPbxCdr: PrismaService) {}

    public async getLastCallId(): Promise<number> {
        const cdr = await this.prismaPbxCdr.pbxCdr.findFirst({
            orderBy: {
                id: 'desc',
            },
        });

        return cdr.call_id;
    }

    public async getLastCdr(callId: number): Promise<PbxCdr[]> {
        return await this.prismaPbxCdr.pbxCdr.findMany({
            where: {
                call_id: {
                    gt: callId,
                },
            },
            orderBy: {
                id: 'desc',
            },
        });
    }
}
