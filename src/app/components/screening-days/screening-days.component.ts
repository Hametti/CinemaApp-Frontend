import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IScreeningDay } from 'src/app/interfaces/IScreening-day';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'screening-days',
  templateUrl: './screening-days.component.html',
  styleUrls: ['./screening-days.component.css']
})
export class ScreeningDaysComponent implements OnInit {

  constructor( private movieService: MovieService ) { }

  screeningDays!: IScreeningDay[];

  @Output() reservationData: EventEmitter<number> =
    new EventEmitter<number>()

  pictureClicked(id: number): void {
    
  }

  hourClicked(screeningId: number): void {
    this.reservationData.emit(screeningId);
  }

  ngOnInit(): void {
    this.movieService.getScreeningDays().subscribe(
      data => this.screeningDays = data
    );
  }

}
