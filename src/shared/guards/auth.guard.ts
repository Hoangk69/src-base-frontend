import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomStorage } from '../custom-storage';
import { Constants } from '../models/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const urlParams = this.authService.getPortalUrlParam();
    if (urlParams && urlParams.token) {
      this.authService.logout();
      return false;
    }

    if (window.localStorage.getItem('token')) {
      if (CustomStorage.currentUser.ischangedpassword == 1) {
        return true;
      } else {
        this.authService.logout();
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  checkRoleParent(currentRole: string[]): boolean {
    return Constants.LIST_ROLE_PARENT.some((role) => currentRole.includes(role));
  }
}
