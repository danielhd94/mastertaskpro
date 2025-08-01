import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmExitGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean {
    console.log('ConfirmExitGuard: canDeactivate');

    // Check if component implements the interface and has the canDeactivate method
    if (component && typeof component.canDeactivate === 'function') {
      return component.canDeactivate();
    }

    // If component doesn't implement the interface, show confirmation dialog
    return confirm('¿Estás seguro de querer salir?');
  }
}
