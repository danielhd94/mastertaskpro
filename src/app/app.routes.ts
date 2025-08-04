import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guards';
import { AuthGuard } from './guards/auth.guards';
import { ConfirmExitGuard } from './guards/confirm-exit.guards';

// Configuración simple de rutas
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login-reactive/login-reactive.component').then(
        (m) => m.LoginReactiveComponent
      ), // ← Lazy loading
    canActivate: [NoAuthGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent), // ← Lazy loading
    canActivate: [NoAuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ), // ← Lazy loading
    canDeactivate: [ConfirmExitGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
