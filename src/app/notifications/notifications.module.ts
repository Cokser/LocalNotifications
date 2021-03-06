import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotificationsService} from './notifications.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import {SearchPipe} from './filter.pipe';
import {NotificationsComponent} from './notifications.component';
import {NotificationComponent} from './notification/notification.component';
import {NotificationsRoutingModule} from './notifications-routing.module';
import {CoreModule} from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    NotificationsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    NotificationsComponent
  ],
  declarations: [
    NotificationsComponent,
    NotificationComponent,
    SearchPipe
  ],
  providers: [NotificationsService]
})
export class NotificationsModule {
}
