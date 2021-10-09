import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './slider/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient ) { }

  private moviesUrl = "assets/movies.json";

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }
}
