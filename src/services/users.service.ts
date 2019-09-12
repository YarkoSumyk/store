import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/pages/users/user.model';
import * as env from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL = env.environment.USER_URL;
  constructor(private http: HttpClient) {}

  public getUsers(param): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API_URL}/users`, { params: param });
  }
  public createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}/users`, user);
  }
  public deleteUser(id: number): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`${this.API_URL}/users/${id}`);
  }
  public editUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.API_URL}/users/${user.id}`, user);
  }
}
