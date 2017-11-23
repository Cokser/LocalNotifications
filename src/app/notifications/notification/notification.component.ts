import {Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material';
import {Notification} from './Notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationComponent implements OnInit {

  @Input() notification: Notification;
  @Output() setSearchValue = new EventEmitter<string>();
  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.checkNotification();
  }

  public  openSnackBar() {
    this.snackBar.open(this.notification.title, this.notification.status, {
      duration: 5000,
    });
  }

  public setValue(searchValue: string) {
    this.setSearchValue.emit(searchValue);
  }

  public checkNotification() {

    const newDate = new Date(this.notification.noticeAt),
      rightNow = new Date(),
      expire = newDate.getTime() - rightNow.getTime();

    if (expire > 0) {
      this.setNotificationStatus('active');
      this.setNotificationTimer(expire);

    } else {
      this.setNotificationStatus('inactive');
    }
  }

  private setNotificationStatus( status: string) {
    this.notification.status = status;
  }

  private setNotificationTimer( expire) {
    return setTimeout(() => this.notificationEnd(), expire);
  }

  private notificationEnd() {
    this.setNotificationStatus('inactive');
    this.openSnackBar();
  }
}
