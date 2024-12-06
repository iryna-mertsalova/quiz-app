import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuestionModel } from './model/question.model';
import { API_ENDPOINTS } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  get(category: number): Observable<QuestionModel[]> {
    return this.http
    .get<{ results: QuestionModel[] }>(`${API_ENDPOINTS.QUESTION_URL}category=${category}&type=multiple`)
    .pipe(
      map(response => response.results),  
      catchError(() => {
        return throwError(() => new Error('An error occurred. Please reload the page or try later.'));
      })
    );
  }
}
