import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material';
import {Notification} from './Notification';
import {NotificationsService} from './notifications.service';
import {NotificationComponent} from './notification/notification.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationsComponent implements OnInit {

  public notifications: Notification[] = [];
  public notificationForm: FormGroup;
  public searchValue: string;
  public filters = [
    {name: 'tags', value: true},
    {name: 'title', value: true}
  ];

  public searchPlaceholder = 'Search...';

  @ViewChild(NotificationComponent)
  private notificationComponent: NotificationComponent;

  constructor(private notificationService: NotificationsService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setForm();
    this.notifications = this.notificationService.checkLocalNotifications();
  }

  public submitForm(e: Event) {

    e.preventDefault();

    if (this.notificationForm.valid) {

      const newNotification = this.notificationService.postLocalNotification(this.notificationForm);

      // this.notificationComponent.checkNotification();

      this.notifications.push(newNotification);
      this.notificationService.setLocalNotifications(this.notifications);

      this.notificationForm.reset();

    } else {
      return null;
    }
  }

  public setSearchValue(searchValue: string) {
    this.searchValue = searchValue;
  }

  private setForm() {
    this.notificationForm = this.fb.group({

      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^\w+(\s+\w+)*$/)]],
      noticeAt: ['', [Validators.required]],
      time: ['', [Validators.minLength(4), Validators.required]],
      tags: ['', [ Validators.maxLength(30), Validators.pattern(/^\w+(\s+\w+)*$/)]],

    });
  }
}
