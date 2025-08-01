import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true, // ← Componente Standalone
  imports: [FormsModule, CommonModule], // ← Imports directos
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  // Navegación programática simple
  register() {
    if (this.username && this.email && this.password) {
      // Simulamos registro exitoso
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, complete todos los campos');
    }
  }

  // Navegación a login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
