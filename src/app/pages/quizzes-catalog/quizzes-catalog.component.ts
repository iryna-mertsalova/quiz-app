import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { quizzesCatalog } from '../../test-data/quizzes-catalog';
import { CommonModule } from '@angular/common';
import {
  CardColors,
  CardItemStyle,
  cardItemStyles,
} from '../../ui-kit/constants/card-item';
import { DataService } from '../../services/data.service';
import { CategoryModel } from '../../services/model/category.model';

@Component({
  standalone: true,
  selector: 'app-quizzes-catalog',
  templateUrl: './quizzes-catalog.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuizzesCatalogComponent {
  quizzesCatalog: CategoryModel[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadData(); 
    this.dataService.getData().subscribe((data) => {
      this.quizzesCatalog = data;
    });
  }

  getCardStyle(index: number): CardItemStyle {
    const styleIndex = index + Math.floor(index / 5);
    const enumValues = Object.values(CardColors);
    return cardItemStyles[enumValues[styleIndex % enumValues.length]];
  }
}
