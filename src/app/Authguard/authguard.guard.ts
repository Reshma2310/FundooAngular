import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private AuthguardService: AuthguardServiceService, private router: Router) {}
  canActivate() : boolean
  {
    if (!this.AuthguardService.gettoken()){
      this.router.navigateByUrl('/login');
    }
    return this.AuthguardService.gettoken();
  }
  
}
