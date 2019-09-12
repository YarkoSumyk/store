import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, delay, catchError } from 'rxjs/operators';
import * as env from 'src/environments/environment';
import { NotificationsService } from 'angular2-notifications';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  API_URL = env.environment.TODOS_URL;
  // API_URL = env.environment.SUN_URL;

  constructor(private http: HttpClient, private notif: NotificationsService) {}

  public getTodos(): Observable<any> {
    return this.http.get<any[]>(this.API_URL + 'x');
    // return this.http.get<any[]>(this.API_URL );
    // .pipe(
    // retry(3),
    // delay(2000),
    //   catchError((error) => {
    //     console.log(error);
    //     this.notif.error(error.status.toString(), error.message);
    //     return throwError(error.message || 'Server error');
    //   })
    // );
  }
}
