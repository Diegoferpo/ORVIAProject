import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { error } from "console";
import path from "path";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

    private readonly logger = new Logger(AllExceptionsFilter.name);
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = 
            exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        
        const message = exception instanceof HttpException ? exception.getResponse() 
            : exception;

        this.logger.error(`Status: ${status} Error: ${JSON.stringify(message)}`);

        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: message,
        });
    }

}