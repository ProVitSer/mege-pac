import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SyncPbxCdrSchedule } from './schedules/sync-pbx-call-statistics.schedule';
import { PacSqlModule } from '../pac-connector/modules/pac-sql/pac-sql.module';
import { PbxCdrService } from './services/pbx-cdr.service';

@Module({
    imports: [ScheduleModule.forRoot(), PacSqlModule],
    providers: [SyncPbxCdrSchedule, PbxCdrService],
    exports: [PbxCdrService],
})
export class PbxCdrModule {}
