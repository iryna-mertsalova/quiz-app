import { Component, Input } from '@angular/core';
import { TextName, textTypes } from '../../text-types';

@Component({
  selector: 'app-ui-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input() type: TextName = 'P1';
  @Input() highlightText: 'none' | 'framed' | 'ellipse' = 'none';
  @Input() text: string = '';

  get classes(): string {
    let baseClass = textTypes[this.type] || '';
    const highlightClass = this.highlightText === 'ellipse'
      ? ' text-error'
      : this.highlightText === 'framed'
        ? ' bg-warning text-primary'
        : '';
    return `[ ${baseClass} ${highlightClass} ]`;
  }
}
