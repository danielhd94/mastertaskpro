import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate): boolean {
    if (component.canDeactivate()) {
      return component.canDeactivate();
    }
    //false para cancelar la navegación o true para continuar
    return confirm('¿Estás seguro de querer salir?');
  }
}
