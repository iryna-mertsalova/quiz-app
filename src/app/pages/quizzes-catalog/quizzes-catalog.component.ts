import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { CommonModule } from '@angular/common';
import {
  CardColors,
  CardItemStyle,
  cardItemStyles,
} from '../../ui-kit/constants/card-item';
import { CategoryModel } from '../../services/model/category.model';
import { Observable, Subscription, take } from 'rxjs';
import { StoreService } from '../../services/store.service';

@Component({
  standalone: true,
  selector: 'app-quizzes-catalog',
  templateUrl: './quizzes-catalog.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuizzesCatalogComponent implements OnInit, OnDestroy {
  categories$!: Observable<CategoryModel[]>;
  isLoading$!: Observable<boolean>;
  subscription!: Subscription;
  
  constructor(private storeService: StoreService) { }
  
  ngOnInit(): void {
    this.subscription = this.storeService.getCategories()
    .pipe(take(1))
    .subscribe((categories) => {
      if (!categories || categories.length === 0) {
        this.storeService.loadCategories();
      }
    });
    
    this.categories$ = this.storeService.getCategories();
    this.isLoading$ = this.storeService.getLoading();
  }
  
  getCardStyle(index: number): CardItemStyle {
    const styleIndex = index + Math.floor(index / 5);
    const enumValues = Object.values(CardColors);
    return cardItemStyles[enumValues[styleIndex % enumValues.length]];
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
