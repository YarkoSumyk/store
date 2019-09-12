import { Router, CanActivate } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

export class AuthGuardService implements CanActivate {
  constructor(public router: Route) {}

  canActivate(router: Route): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}
