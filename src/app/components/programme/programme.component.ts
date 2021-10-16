import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service'

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor( private http: HttpClient, private movieService: MovieService ) { }

  value: string = "";

  headerRequestTest(): void {
    this.movieService.headerRequestTest().subscribe({
      next: data => {
        this.value = data;
        console.log(this.value);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
