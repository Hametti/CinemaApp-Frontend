import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { IFullName } from './IFullName';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../services/update/update.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient, private movieService: MovieService, private router: Router, private updateService: UpdateService) { }

  // notLoggedStatus: string = "not logged";
  // loggedStatus: string = "logged";
  myResponse!: string;
  incorrectUserCred!: string;

  signInClick(): void {
    var login = (<HTMLInputElement>document.getElementById("login-input")).value;
    var password = (<HTMLInputElement>document.getElementById("password-input")).value;

    this.movieService.authenticate(login, password).subscribe(
      {
        next: data => {
          //clear error variable, so it won't generate and add received token to local storage
          this.incorrectUserCred = "";
          localStorage.setItem('authorizationToken', JSON.stringify(data));
          this.emitUpdate();
          this.router.navigate(['/user-panel']);

          //decoding JWT token and adding username to localStorage
          // let JWT = JSON.parse(localStorage.getItem('authorizationToken') || '{}')
          // let decodedJWT = JSON.parse(window.atob(JWT.split('.')[1]));
          // localStorage.setItem('username', JSON.stringify(decodedJWT.unique_name));
        },
        error: err => {
          //this code will execute if any error occur
          this.incorrectUserCred = "Login or password is incorrect";
        }
      });
  }

  forgotPasswordClick() {
    alert("Forgot password method is not implemented");
  }

  // buttonClick(): void {
  //   this.movieService.authenticate(this.typedUsername, "password1").subscribe(
  //     {
  //       next: data => {
  //         //this code will execute if http request response status isn't an error
  //         localStorage.setItem('authorizationToken', JSON.stringify(data));
  //         this.myCurrentToken = JSON.parse(localStorage.getItem('authorizationToken') || '{}')
  //       },
  //       error: err => {
  //         //this code will execute if any error occur
  //         this.myCurrentToken = "Login or password is incorrect"
  //       }
  //     });
  // }

  // logout(): void {
  //   localStorage.setItem('authorizationToken', "");
  //   this.myCurrentToken = "";
  // }

  //decoding JWT
  // this.myCurrentToken = JSON.parse(localStorage.getItem('authorizationToken') || '{}');
  //   console.log('parsing ' + this.myCurrentToken);
  //   let decodedJWT = JSON.parse(window.atob(this.myCurrentToken.split('.')[1]));
  //   console.log('decodedJWT: ' + decodedJWT.unique_name);
  // getUsername(): void {
  //   this.movieService.getUsername(this.myCurrentToken).subscribe(
  //     {
  //       next: data => {
  //         console.log(data);
  //       },
  //       error: err => {
  //         console.log(err);
  //       }
  //     }
  //   );
  // }

  button2Click(): void {
    console.log(this.movieService.getToken());
    this.movieService.getData().subscribe(
      {
        next: data => {
          this.myResponse = data;
        },
        error: err => {
          //this code will execute if any error occur
          this.myResponse = "You're not logged in"
        }
      });
  }

  emitUpdate(): void {
    this.updateService.sendUpdate();
  }

  ngOnInit(): void {
  }

}
