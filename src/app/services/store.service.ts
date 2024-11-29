import { DestroyRef, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
import { Observable, of, skip, switchMap, take } from 'rxjs';
import { CategoryModel } from './model/category.model';
import * as CategoryActions from '../../store/category/category.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store<AppState>, private destroyRef: DestroyRef) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.store.select(state => state.categories.categories);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(state => state.categories.loading);
  }

  loadCategories(): Observable<CategoryModel[]> {    
    return this.getCategories().pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap((categories) => {
        if (categories && categories.length > 0) {
          return of(categories);
        }
        this.store.dispatch(CategoryActions.loadCategories());
        return this.getCategories().pipe(skip(1)); 
      })
    );
  }
}
