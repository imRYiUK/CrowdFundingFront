import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LocalService} from "./services/local.service";
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {AuthGuard} from "./auth.guard";

@Injectable({
  providedIn: 'root',
})
export class CheckAuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    this.authService.verify();
    return true;
  }
}
export const checkAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=> {
  return inject(CheckAuthGuard).canActivate(route, state);
};
