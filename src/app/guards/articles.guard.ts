import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(readonly authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // nếu user tồn tại thì trả về true, còn không thì trả về false
    return this.authService.currentUser.pipe(map(user => !!user));
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { slug } = childRoute.params;

    if(!slug){
      return of(false)
    }
    return this.authService.currentUser.pipe(map(user => !!user.articles.includes(slug)));
  }
}