import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../app/auth/services/auth.service';

@Injectable()
export class RedirectIfAuthenticatedGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const urlParams = this.authService.getPortalUrlParam();
    if (urlParams && urlParams.token) {
      this.authService.logout();
      return false;
    }

    if (localStorage.getItem('token')) {
      this.router.navigate(['/admin']);
      return false;
    } else {
      return true;
    }
  }
}
