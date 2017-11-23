import {Injectable} from '@angular/core';

@Injectable()
export class NotificationsService {

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
    let tags = form.controls['tags'].value;

    (tags.length > 0) ? tags = tags.split(' ') : tags = [];


    return {

      title: form.controls['title'].value,
      createdAt: new Date().toString(),
      noticeAt: noticeAtDate.toString(),
      tags: tags,
      status: ''

    };
  }

  public setLocalNotifications(notifications) {
    return localStorage.setItem('notifications', JSON.stringify(notifications));
  }
}
