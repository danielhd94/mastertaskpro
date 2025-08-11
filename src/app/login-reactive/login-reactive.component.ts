import { Component, inject, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app/app-state.service';
import { AuthService } from '../services/auth/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-reactive',
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login-reactive.component.html',
  styleUrl: './login-reactive.component.scss',
})
export class LoginReactiveComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
    captcha: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/[0-9]/),
    ]),
  });
  private router = inject(Router);
  private authService = inject(AuthService);

  login() {
    if (this.loginForm.valid) {
      console.log('Formulario válido');
      this.authService.login(
        this.loginForm.value.username!,
        this.loginForm.value.password!
      );
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Formulario inválido');
    }
    console.log(this.loginForm.value);
  }
}
/*
{ 
  "success": false,
  "data": Object,
  "message": "Not founf",
  "code": 404
}
*/
