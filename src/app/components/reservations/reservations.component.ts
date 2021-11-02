import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReservation } from 'src/app/interfaces/IReservation';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  reservations!: IReservation[];

  newReservationClicked(): void {
    this.router.navigate(['/new-reservation'])
  }

  deleteReservation(id: number): void {
    this.movieService.deleteReservation(id).subscribe(
      data => {
        this.ngOnInit();
      }
    )
  }

  ngOnInit(): void {
    this.movieService.getReservations().subscribe(
      data => this.reservations = data
    );
  }

}
