import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ ButtonComponent, TypographyComponent ],
  exports: [ ButtonComponent, TypographyComponent ],
  imports: [ CommonModule, HttpClientModule, AngularSvgIconModule.forRoot() ],
})
export class UIKitModule {}
