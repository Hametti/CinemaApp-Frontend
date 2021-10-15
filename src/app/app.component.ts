import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from './services/movie/movie.service';
import { UpdateService } from './services/update/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor () { }

  ngOnInit(): void {
  }
}
