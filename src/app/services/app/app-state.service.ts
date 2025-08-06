import { Injectable, signal, computed } from '@angular/core';

export interface AppState {
    isLoading: boolean,
    error: string | null,
    username: string | null,
    isAuthenticated: boolean,
}

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    private _loading = signal<boolean>(false);
    private _error = signal<string | null>(null);
    private _username = signal<string | null>(null);
    private _isAuthenticated = signal<boolean>(false);

    isLoading = computed(() => this._loading());
    error = computed(() => this._error());
    username = computed(() => this._username());
    isAuthenticated = computed(() => this._isAuthenticated());

    appState = computed(() => ({
        isLoading: this.isLoading(),
        error: this.error(),
        username: this.username(),
        isAuthenticated: this.isAuthenticated(),
    }));

    setIsAuthenticated(isAuthenticated: boolean) {
        this._isAuthenticated.set(isAuthenticated);
    }

    setLoading(loading: boolean) {
        this._loading.set(loading);
    }

    setError(error: string | null) {
        this._error.set(error);
    }

    setUsername(user: string | null) {
        this._username.set(user);
    }

    reset() {   
        this._loading.set(false);
        this._error.set(null);
        this._username.set(null);
    }
}