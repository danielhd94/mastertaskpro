import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-login',
  standalone: true, // ← Componente Standalone
  imports: [FormsModule, CommonModule], // ← Imports directos
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private appStateService = inject(AppStateService)
  public error = this.appStateService.error()
  username: string = '';
  password: string = '';
  captcha: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Navegación programática simple
  login() {
    if (this.username && this.password) {
      if (this.captchaValidator(this.captcha)) {
        if (this.authService.login(this.username, this.password)) {
          console.log('Login exitoso');
          this.router.navigate(['/dashboard']);
        } else {
          this.appStateService.setError('Credenciales incorrectas');
          this.appStateService.setIsAuthenticated(false);
        }
      } else {
        this.appStateService.setError('Captcha inválido');
        this.appStateService.setIsAuthenticated(false);
      }
    } else {
      this.appStateService.setError('Por favor, complete todos los campos');
      this.appStateService.setIsAuthenticated(false);
    }
    
  }

 public captchaValidator(captcha: string): boolean {
    const hasNumber = /\d/.test(captcha);
    const hasLetter = /[a-zA-Z]/.test(captcha);
    if (!hasNumber || !hasLetter) {
      this.appStateService.setError('Captcha inválido');
      this.appStateService.setIsAuthenticated(false);
      return false;
    }
    return true;
  }
  // Navegación a registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
