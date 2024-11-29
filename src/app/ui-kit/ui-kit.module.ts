import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from './layout/header/header.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { CardQuizComponent } from './components/card-quiz/card-quiz.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';

@NgModule({
  declarations: [ ButtonComponent, TypographyComponent, LinkComponent, HeaderComponent, CardQuizComponent, SpinnerComponent, QuestionItemComponent ],
  exports: [ ButtonComponent, TypographyComponent, LinkComponent, HeaderComponent, CardQuizComponent, SpinnerComponent, QuestionItemComponent ],
  imports: [ CommonModule, AngularSvgIconModule.forRoot(), RouterModule ],
})
export class UIKitModule {}
