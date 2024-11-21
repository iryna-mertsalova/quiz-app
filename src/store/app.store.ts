import { Action, ActionReducer } from '@ngrx/store';
import { categoryReducer, CategoryState } from './category/category.reducer';
import { CategoryEffects } from './category/category.effects';

export interface AppState {
  categories: CategoryState;
}

export interface AppStore {
  categories: ActionReducer<CategoryState, Action>;
}

export const appStore: AppStore = {
  categories: categoryReducer,
};

export const appEffects = [CategoryEffects];
