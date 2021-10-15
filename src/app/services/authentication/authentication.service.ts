import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient ) { }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post("http://localhost:11207/api/name/authenticate"
    ,{ Username: username, Password: password }
    ,{ responseType: 'text' }
    );
  }
}
