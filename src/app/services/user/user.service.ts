import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { UpdateService } from '../update/update.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient, private updateService: UpdateService ) { }

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
    return this.http.post("https://localhost:44380/api/user/subscribeNewsletter", {} ,{ responseType: 'text' });
  }

  unsubscribeNewsletter(): Observable<string> {
    return this.http.post("https://localhost:44380/api/user/unsubscribeNewsletter", {}, { responseType: 'text' });
  }

  logout(): void {
    localStorage.clear();
    this.updateService.sendUpdate();
  }

  deleteAccount(password: string): Observable<string> {
    return this.http.delete<string>("https://localhost:44380/api/user/deleteAccount"
    ,{ headers: new HttpHeaders().set('password', password)});
  }

}
