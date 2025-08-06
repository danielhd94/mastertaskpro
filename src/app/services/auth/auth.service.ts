import { Injectable, signal, computed, inject } from '@angular/core';
import { AppStateService } from '../app/app-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private appStateService = inject(AppStateService);
  private _isAuthenticated = signal<boolean>(false);
  private _currentUser = signal<string | null>(null);

  isAuthenticated = computed(() => this._isAuthenticated());
  currentUser = computed(() => this._currentUser());

  authState = computed(() => ({
    isAuthenticated: this.isAuthenticated(),
    currentUser: this.currentUser(),
  }));

  login(username: string, password: string) {
    if (username === 'admin' && password === '123456') {
      this._isAuthenticated.set(true);
      this._currentUser.set(username);
      this.appStateService.setIsAuthenticated(true);
      this.appStateService.setUsername(username);
      return true;
    }
    return false;
  }

  logout() {
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
}
