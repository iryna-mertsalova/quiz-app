import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
import { Observable } from 'rxjs';
import { CategoryModel } from './model/category.model';
import * as CategoryActions from '../../store/category/category.actions';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store<AppState>) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.store.select(state => state.categories.categories);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(state => state.categories.loading);
  }

  loadCategories(): void {    
    this.store.dispatch(CategoryActions.loadCategories());
  }
}
