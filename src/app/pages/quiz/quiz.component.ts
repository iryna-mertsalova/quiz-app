import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  imports: [UIKitModule],
})
export class QuizComponent {}
