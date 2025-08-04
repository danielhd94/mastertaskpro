import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './login-reactive.component.html',
  styleUrl: './login-reactive.component.scss'
})
export class LoginReactiveComponent {
  username = new FormControl<string>('');
  password = new FormControl<string>('');
  captcha = new FormControl<string>('');


  login() {
    console.log(this.username.value, this.password.value, this.captcha.value);
  }
}
