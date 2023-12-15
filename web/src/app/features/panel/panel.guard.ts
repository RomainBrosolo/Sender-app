import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelGuard implements CanActivate {

  constructor(private router: Router, private cookie: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const path = route.url[0].path;
      if( path == 'admin' && this.cookie.get("isConnect")) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
