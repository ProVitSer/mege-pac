export interface CallServicePbxService {
    makeCall(data: MakeCallRequest): Promise<BaseCallReply>;
}

export interface MakeCallRequest {
    to: string;
    from: string;
}

export interface BaseCallReply {
    result: boolean;
    message: string;
}

export interface HangupCallRequest {
    extension: string;
}
