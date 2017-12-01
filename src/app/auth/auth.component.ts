import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
              public af: AngularFireAuth) {
    this.checkAuth();
  }

  ngOnInit() {
  }

  public checkAuth() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/notifications');
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
