import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetCdrDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'Id вызова',
        example: '9988',
    })
    call_id: number;
}

export default GetCdrDto;
