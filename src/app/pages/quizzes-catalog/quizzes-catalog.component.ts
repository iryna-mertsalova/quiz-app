import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { CommonModule } from '@angular/common';
import {
  CardColors,
  CardItemStyle,
  cardItemStyles,
} from '../../ui-kit/constants/card-item';
import { CategoryModel } from '../../services/model/category.model';
import { catchError, map, Subscription } from 'rxjs';
import { CategoryService } from '../../services/catalog.service';

@Component({
  standalone: true,
  selector: 'app-quizzes-catalog',
  templateUrl: './quizzes-catalog.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuizzesCatalogComponent implements OnInit, OnDestroy {
  quizzesCatalog: CategoryModel[] = [];
  errorMessage: string = '';

  subscription!: Subscription;

  constructor(private categoriesService: CategoryService) {}

  ngOnInit(): void {
    this.subscription = this.categoriesService.get().pipe(
      map(data => this.quizzesCatalog = data),
      catchError(error => this.errorMessage = error)
    ).subscribe();
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
