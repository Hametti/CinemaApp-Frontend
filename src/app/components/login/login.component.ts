import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UpdateService } from 'src/app/services/update/update.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private updateService: UpdateService,
    private authService: AuthenticationService) { }

  loginFailedMessage!: string;

  signInClick(): void {
    var login = (<HTMLInputElement>document.getElementById("login-input")).value;
    var password = (<HTMLInputElement>document.getElementById("password-input")).value;

    //this method checks if specified login and password is correct, and returns auth token
    this.authService.authenticate(login, password).subscribe(
      {
        next: data => {

          //clear error variable, so it won't generate
          this.loginFailedMessage = "";

          //add authorization token to local storage for active session mechanism
          localStorage.setItem('authorizationToken', JSON.stringify(data));

          //let navigation panel know about login to trigger changes, and render user panel component
          this.updateService.sendUpdate();
          this.router.navigate(['/user-panel']);
        },
        error: err => {
          this.loginFailedMessage = "Login or password is incorrect";
        }
      });
  }

  //Code review: Implement this method
  forgotPasswordClick() {
    alert("Forgot password method is not implemented");
  }

  ngOnInit(): void {
  }

}
