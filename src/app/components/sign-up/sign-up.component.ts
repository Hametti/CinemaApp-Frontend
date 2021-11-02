import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private userService: UserService, private router: Router ) { }

  respondMessage: string = "";

  signUpClick(): void {
    if(this.somethingIsEmpty())
      this.respondMessage = "Don't leave empty fields";
    else if(!this.checkConfirmation())
      this.respondMessage = "Emails or passwords aren't same"
    else
    {
      this.respondMessage = "";
      var email = (<HTMLInputElement>document.getElementById("email-input")).value;
      var password = (<HTMLInputElement>document.getElementById("password-input")).value;
      var name = (<HTMLInputElement>document.getElementById("name-input")).value;
      var securityQuestion = (<HTMLInputElement>document.getElementById("security-question-input")).value;
      var securityQuestionAnswer = (<HTMLInputElement>document.getElementById("security-question-answer-input")).value;

      this.userService.addUser(email, password, name, securityQuestion, securityQuestionAnswer).subscribe(
        data => {
            this.respondMessage = data;
            this.router.navigate(['/account-registered-message'])
        }
      );
    }
  }

  checkConfirmation(): boolean
  {
    var email = (<HTMLInputElement>document.getElementById("email-input")).value;
    var emailConfirmation = (<HTMLInputElement>document.getElementById("confirm-email-input")).value;
    if(email != emailConfirmation)
      return false;

    var password = (<HTMLInputElement>document.getElementById("password-input")).value;
    var passwordConfirmation = (<HTMLInputElement>document.getElementById("confirm-password-input")).value; 
    if(password != passwordConfirmation)
      return false;

    return true;
  }

  somethingIsEmpty(): boolean
  {
    var name = (<HTMLInputElement>document.getElementById("name-input")).value;
    var email = (<HTMLInputElement>document.getElementById("email-input")).value;
    var password = (<HTMLInputElement>document.getElementById("password-input")).value;
    var securityQuestion = (<HTMLInputElement>document.getElementById("security-question-input")).value;
    var securityQuestionAnswer = (<HTMLInputElement>document.getElementById("security-question-answer-input")).value;

    if(name == "" || email == "" || password == "" || securityQuestion == "" || securityQuestionAnswer == "")
      return true;
    else
      return false;
  }

  ngOnInit(): void {
  }

}
