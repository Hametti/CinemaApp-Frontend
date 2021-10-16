import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IReservation } from 'src/app/interfaces/IReservation';
import { IUser } from 'src/app/interfaces/iuser';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  username!: string;
  currentTab: string = 'discounts'
  user: IUser = { login: "test1", name: "Jan", subscription: true,
   uniqueDiscount: {
    "movieId": 2,
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
  }, uniqueDiscountValue: 50 };

  weeklyDiscount!: IMovie;
  weeklyDiscountValue: Number = 35;

  reservations!: IReservation[];

  changeTab(tab: string): void {
    this.currentTab = tab;
  }

  updateUserData(): void {
    let JWT = JSON.parse(localStorage.getItem('authorizationToken') || '{}');
    if(JSON.stringify(JWT) == "{}")
      this.username = "";
    else
    {
      let decodedJWT = JSON.parse(window.atob(JWT.split('.')[1]));
      this.username = decodedJWT.unique_name;
    }
  }

  movieClicked(id: number): void {
    this.router.navigate(['/movie/' + id]);
  }

  deleteReservation(item: IReservation): void {
    alert("This function will be available after implementing backend server")
  }

  editUserCred(): void {
    alert("This function will be available after implementing backend server")
  }

  bookTicketsClicked(): void {
    alert("This function will be available after implementing backend server")
  }

  ngOnInit(): void {
    this.updateUserData();
    this.weeklyDiscount = this.movieService.getSecondRandomMovie();
    this.reservations = this.movieService.getReservations();
  }

}
