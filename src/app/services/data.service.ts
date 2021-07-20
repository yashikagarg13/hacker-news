import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import  { throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'https://hacker-news.firebaseio.com/v0/'

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error!'
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  public getTopStories() {
    return this.httpClient
      .get(`${this.REST_API_SERVER}topstories.json?print=pretty`)
      .pipe(retry(3), catchError(this.handleError))
  }

  public getItem(storyId) {
    return this.httpClient
      .get(`${this.REST_API_SERVER}item/${storyId}.json?print=pretty`)
      .pipe(retry(3), catchError(this.handleError))
  }

}
