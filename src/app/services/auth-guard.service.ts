import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router ) {}

  canActivate(): boolean {
    if (sessionStorage.getItem("role") == null ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
