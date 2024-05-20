import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomStorage } from '../custom-storage';
import { Constants } from '../models/constants';
import { NotificationService } from '../services/notification.service';
import { Utilities } from '../services/utilities.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private notification: NotificationService,
    private auth: AuthService,
    private router: Router,
    private common: Utilities
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const roles = next.data.roles as Array<string>;
    if (this.checkRoleAccess()) {
      if (roles) {
        if (roles.some((role) => CustomStorage.currentUser.role.includes(role))) {
          if ((CustomStorage.currentUser.alliance_type === Constants.TYPE_ALLIANCE.SHARE_PRODUCT
            && next.url[0].path !== 'parent-store' && next.url[0].path !== 'child-store'
            && next.url[0].path !== 'user-management') ||
            (CustomStorage.currentUser.alliance_type === Constants.TYPE_ALLIANCE.SHARE_POS &&
              (next.url[0].path === 'question-and-answer' || next.url[0].path === 'message'))) {
            next.url[0].path = '**';
          }
          return true;
        } else {
          this.router.navigate(['admin']);
          return false;
        }
      }
      return true;
    } else {
      this.notification.showError('アクセスが拒否されました。');
      this.auth.logout();
    }
  }

  checkRoleAccess(): boolean {
    return this.common.checkRoleAccess(Constants.LIST_ROLE_ACCESS);
  }
}
