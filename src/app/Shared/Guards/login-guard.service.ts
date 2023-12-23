// auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkIsAlreadyLoggedIn();
  }

  checkIsAlreadyLoggedIn(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/customers']);
      return false;
    } else {
      return true;
    }
  }
}



