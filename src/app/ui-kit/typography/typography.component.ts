import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  // @Input() name: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P1' | 'P2' | 'Lbl' = 'P1';
  @Input() fontSize: string = 'tex-[16px]';
  @Input() lineHeight: string = 'leading-[24px]';
  @Input() fontWeight: string = 'font-[400]';
}
