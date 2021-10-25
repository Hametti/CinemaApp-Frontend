import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  addUser(email: string, password: string, name: string, securityQuestion: string, securityQuestionAnswer: string): Observable<string> {
    return this.http.post("https://localhost:44380/api/user/add"
    ,{ Email: email, Password: password, Name: name, SecurityQuestion: securityQuestion, SecurityQuestionAnswer: securityQuestionAnswer }
    ,{ responseType: 'text' }
    );
  }

}
