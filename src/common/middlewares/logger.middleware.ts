import { Request, Response, NextFunction } from 'express';
import { Inject, Injectable, LoggerService, NestMiddleware } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { UtilsService } from '../utils';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private requestErrorMessage = null;
    private readonly requestStart = Date.now();

    constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}

    use(request: Request, response: Response, next: NextFunction): void {
        request.on('error', (error) => {
            this.getError(error);
        });

        response.on('error', (error) => {
            this.getError(error);
        });

        const originalSend = response.send;
        let responseBody: any;
        response.send = function (body: any) {
            responseBody = body;
            response.send = originalSend;
            return originalSend.call(this, body);
        };

        response.on('finish', () => {
            this.logMiddleware(request, response, this.requestErrorMessage, responseBody);
        });

        next();
    }

    private getError(error: any) {
        this.requestErrorMessage = error.message;
    }

    private logMiddleware(request: Request, response: Response, errorMessage: string, responseBody?: any) {
        const { httpVersion, method, socket, url } = request;

        const { remoteFamily } = socket;

        let parsedResponseBody = responseBody;
        if (typeof responseBody === 'string') {
            try {
                parsedResponseBody = JSON.parse(responseBody);
            } catch {
                parsedResponseBody = responseBody;
            }
        }

        const messageString = UtilsService.dataToString({
            timestamp: Date.now(),
            processingTime: Date.now() - this.requestStart,
            body: request.body,
            responseBody: parsedResponseBody,
            statusCode: response.statusCode,
            errorMessage,
            httpVersion,
            method,
            remoteAddress: UtilsService.getClientIp(request),
            remoteFamily,
            url,
        });

        this.logger.log(messageString, LoggerMiddleware.name);
    }
}
