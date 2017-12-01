import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  public singUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              public auth: AuthService) {
  }

  ngOnInit() {
    this.setForm();
  }

  private setForm() {
    this.singUpForm = this.fb.group({
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
  get email() { return this.singUpForm.get('email'); }
  get password() { return this.singUpForm.get('password'); }

  signUp() {
    this.auth.emailSignUp(this.email.value, this.password.value);
    this.singUpForm.reset();
  }
}
