import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    if (component.canDeactivate()) {
      return confirm('Veuillez vous assurer de la sauvegarde de toutes vos donnés avant de quitter la page de la déclaration fiscale');
    } else {
      return true;
    }
  }
}
