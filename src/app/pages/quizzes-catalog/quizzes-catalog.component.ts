import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { CommonModule } from '@angular/common';
import {
  CardColors,
  CardItemStyle,
  cardItemStyles,
} from '../../ui-kit/constants/card-item';
import { CategoryModel } from '../../services/model/category.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CategoryActions from '../../../store/category/category.actions';
import { AppState } from '../../../store/app.store';

@Component({
  standalone: true,
  selector: 'app-quizzes-catalog',
  templateUrl: './quizzes-catalog.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuizzesCatalogComponent {
  categories$: Observable<CategoryModel[]>;
  isLoading$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) {
    this.categories$ = this.store.select(state => state.categories.categories);
    this.isLoading$ = this.store.select(state => state.categories.loading);
    this.store.dispatch(CategoryActions.loadCategories());
  }

  getCardStyle(index: number): CardItemStyle {
    const styleIndex = index + Math.floor(index / 5);
    const enumValues = Object.values(CardColors);
    return cardItemStyles[enumValues[styleIndex % enumValues.length]];
  }
}
