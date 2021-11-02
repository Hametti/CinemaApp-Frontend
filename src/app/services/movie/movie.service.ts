import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiscount } from 'src/app/interfaces/IDiscount';
import { IReservation } from 'src/app/interfaces/IReservation';
import { IRow } from 'src/app/interfaces/IRow';
import { IScreeningDay } from 'src/app/interfaces/IScreening-day';
import { IScreeningInfo } from 'src/app/interfaces/IScreening-info';
import { IMovie } from '../../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor( private http: HttpClient ) { }

  getMovieById(id: number): Observable<IMovie> {
    return this.http.get<IMovie>("https://localhost:44380/api/movie/" + id);
  }

  getAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>("https://localhost:44380/api/movie/all");
  }

  getWeeklyDiscountMovie(): Observable<IDiscount> {
    return this.http.get<IDiscount>("https://localhost:44380/api/movie/weeklydiscount");
  }

   getScreeningDays(): Observable<IScreeningDay[]> {
     return this.http.get<IScreeningDay[]>("https://localhost:44380/api/screeningday/all");
   }

   getSliderMovies(): Observable<IMovie[]> {
     return this.http.get<IMovie[]>("https://localhost:44380/api/movie/five");
   }

   getSeatsByMovieId(id: number): Observable<IRow[]> {
     return this.http.get<IRow[]>(`https://localhost:44380/api/screening/${id}/seats`);
   }

   getScreeningInfoById(id: number): Observable<IScreeningInfo> {
     return this.http.get<IScreeningInfo>(`https://localhost:44380/api/screening/info/${id}`);
   }

   addReservation(seatIds: number[])
   {
      return this.http.post("https://localhost:44380/api/reservation/add", seatIds, { responseType: 'text' });
   }

   getReservations(): Observable<IReservation[]>
   {
      return this.http.get<IReservation[]>("https://localhost:44380/api/reservation/userReservations");
   }

   deleteReservation(id: number)
   {
    return this.http.delete<string>(`https://localhost:44380/api/reservation/delete/${id}`,
    { headers: new HttpHeaders().set('id', JSON.stringify(id))});
   }
}
