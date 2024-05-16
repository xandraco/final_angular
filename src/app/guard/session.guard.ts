import { CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs'
import { ObservablesservicesService } from '../services/observablesservices.service';

@Injectable({providedIn: 'root'})
class PermissionsService {
  sessionValue: boolean = false;

  constructor (
    private observableService: ObservablesservicesService
  ) {}

  canActivateRoute(insertedRoute: string): boolean {
    
    this.observableService.sessionObs.subscribe((value: boolean) => {
      this.sessionValue = value;
    })

    if(insertedRoute == 'loaded-pokemon' && !this.sessionValue) {
      alert('Login to access the table')
      return false;
    } else {
      return true;
    }
  }
}

export const sessionGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivateRoute(route.url.toString());
};
