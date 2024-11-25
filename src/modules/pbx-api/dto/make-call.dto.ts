import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class MakeCallDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'Внешние номер абонента',
        example: '79102223311',
    })
    source_caller_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'Внутренний номер абонента',
        example: '102',
    })
    caller_id: number;
}

export default MakeCallDto;
