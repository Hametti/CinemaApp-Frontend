import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient ) { }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post("https://localhost:44380/api/main/authenticate"
    ,{ Email: username, Password: password }
    ,{ responseType: 'text' }
    );
  }
}
