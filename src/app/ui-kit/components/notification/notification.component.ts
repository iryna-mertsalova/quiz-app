import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() show: boolean = false;
}
