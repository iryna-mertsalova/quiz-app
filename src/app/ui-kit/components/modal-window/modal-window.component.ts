import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-modal-window',
  templateUrl: './modal-window.component.html',
})
export class ModalWindowComponent {
  @Output() confirm = new EventEmitter<boolean>();
  
  onConfirm(): void {
    this.confirm.emit(true);
  }
  
  onCancel(): void {
    this.confirm.emit(false);
  }
}
