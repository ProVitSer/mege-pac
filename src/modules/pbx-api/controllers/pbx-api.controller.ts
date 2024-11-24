import { Body, Controller, Get, Post } from '@nestjs/common';
import { PbxApiService } from '../services/pbx-api.service';
import GetCdrDto from '../dto/get-cdr.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CdrData, LastCallId } from '../interfaces/pbx-api.interface';
import MakeCallDto from '../dto/make-call.dto';

@ApiTags('pbx-api')
@Controller()
export class PbxApiController {
    constructor(private readonly pbxApiService: PbxApiService) {}

    @ApiOperation({
        summary: 'Получение последнего id вызова',
    })
    @ApiOkResponse({
        description: 'Последний id вызова находящийся в бд',
        type: LastCallId,
    })
    @Get('last-call-id')
    async getLastPbxCdrCallId() {
        return await this.pbxApiService.getLastPbxCdrCallId();
    }

    @ApiOperation({
        summary: 'Получение cdr(статстики) звонков АТС',
    })
    @ApiOkResponse({
        description: 'Статистика вызовов',
        type: CdrData,
    })
    @Post('cdr')
    async getCdr(@Body() cdr: GetCdrDto) {
        return await this.pbxApiService.getCdr(cdr.call_id);
    }

    @ApiOperation({
        summary: 'Инициация вызова между внутренним и внешнем номером',
    })
    @ApiOkResponse({
        description: 'Результат инициации вызова',
    })
    @Post('make-call')
    async makeCall(@Body() callData: MakeCallDto) {
        return await this.pbxApiService.makePbxCall(callData);
    }
}
