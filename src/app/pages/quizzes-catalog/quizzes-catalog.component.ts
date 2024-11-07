import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';

@Component({
  standalone: true,
  selector: 'app-quizzes-catalog',
  templateUrl: './quizzes-catalog.component.html',
  imports: [UIKitModule],
})
export class QuizzesCatalogComponent {}
