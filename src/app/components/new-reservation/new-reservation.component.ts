import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddReservationData } from 'src/app/interfaces/IAddReservationData';
import { IScreening } from 'src/app/interfaces/screening-day-models/IScreening';
import { IScreeningDay } from 'src/app/interfaces/screening-day-models/IScreening-day';
import { ISeat } from 'src/app/interfaces/screening-models/ISeat';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  screeningDays!: IScreeningDay[];

  screeningDayId!: number;
  date!: string;
  screening!: IScreening;
  screeningId!: number;
  seats!: ISeat[];

  currentTab!: string;

  cancelReservation(): void {
    this.router.navigate(['/user-panel']);
  }

  pictureClicked(id: number): void {

  }

  screeningDataArrived(screeningData: IAddReservationData): void {
    this.screeningDayId = screeningData.screeningDayId;
    this.date = screeningData.date;
    this.screening = screeningData.screening;
    this.screeningId = screeningData.screeningId;
    //navigate to seats
    alert("Reservation data added. Now choose seats.");
  }

  ngOnInit(): void {
    this.currentTab = "screening-days";
    this.movieService.getScreeningDays().subscribe(
      data => this.screeningDays = data
    );
  }

}
