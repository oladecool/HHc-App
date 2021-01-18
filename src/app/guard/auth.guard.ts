import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  user: any = null;
  constructor(private router: Router, public jwtHelper: JwtHelperService, private api: ApiService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this.api.user().data

    // const token = localStorage.getItem('token');

    // if (token) {
    // resolve(true);
    // } else {
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // resolve(false);
    // }

    if (this.api.user()) {
      console.log(this.api.user())
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login']);
    this.router.navigate(['/sign-in']);
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
