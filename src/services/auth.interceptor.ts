import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, delay, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
export class AuthInterceptor implements HttpInterceptor {
  constructor(private notif: NotificationsService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'JWT ' + token),
      });
      return next.handle(cloned).pipe(
        // retry(3),
        // delay(2000),
        catchError((error) => {
          console.log(error);
          this.notif.error(error.status.toString(), error.message);
          return throwError(error.message || 'Server error');
        })
      );
    } else {
      return next.handle(req).pipe(
        // retry(3),
        // delay(2000),
        catchError((error) => {
          console.log(error);
          this.notif.error(error.status.toString(), error.message);
          return throwError(error.message || 'Server error');
        })
      );
    }
  }
}
