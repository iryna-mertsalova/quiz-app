import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  of,
} from 'rxjs';
import { CategoryService } from '../../app/services/category.service';
import * as CategoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(private categoryService: CategoryService) {}

  loadCategories$ = createEffect(() => inject(Actions).pipe(ofType(CategoryActions.loadCategories),
    mergeMap(() => this.categoryService.get().pipe(
      map(categories => CategoryActions.loadCategoriesSuccess({ categories })),
      catchError(error => of(CategoryActions.loadCategoriesFail({ error: error.message })))
    ))));
}
