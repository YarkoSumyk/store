import { Injectable } from '@angular/core';
import * as env from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/interfaces/post.model';

@Injectable()
export class PostsService {
  API_URL = env.environment.POSTS_URL;
  // API_URL = env.environment.GIT_URL;

  constructor(private http: HttpClient) {}
  public getPosts(): Observable<any> {
    return this.http.get<any[]>(this.API_URL);
  }
  public addPost(post: IPost) {
    return this.http.post(this.API_URL, post);
  }
}
