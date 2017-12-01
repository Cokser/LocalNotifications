import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AuthService} from './auth.service';
import {NotifyService} from './notify.service';


@NgModule({
  imports: [
    // CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService, NotifyService]
})
export class CoreModule {
}
