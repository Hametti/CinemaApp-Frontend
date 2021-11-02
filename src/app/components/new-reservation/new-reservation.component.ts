import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IScreeningDay } from 'src/app/interfaces/IScreening-day';
import { ISeat } from 'src/app/interfaces/ISeat';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  screeningDays!: IScreeningDay[];
  screeningId!: number;
  seats!: ISeat[];

  currentTab!: string;

  cancelReservation(): void {
    this.router.navigate(['/user-panel']);
  }

  pictureClicked(id: number): void {

  }

  screeningDataArrived(screeningId: number): void {
    this.screeningId = screeningId;
    this.currentTab = 'reservation-seats';
  }

  ngOnInit(): void {
    this.currentTab = "screening-days";
    this.movieService.getScreeningDays().subscribe(
      data => this.screeningDays = data
    );
  }

}
