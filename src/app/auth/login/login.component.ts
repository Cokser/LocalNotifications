import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              public auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.setForm();
  }

  private setForm() {
    this.loginForm = this.fb.group({
      email: ['',
        [
          Validators.required, Validators.email
        ]
      ],
      password: ['',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6), Validators.maxLength(25)
        ]
      ]
    });
  }

  // Using getters will make your code look pretty
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  signIn() {
    this.auth.emailSignIn(this.email.value, this.password.value);
    this.loginForm.reset();
  }
}
