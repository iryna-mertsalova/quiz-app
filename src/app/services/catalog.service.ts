import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from './model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_URL: string = 'https://opentdb.com/api_category.php';
  constructor(private http: HttpClient) {}

  get(): Observable<CategoryModel[]> {
    return this.http
    .get<{ trivia_categories: CategoryModel[] }>(this.API_URL)
    .pipe(
      map(response => response.trivia_categories.slice(1, 11)),  
      catchError(() => {
        return throwError(() => new Error('An error occurred. Please reload the page or try later.'));
      })
    );
  }
}
