import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCdrDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Id вызова',
        example: '00000000-01dc-3537-2a4e-650f00003d88',
    })
    call_id: string;
}

export default GetCdrDto;
