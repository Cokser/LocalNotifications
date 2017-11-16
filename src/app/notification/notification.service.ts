import {Injectable} from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() {
  }

  public checkLocalNotifications() {
    const localNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (localNotifications) {
      return localNotifications;
    } else {
      return [];
    }
  }

  public postLocalNotification(form) {

    const newDate = form.controls['noticeAt'].value.toString(),
      noticeAtDate = new Date(newDate.toString() + ' ' + form.controls['time'].value);

    const notification = {

      title: form.controls['title'].value,
      createdAt: new Date().toString(),
      noticeAt: noticeAtDate.toString(),

    };
    return notification;
  }

  public setLocalNotifications(notifications) {
    return localStorage.setItem('notifications', JSON.stringify(notifications));
  }

}
