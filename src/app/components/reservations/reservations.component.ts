import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/interfaces/IReservation';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor( private movieService: MovieService ) { }

  reservations!: IReservation[];

  deleteReservation(item: IReservation): void {
    alert("This function will be available after implementing backend server")
  }

  ngOnInit(): void {
    this.reservations = this.movieService.getReservations();
  }

}
