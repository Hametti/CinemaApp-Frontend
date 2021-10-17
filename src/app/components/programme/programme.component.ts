import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDailyView } from 'src/app/interfaces/idaily-view';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router ) { }

  dailyViews!: IDailyView[];

  pictureClicked(movieId: number)
  {
    this.router.navigate(['/movie/' + movieId]);
  }

  hourClicked(hour: string)
  {
    alert("This feature will be available after implementing backend service");
  }

  ngOnInit(): void {
    this.movieService.getDailyViews().subscribe(
      {
        next: data =>
        {
          this.dailyViews = data;
        }
      });
  }

}
