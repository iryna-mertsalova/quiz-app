import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() text: string = '';
  @Input() isChecked: boolean = false;
  @Output() onChange = new EventEmitter<string>();

  handleChange() {
    this.isChecked = true;
    this.onChange.emit(this.text);
  }
}
