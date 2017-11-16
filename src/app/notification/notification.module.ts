import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotificationService} from './notification.service';
import {NotificationComponent} from './notification.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
} from '@angular/material';


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
    MatListModule
  ],
  exports: [
    NotificationComponent
  ],
  declarations: [NotificationComponent],
  providers: [NotificationService]
})
export class NotificationModule {
}
