import { Injectable } from '@nestjs/common';
import { NodeEnvType } from '../config/interfaces/config.enum';
import * as requestIp from 'request-ip';
import { Request } from 'express';

export function getEnv(): NodeEnvType {
    return process?.env?.NODE_ENV.trim() as NodeEnvType;
}

export function isDev(): boolean {
    return getEnv() === 'development';
}

@Injectable()
export class UtilsService {
    static normalizeIp(ip: string): string {
        return ip && ip.indexOf('::ffff:') > -1 ? ip.substring(7) : ip;
    }

    static getClientIp(request: Request): string {
        return this.normalizeIp(requestIp.getClientIp(request));
    }

    static dataToString<T> (data: T): string | undefined | T {

        try {

            if (Array.isArray(data)) {

                return JSON.stringify(data);

            }

            switch (typeof data) {

                case 'string':
                    return data;
                case 'number':
                case 'symbol':
                case 'bigint':
                case 'boolean':
                case 'function':
                    return data.toString();
                case 'object':
                    return JSON.stringify(data);
                default:
                    return undefined;
            }

        } catch (e) {

            return data;

        }
    }
}
