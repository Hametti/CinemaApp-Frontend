import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { UpdateService } from '../services/update/update.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  
  constructor( private router: Router, private updateService: UpdateService) { }

  canActivate(): boolean {
    var token = localStorage.getItem('authorizationToken') || '{}';

    if(token == "{}" || token == "") {
      return true;
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
        localStorage.setItem('authorizationToken', "{}")
        this.updateService.sendUpdate();
        return true;
      }

    return false;
  }
  
}
