import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ButtonComponent, TypographyComponent ],
  exports: [ ButtonComponent, TypographyComponent ],
  imports: [CommonModule],
})
export class UIKitModule {}
