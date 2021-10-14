import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { IFullName } from './IFullName';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient, private movieService: MovieService) { }

  // notLoggedStatus: string = "not logged";
  // loggedStatus: string = "logged";
  myResponse!: string;
  currentUsername!: string;
  incorrectUserCred!: string;

  signInClick(): void {
    var login = (<HTMLInputElement>document.getElementById("login-input")).value;
    var password = (<HTMLInputElement>document.getElementById("password-input")).value;

    this.movieService.authenticate(login, password).subscribe(
      {
        next: data => {
          this.incorrectUserCred = "";
          localStorage.setItem('authorizationToken', JSON.stringify(data));
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

  ngOnInit(): void {
  }

}
