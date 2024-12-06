import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuestionModel } from './model/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private API_URL: string = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple';
  constructor(private http: HttpClient) {}

  get(category: number): Observable<QuestionModel[]> {
    return this.http
    .get<{ results: QuestionModel[] }>(this.API_URL)
    .pipe(
      map(response => response.results),  
      catchError(() => {
        return throwError(() => new Error('An error occurred. Please reload the page or try later.'));
      })
    );
  }
}
