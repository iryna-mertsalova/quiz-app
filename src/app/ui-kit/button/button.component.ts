import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: 'accent' | 'ghost' = 'accent';
  @Input() state: 'enabled' | 'disabled' | 'hover' = 'enabled';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() prev = false;
  @Input() next = false;
}
