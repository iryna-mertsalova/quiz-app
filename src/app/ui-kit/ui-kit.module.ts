import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [ ButtonComponent, TypographyComponent, HeaderComponent ],
  exports: [ ButtonComponent, TypographyComponent, HeaderComponent ],
  imports: [ CommonModule, HttpClientModule, AngularSvgIconModule.forRoot() ],
})
export class UIKitModule {}
