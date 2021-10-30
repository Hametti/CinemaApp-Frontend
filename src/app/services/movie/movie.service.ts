import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiscount } from 'src/app/interfaces/IDiscount';
import { IReservation } from 'src/app/interfaces/IReservation';
import { IScreeningDay } from 'src/app/interfaces/screening-day-models/IScreening-day';
import { IMovie } from '../../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor( private http: HttpClient ) { }


  headers: HttpHeaders = new HttpHeaders().append('content', 'test');

  // headerRequestTest(): Observable<string> {
  //   return this.http.get("http://localhost:11207/api/name/test", { headers: this.headers, responseType: 'text'});
  // }

  // getUsername(token: string): Observable<string> {
  //   return this.http.get("http://localhost:11207/api/name/" + token, { responseType: 'text' })
  // }

  getMovieById(id: number): Observable<IMovie> {
    return this.http.get<IMovie>("https://localhost:44380/api/movie/" + id);
  }

  getAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>("https://localhost:44380/api/movie/all");
  }

  getWeeklyDiscountMovie(): Observable<IDiscount> {
    return this.http.get<IDiscount>("https://localhost:44380/api/movie/weeklydiscountmovie");
  }

  getData() {
    return this.http.get("http://localhost:11207/api/name", { responseType: 'text' });
  }

   getScreeningDays(): Observable<IScreeningDay[]> {
     return this.http.get<IScreeningDay[]>("https://localhost:44380/api/screeningday/all");
   }

   getSliderMovies(): Observable<IMovie[]> {
     return this.http.get<IMovie[]>("https://localhost:44380/api/movie/five");
   }
}
