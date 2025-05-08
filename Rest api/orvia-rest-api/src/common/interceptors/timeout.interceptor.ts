import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { timeout } from "rxjs/operators";


@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> { // 5 seconds
    return next.handle().pipe(timeout(60000)); // 60 seconds	
  }

}
