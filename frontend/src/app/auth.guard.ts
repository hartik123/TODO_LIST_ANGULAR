import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './authservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean{
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      this.router.navigate(['/signin']);
      return false;
    }
  }
}