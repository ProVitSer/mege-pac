export interface TransformedPbxCallStatisticsData {
    callId: number | null;
    answered: boolean;
    destinationCallerId: string | null;
    ringingDuration: string | null;
    sourceCallerId: string | null;
    startTime: string | null;
    talkingDuration: string | null;
    recordingUrl: string | null;
    segmentId: number | null;
}

export interface PbxCallStatisticsData {
    action_dn_caller_id: string | null;
    action_dn_display_name: string | null;
    action_dn_type: number | null;
    action_type: number | null;
    answered: boolean;
    call_cost: number | null;
    call_id: number | null;
    destination_caller_id: string | null;
    destination_display_name: string | null;
    destination_dn: string | null;
    destination_type: number | null;
    dst_rec_id: string | null;
    indent: number | null;
    quality_report: boolean;
    reason: string | null;
    recording_url: string | null;
    ringing_duration: string | null;
    segment_id: number | null;
    sentiment_score: string | null;
    source_caller_id: string | null;
    source_display_name: string | null;
    source_dn: string | null;
    source_type: number | null;
    src_rec_id: number | null;
    start_time: string | null;
    subrow_desc_number: number | null;
    summary: string | null;
    talking_duration: string | null;
    transcription: string | null;
    action_dn_dn: string | null;
}
