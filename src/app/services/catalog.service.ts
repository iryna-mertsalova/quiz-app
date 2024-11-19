import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from './model/category.model';

@Injectable({
  providedIn: 'root',
})

export class CatalogService {
  API_URL: string = 'https://opentdb.com/api_category.php';
  constructor(private http: HttpClient) {}

  get(): Observable<CategoryModel[]> {
    return this.http
    .get<{ trivia_categories: CategoryModel[] }>(this.API_URL)
    .pipe(map(response => response.trivia_categories.slice(0, 10)));
  }
}
