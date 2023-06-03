import { Component, Input } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() customText: string = '';
  @Input() btnId: string = '';
  @Input() message: string = '';
  @Input() color: any;

  constructor(private notificationService: NotificationService) {}

  clickedBtn() {
    this.notificationService.btnClicked(this.message);
  }
}
