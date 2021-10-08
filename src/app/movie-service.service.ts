import { OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, Subscription, throwError } from "rxjs";
import { IMovie } from './slider/IMovie';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit {

  constructor(private http: HttpClient) { }

  movies!: IMovie[];
  private moviesUrl = "assets/movies.json";

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }

  // tryIfWorks(): void {

  //   console.log(this.movies[0]);
  // }

  saveData(): void {
    this.getMovies().subscribe({ next: data => this.movies = data });
  }

  ngOnInit(): void {

  }

}
