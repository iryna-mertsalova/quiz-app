import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() text: string = '';
}
