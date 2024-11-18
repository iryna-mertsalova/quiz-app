import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from './layout/header/header.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { CardQuizComponent } from './components/card-quiz/card-quiz.component';

@NgModule({
  declarations: [ ButtonComponent, TypographyComponent, LinkComponent, HeaderComponent, CardQuizComponent ],
  exports: [ ButtonComponent, TypographyComponent, LinkComponent, HeaderComponent, CardQuizComponent ],
  imports: [ CommonModule, AngularSvgIconModule.forRoot(), RouterModule ],
})
export class UIKitModule {}
