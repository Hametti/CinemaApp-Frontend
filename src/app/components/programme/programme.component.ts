import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IScreeningDay } from 'src/app/interfaces/screening-day-models/IScreening-day';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  screeningDays!: IScreeningDay[];

  pictureClicked(id: number)
  {
    this.router.navigate(['/movie/' + id]);
  }

  hourClicked(hour: string)
  {
    alert("This feature will be available after implementing backend service");
  }

  ngOnInit(): void {
    this.movieService.getScreeningDays().subscribe(
      data => this.screeningDays = data
    )
  }
  
}
