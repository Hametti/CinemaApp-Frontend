import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAddReservationData } from 'src/app/interfaces/IAddReservationData';
import { IScreening } from 'src/app/interfaces/screening-day-models/IScreening';
import { IScreeningDay } from 'src/app/interfaces/screening-day-models/IScreening-day';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'screening-days',
  templateUrl: './screening-days.component.html',
  styleUrls: ['./screening-days.component.css']
})
export class ScreeningDaysComponent implements OnInit {

  constructor( private movieService: MovieService ) { }

  screeningDays!: IScreeningDay[];

  @Output() reservationData: EventEmitter<IAddReservationData> =
    new EventEmitter<IAddReservationData>()

  pictureClicked(id: number): void {
    
  }

  hourClicked(screeningDayById: number, date: string, screening: IScreening, screeningId: number): void {
    var res: IAddReservationData = {
      screeningDayId: screeningDayById,
      date: date,
      screening: screening,
      screeningId: screeningId
    }

    this.reservationData.emit(res);
  }

  ngOnInit(): void {
    this.movieService.getScreeningDays().subscribe(
      data => this.screeningDays = data
    );
  }

}
