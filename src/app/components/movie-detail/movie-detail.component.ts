import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/IMovie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private movieService: MovieService) { }

  pageTitle: string = `film o id: `;
  id!: number;
  movie!: IMovie;

  backButtonClicked(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(this.id).subscribe({
      next: data => this.movie = <any>data
    });
    this.pageTitle += `${this.id}`;
  }

}
