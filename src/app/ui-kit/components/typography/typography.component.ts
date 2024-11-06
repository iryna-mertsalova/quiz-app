import { Component, Input } from '@angular/core';
import { TextTypes, textTypesClasses } from '../../text-types';

@Component({
  selector: 'app-ui-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input() type: TextTypes = 'P1';
  @Input() highlightText: 'none' | 'framed' | 'ellipse' = 'none';
  classType: string = '';

  get classes(): string {
    if (textTypesClasses[this.type]) {
      this.classType = textTypesClasses[this.type];
    }
    return `[ ${this.classType} ${this.highlightTextStyle} ]`;
  }

  get highlightTextStyle(): string {
    switch (this.highlightText) {
      case 'ellipse':
        return ' text-error';
      case 'framed':
        return ' bg-warning text-primary p-2';
      default:
        return '';
    }
  }
}
