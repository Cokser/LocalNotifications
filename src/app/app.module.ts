import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {NotificationsModule} from './notifications/notifications.module';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NotificationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
