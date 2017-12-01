import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationsComponent} from './notifications.component';
import {AuthGuard} from '../core/auth.guard';

const routes: Routes = [
  {path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class NotificationsRoutingModule {
}
