import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router
  ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (this.authService.isLoggedIn()) {
      //   const { rols } = route.data
      //   console.log(rols);
        
      //   if (route.data && rols.indexOf(Number(this.authService.valorUsrActual.id_rol)) === -1) {
      //     this.router.navigate(['/home']);
      //     return false;
      //   }
      //   return true;
      // }
      // this.router.navigate(['/login'])
      // return false;

      if(this.authService.isLoggedIn()){
        const { rols } = route.data

        console.log(this.authService.valorUsrActual);

        if(route.data && rols.includes(Number(this.authService.valorUsrActual.id_rol)) === false ){
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      }
      this.authService.logOut();
      this.router.navigate(['/login']);
    return false;

  }
  
}