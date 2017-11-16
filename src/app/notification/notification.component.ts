import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Notification} from './Notification';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  public notifications: Notification[] = [];
  public notificationForm: FormGroup;

  constructor(private notificationService: NotificationService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setForm();
    this.notifications = this.notificationService.checkLocalNotifications();
  }

  public submitForm(e: Event) {

    e.preventDefault();

    if (this.notificationForm.valid) {

      this.notifications.push(this.notificationService.postLocalNotification(this.notificationForm));
      this.notificationService.setLocalNotifications(this.notifications);
      this.notificationForm.reset();

    } else {
      return null;
    }

  }

  private setForm() {
    this.notificationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      noticeAt: ['', [Validators.required]],
      time: ['', [Validators.minLength(4), Validators.required]]
    });
  }
}
