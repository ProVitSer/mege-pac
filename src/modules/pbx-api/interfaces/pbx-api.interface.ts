import { ApiProperty } from '@nestjs/swagger';

export class LastCallId {
    @ApiProperty({
        type: String,
        description: 'Последний доступный call_id(id вызова)',
        example: '00000000-01dc-3537-2a4e-650f00003d88',
    })
    call_id: string;
}

export class CdrData {
    @ApiProperty({
        type: String,
        description: 'id вызова',
        example: '9899',
    })
    call_id?: string | null;

    @ApiProperty({
        type: String,
        description: 'id вызова',
        example: '00000000-01dc-3537-2a4e-650f00003d88',
    })
    cdr_id?: string | null;

    @ApiProperty({
        type: Boolean,
        description: 'Отвечен вызов или нет',
        example: 'true',
    })
    answered: boolean;

    @ApiProperty({
        type: String,
        description: 'Номер направления звонка или null',
        example: '460',
    })
    destination_caller_id?: string | null;

    @ApiProperty({
        type: String,
        description: 'Продолжительность звонка или null',
        example: '00:00:03.677104',
    })
    ringing_duration?: string | null;

    @ApiProperty({
        type: String,
        description: 'Номер инициации звонка или null',
        example: '79032223322',
    })
    source_caller_id?: string | null;

    @ApiProperty({
        type: String,
        description: 'Дата и время начала звонка в UTC или null',
        example: '2024-11-08T08:45:39.301307+00:00',
    })
    start_time?: string | null;

    @ApiProperty({
        type: String,
        description: 'Время разговора или null',
        example: '00:00:09.002276',
    })
    talking_duration?: string | null;

    @ApiProperty({
        type: String,
        description: 'Ссылка на запись звонка или null',
        example: 'https://fqdn/monitor/460/[Пупкин, Виталий]_460-79037387391_20241108084542(159).wav",',
    })
    recording_url?: string | null;
}
