import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { IMovie } from '../slider/IMovie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  pageTitle: string = `film o id: `;
  id!: number;
  movie!: IMovie;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovies().subscribe({
      next: data => this.movie = data[this.id-1]
    });
    this.pageTitle += `${this.id}`;
  }

}
