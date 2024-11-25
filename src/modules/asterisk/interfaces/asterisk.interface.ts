import { OriginateCallStatus } from './asterisk.enum';

export interface SendCallResult {
    uniqueid?: string;
    originateCallStatus: OriginateCallStatus;
}

export interface OriginateCallData {
    from: string;
    to: string;
}
