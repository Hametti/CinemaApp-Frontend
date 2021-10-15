import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css']
})
export class NavigationPanelComponent implements OnInit {
  constructor ( private movieService: MovieService, private updateService: UpdateService) { }

  title = 'CinemaApp';
  imageWidth: Number = 80;

  username!: string;
  sub!: Subscription;

  ngOnInit(): void {
    this.updateUserData();
    this.listenForUpdates();
  }

  updateUserData(): void {
    let JWT = JSON.parse(localStorage.getItem('authorizationToken') || '{}');
    if(JSON.stringify(JWT) == "{}")
      this.username = "";
    else
    {
      let decodedJWT = JSON.parse(window.atob(JWT.split('.')[1]));
      this.username = decodedJWT.unique_name;
    }
  }

  listenForUpdates(): void {
    this.sub = this.updateService.getUpdate().subscribe({
      next: data => {
        this.updateUserData();
      }
    })
  }

  logout(): void {
    localStorage.clear();
    this.updateUserData();
  }
}
