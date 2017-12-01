import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
  } from 'angularfire2/firestore';
import {Notification} from './notification/Notification';

@Injectable()
export class NotificationsService {


  notificationsCollection: AngularFirestoreCollection<Notification>;
  notifications: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
  }

  getNotifications(user: string) {
    this.notificationsCollection = this.afs.collection('/notifications', ref => ref.where('creator', '==', user));
    this.notifications = this.notificationsCollection.snapshotChanges()
      .map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          data.uid = a.payload.doc.id;
          this.notificationsCollection.doc(a.payload.doc.id).update({'uid': a.payload.doc.id});
          return data;
        });
      });
    return this.notifications;
  }

  addNotification(notification: Notification) {
    this.notificationsCollection.add(notification);
  }

  public postNotification(form, user) {

    const newDate = form.controls['noticeAt'].value.toString(),
      noticeAtDate = new Date(newDate.toString() + ' ' + form.controls['time'].value);
    let tags = form.controls['tags'].value;

    (tags.length > 0) ? tags = tags.split(' ') : tags = [];

    return {

      title: form.controls['title'].value,
      creator: user,
      noticeAt: noticeAtDate.toString(),
      tags: tags,
      status: 'active'

    };
  }
}
