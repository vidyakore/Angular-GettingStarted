import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {
    

  }
  canActivate(
    //ActivatedRouteSnapshot to provide current route information
    route: ActivatedRouteSnapshot,  
    // RouterStateSnapshot to provide router state information
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id<1)
      {
        alert('Invalid prduct id');
        this.router.navigate(['/products']);
        return false;
      }
    return true;

  }
  
}
