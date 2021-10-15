import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor( private http: HttpClient ) { }

  //Code-review: Load it from backend server instead of storing it locally.
  private moviesUrl = "assets/movies.json";



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
