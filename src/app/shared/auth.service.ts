import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn:  'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):   boolean {
    const isLogged =  true;
    if  (isLogged) {
      return true;
    } else {
      this.router.navigate(['details/2']);
      return false;
    }
  }
} 
