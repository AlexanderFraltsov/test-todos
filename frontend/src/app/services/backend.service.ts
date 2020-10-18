import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { BACKEND_PATH, SERVER_PATHS } from '../../../constants/constants';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public posts: IPost[];
  public postsPath = `${BACKEND_PATH}${SERVER_PATHS.POSTS}`;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.postsPath)
      .pipe(
        map((res: IPost[]) => {
          this.posts = res;
          return res;
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err.status, err.message);
          return of(this.posts);
        })
      );
  }

  public addPost(text: string): Observable<IPost> {
    const body = { text };
    return this.http
      .post<IPost>(this.postsPath, body);
  }

  public getSwaggerAddress(): string {
    return `${BACKEND_PATH}${SERVER_PATHS.SWAGGER}`;
  }
}
