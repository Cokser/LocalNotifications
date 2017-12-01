import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  public name: string;
  public uid: string;

  constructor(public auth: AuthService,
              public af: AngularFireAuth) {
  }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName;
        this.uid = auth.uid;
      }
    });
  }

}
