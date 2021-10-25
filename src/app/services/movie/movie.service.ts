import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from 'src/app/interfaces/IReservation';
import { IScreeningDayDTO } from 'src/app/interfaces/screening-day-dto-models/IScreening-day-dto';
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

  getData() {
    return this.http.get("http://localhost:11207/api/name", { responseType: 'text' });
  }

  //implement drawing a movie from backend server
  getRandomMovie(): IMovie {
    return {
      "id": 2,
      "title": "No Time To Die",
      "pictureUrl": "no-time-to-die.jpg",
      "shortDescription": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
      "director": "Cary Joji Fukunaya",
      "cast": "Rami Malek | Ben Whishaw | Ralph Fiennes | Lashana Lynch | Ana de Armas | Billy Magnussen | Daniel Craig | Jeffrey Wright | Lea Seydoux | Naomie Harris | Rory Kinnear | David Dencik | Dali Benssalah",
      "longDescription": "In No Time To Die, Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "releaseYear": "2021",
      "language": "2021",
      "duration": "2h 43m",
      "budget": "$250-301 million"
    }
   }

   getSecondRandomMovie(): IMovie {
    return {
      "id": 3,
      "title": "Green Mile",
      "pictureUrl": "green-mile.jpg",
      "shortDescription": "At a Louisiana assisted-living home in 1999, elderly retiree Paul Edgecomb becomes emotional while viewing the film Top Hat. His companion Elaine becomes concerned, and Paul explains to her that the film reminded him of events that he witnessed in 1935 when he was an officer at Cold Mountain Penitentiary's death row, nicknamed \"The Green Mile\".",
      "director": "Frank Darabont",
      "cast": "Tom Hanks | David Morse | Bonnie Hunt | Michael Clarke Duncan | James Cromwell | Michael Jeter | Graham Greene | Doug Hutchison | Sam Rockwell | Barry Pepper | Jeffrey DeMunn | Patricia Clarkson | Harry Dean Stanton",
      "longDescription": "In 1935, Paul supervises Corrections Officers Brutus Howell, Dean Stanton, Harry Terwilliger, and Percy Wetmore, reporting to chief warden Hal Moores. Paul is introduced to John Coffey, a physically imposing but mild-mannered black man, who has been sentenced to death after being convicted of raping and murdering two little white girls. He joins two other condemned convicts on the block: Eduard \"Del\" Delacroix and Arlen Bitterbuck, the latter of whom is the first to be executed. Percy, the nephew of the state governor's wife, demonstrates a sadistic streak but flaunts his family connections to avoid being held accountable; he is particularly abusive towards Del, breaking his fingers and killing his pet mouse Mr. Jingles.",
      "releaseYear": "1999",
      "language": "English",
      "duration": "3h 9m",
      "budget": "$60 million"
    }
   }

   getReservations(): IReservation[] {
     return [{
        "movieTitle": "No Time To Die",
        "date": "25.10",
        "dateHour": "12:30",
        "seats": [11, 12, 13],
        "row": 5
       },
       {
        "movieTitle": "Inception",
        "date": "27.10",
        "dateHour": "19:00",
        "seats": [22, 23],
        "row": 8
       }];
   }

   getScreeningDays(): Observable<IScreeningDayDTO[]> {
     return this.http.get<IScreeningDayDTO[]>("https://localhost:44380/api/screeningday/all");
   }

   getSliderMovies(): Observable<IMovie[]> {
     return this.http.get<IMovie[]>("https://localhost:44380/api/movie/five");
   }
}
