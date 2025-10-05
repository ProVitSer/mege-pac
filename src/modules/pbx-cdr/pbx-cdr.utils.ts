export function getPbxStatisticsQuery(periodFrom: string, periodTo: string, callId?: string) {
    return `
    SELECT json_agg(t) FROM (
        SELECT
        cdr.cdr_id as cdr_id,
        cdr.call_history_id as call_history_id,
        CASE
            WHEN cdr.cdr_answered_at IS NULL THEN 0
            ELSE 1
        END AS answered,
        cdr.source_participant_phone_number as source_caller_id,
        CASE
            WHEN TRIM(cdr.destination_dn_number) != ''
            THEN cdr.destination_dn_number
            ELSE cdr.destination_participant_phone_number
        END AS destination_caller_id,
        TO_CHAR(
            CASE
                WHEN cdr_answered_at IS NOT NULL
                THEN cdr_answered_at - cdr_started_at
                ELSE cdr_ended_at - cdr_started_at
            END,
            'HH24:MI:SS.US'
        ) AS ringing_duration,
        TO_CHAR(
            CASE
                WHEN cdr_answered_at IS NOT NULL
                THEN cdr_ended_at - cdr_answered_at
                ELSE INTERVAL '0 seconds'
            END,
            'HH24:MI:SS.US'
        ) AS talking_duration,
        cdr.cdr_started_at as start_time,
        rec.recording_url as recording_url
    FROM cdroutput cdr
    LEFT JOIN recordings rec ON rec.cdr_id = cdr.cdr_id
    WHERE cdr.cdr_started_at > '${periodFrom}' and  cdr.cdr_ended_at < '${periodTo}'
    ${callId ? `AND cdr.cdr_id > '${callId}'` : ''}
    ORDER BY cdr.cdr_id DESC
) AS t`;
}
