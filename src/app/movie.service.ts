import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFullName } from './login/IFullName';
import { IMovie } from './slider/IMovie';
import { map } from 'rxjs/operators';

var authenticationHeader = {
  headers: new HttpHeaders({
    token: 'something'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {


  constructor( private http: HttpClient ) { }

  private moviesUrl = "assets/movies.json";

  getToken(): string {
    return JSON.parse(localStorage.getItem('authorizationToken') || '{}');
  }

  getUsername(token: string): Observable<string> {
    return this.http.get("http://localhost:11207/api/name/" + token, { responseType: 'text' })
  }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }

  // authenticate(): Observable<JSON> {
  //     return this.http.get<JSON>("http://localhost:11207/api/name");
  //  }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post("http://localhost:11207/api/name/authenticate"
    ,{ Username: username, Password: password }
    ,{ responseType: 'text' }
    );
  }

  getData() {
    return this.http.get("http://localhost:11207/api/name", { responseType: 'text' });
  }
}
