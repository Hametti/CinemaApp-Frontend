import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { UpdateService } from '../services/update/update.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router: Router, private updateService: UpdateService) {}
  canActivate(): boolean {
    var token = localStorage.getItem('authorizationToken') || '{}';

    if(token == "{}") {
      alert("You're not logged in");
      this.router.navigate(['/main-page']);
      return false;
    }

    type JWTDecode = {
      id: string,
      login: string,
      iat: number,
      exp: number
    }

    var decodedToken: JWTDecode = jwt_decode(token);

    if(Date.now() >= decodedToken.exp * 1000 || token == "")
      {
        alert("Your session expired");
        localStorage.setItem('authorizationToken', "{}")
        this.updateService.sendUpdate();
        this.router.navigate(['/main-page']);
        return false;
      }

    return true;
  }
  
}
