import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {LocalService} from "./services/local.service";
import {Observable} from "rxjs";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private localService: LocalService, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.getter();
    const token = this.localService.getData("token")
    if (token) {
      console.log(`what + ${token}`)
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      return this.router.createUrlTree(['/login']);
    }
  }

}


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate(route, state);
};
