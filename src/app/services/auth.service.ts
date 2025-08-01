import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  get isAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }

  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  constructor(private router: Router) {
    // Verificar si hay token en localStorage al inicializar
    const token = localStorage.getItem('auth_token');
    this.isAuthenticatedSubject.next(!!token);
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulación de autenticación
      setTimeout(() => {
        if (username && password) {
          localStorage.setItem('auth_token', 'fake-jwt-token');
          this.isAuthenticatedSubject.next(true);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  register(userData: any): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulación de registro
      setTimeout(() => {
        localStorage.setItem('auth_token', 'fake-jwt-token');
        this.isAuthenticatedSubject.next(true);
        resolve(true);
      }, 1000);
    });
  }
}