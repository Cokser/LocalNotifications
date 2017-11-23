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
  MatListModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import {SearchPipe} from './filter.pipe';
import {NotificationsComponent} from './notifications.component';
import {NotificationComponent} from './notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
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
