import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
import { catchError, Observable, of } from 'rxjs';
import { CategoryModel } from './model/category.model';
import * as CategoryActions from '../../store/category/category.actions';
import { ErrorHandleService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store<AppState>, private errorService: ErrorHandleService) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.store.select(state => state.categories.categories).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of([]); 
      })
    );
  }

  getLoading(): Observable<boolean> {
    return this.store.select(state => state.categories.loading).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of(false); 
      })
    );
  }

  loadCategories(): void {    
    try {
      this.store.dispatch(CategoryActions.loadCategories());
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
}
