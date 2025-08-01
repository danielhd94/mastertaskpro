import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // ← Componente Standalone
  imports: [FormsModule, CommonModule], // ← Imports directos
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  // Navegación programática simple
  login() {
    if (this.username && this.password) {
      // Simulamos login exitoso
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, complete todos los campos');
    }
  }

  // Navegación a registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
