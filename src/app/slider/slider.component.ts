import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from './IMovie';

@Component({
  selector: 'slider-component',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  counter: number = 0;
  cubeIds: number[] = [ 0, 1, 2, 3, 4 ];
  movies!: IMovie[];


  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: data => this.movies = data
    });
    this.startTimer();
  }

  changeSlide(slideNumber: number) {
    this.counter=slideNumber;
    this.startTimer();
  }

  timer: any = setInterval(() => {},10000)
  startTimer() {

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.counter++;
      if(this.counter == 5)
      this.counter = 0;
    },10000)
  }
}
