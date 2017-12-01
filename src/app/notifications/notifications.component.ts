import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material';
import {Notification} from './notification/Notification';
import {NotificationsService} from './notifications.service';
import {NotificationComponent} from './notification/notification.component';
import {AngularFireAuth} from 'angularfire2/auth';

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
  public options = {
    all: ['active', 'inactive'],
    active: ['active'],
    inactive: ['inactive']
  };
  public selected: string = this.options.all[0];
  public searchPlaceholder = 'Search...';
  private userUid: string;

  @ViewChild(NotificationComponent)
  private notificationComponent: NotificationComponent;

  constructor(private notificationService: NotificationsService,
              private fb: FormBuilder,
              public af: AngularFireAuth) {
  }

  ngOnInit() {
    this.setForm();
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.notificationService.getNotifications(auth.uid)
          .subscribe(notifications => {
            this.notifications = notifications;
          });
      }
    });

  }

  public getKeys( item: any) {
    return Object.keys(item);
  }

  public checkOptions(notificationStatus: any, currentStatus: any) {
    if ( this.options[currentStatus].includes(notificationStatus) ) {
      return true;
    }
  }

  public submitForm(e: Event) {

    e.preventDefault();

    if (this.notificationForm.valid) {

      const newNotification = this.notificationService.postNotification(this.notificationForm, this.userUid);

      this.notificationService.addNotification(newNotification);

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
      tags: ['', [Validators.maxLength(30), Validators.pattern(/^\w+(\s+\w+)*$/)]],

    });
  }
}
