export interface PbxCallStatisticsData {
    answered: boolean;
    call_id: number | null;
    source_caller_id: string | null;
    destination_caller_id: string | null;
    ringing_duration: string | null;
    talking_duration: string | null;
    start_time: string | null;
    recording_url: string | null;
    segmentId?: number | null;
    cdr_id: string | null;
    call_history_id: string | null;
}
