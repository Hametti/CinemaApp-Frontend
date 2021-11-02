import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRow } from 'src/app/interfaces/IRow';
import { IScreeningInfo } from 'src/app/interfaces/IScreening-info';
import { ISeat } from 'src/app/interfaces/ISeat';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'reservation-seats',
  templateUrl: './reservation-seats.component.html',
  styleUrls: ['./reservation-seats.component.css']
})
export class ReservationSeatsComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  @Input() screeningId!: number;
  screeningInfo!: IScreeningInfo;
  seats: ISeat[] = [];
  rows!: IRow[];
  errorMessage!: string;

  seatClicked(seat: ISeat): void {
    //if seat array contains clicked seat
    const index = this.seats.indexOf(seat);
    if (index > -1) {
    this.seats.splice(index, 1);
    }

    //if seat array doesn't contain clicked seat
    else{
      this.seats.push(seat);
    }
  }
  
  confirmReservation(): void {
    let seatIds: number[] = [];
    this.seats.forEach((value, index) => seatIds.push(value.id));
    this.movieService.addReservation(seatIds).subscribe(
      data => {
        this.router.navigate(['/reservation-added-message'])
      },
      error => this.errorMessage = "Sorry, something went wrong. Reload the page and try again."     
    )
  }

  ngOnInit(): void {
    if(this.screeningId)
      {
        this.movieService.getSeatsByMovieId(this.screeningId).subscribe(
          data => {
            this.rows = data;
          });
        
        this.movieService.getScreeningInfoById(this.screeningId).subscribe(
          data => {
            this.screeningInfo = data;
          }
        )
      }
    
  }

}
