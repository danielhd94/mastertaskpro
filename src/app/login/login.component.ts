import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // ← Componente Standalone
  imports: [FormsModule, CommonModule], // ← Imports directos
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Navegación programática simple
  login() {
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        console.log('Login exitoso');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Por favor, complete todos los campos');
    }
  }

  // Navegación a registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
