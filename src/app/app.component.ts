import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui-kit/button/button.component';
import { UIKitModule } from './ui-kit/ui-kit.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, UIKitModule ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'quiz-app';
}
