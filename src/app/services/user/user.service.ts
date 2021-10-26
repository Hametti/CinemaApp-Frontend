import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDTO } from 'src/app/interfaces/IUserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  changePassword(currentPassword: string, newPassword: string): Observable<boolean> {
    return this.http.post<boolean>("https://localhost:44380/api/user/changepassword"
    ,{currentPassword: currentPassword, newPassword: newPassword }
    ,{ headers: new HttpHeaders().set('currentPassword', currentPassword).set('newPassword', newPassword)});
  }

  addUser(email: string, password: string, name: string, securityQuestion: string, securityQuestionAnswer: string): Observable<string> {
    return this.http.post("https://localhost:44380/api/user/add"
    ,{ Email: email, Password: password, Name: name, SecurityQuestion: securityQuestion, SecurityQuestionAnswer: securityQuestionAnswer }
    ,{ responseType: 'text'});
  }


  getUserByToken(): Observable<JSON> {
    return this.http.get<JSON>("https://localhost:44380/api/user/getUserByToken");
  }

  getUserDiscount(): Observable<JSON> {
    return this.http.get<JSON>("https://localhost:44380/api/user/getUserDiscount");
  }

  subscribeNewsletter(): Observable<string> {
    return this.http.get("https://localhost:44380/api/user/subscribeNewsletter", { responseType: 'text' });
  }

  unsubscribeNewsletter(): Observable<string> {
    return this.http.get("https://localhost:44380/api/user/unsubscribeNewsletter", { responseType: 'text' });
  }

}
