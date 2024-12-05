import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-radio-group',
  templateUrl: './radio-group.component.html',
})
export class RadioGroupComponent {
  @Input() options: string[] = [];
  @Input() control!: FormControl;
  value: string | null = null;
}
