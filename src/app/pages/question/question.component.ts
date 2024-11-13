import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './question.component.html',
  imports: [UIKitModule],
})
export class QuestionComponent {}
