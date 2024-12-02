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
import { ErrorHandleService } from '../../app/services/error.service';

@Injectable()
export class CategoryEffects {
  constructor(private categoryService: CategoryService, private errorService: ErrorHandleService) {}

  loadCategories$ = createEffect(() => inject(Actions).pipe(ofType(CategoryActions.loadCategories),
    mergeMap(() => this.categoryService.get().pipe(
      map(categories => CategoryActions.loadCategoriesSuccess({ categories })),
      catchError((error) => {
        this.errorService.handleError(error); 
        return of(CategoryActions.loadCategoriesFail({ error }));
      })
    ))));
}
