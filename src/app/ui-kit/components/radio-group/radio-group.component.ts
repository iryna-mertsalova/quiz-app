import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-radio-group',
  templateUrl: './radio-group.component.html',
})
export class RadioGroupComponent {
  @Input() options: string[] = [];
  value: string | null = null;
  @Input() control!: FormControl;
}
