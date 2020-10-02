import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExitpageGuard implements CanDeactivate<any> {
  canDeactivate(component: any): boolean {
    if (component.any.dirty) {

      return confirm('are you sure that you want to discard your changes?');
    }
    // throw new Error('Method not implemented.');
    return true;
  }
}
