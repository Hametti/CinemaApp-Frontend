import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/services/update/update.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private updateService: UpdateService, private userService: UserService ) { }

  respondMessage: string = "";

  backButtonClicked(): void {
    this.updateService.sendUpdate();
  }

  applyChangesCliked(): void {
    var password = (<HTMLInputElement>document.getElementById("current-password-input")).value;
    var newPassword = (<HTMLInputElement>document.getElementById("new-password-input")).value;
    var confirmedNewPassword = (<HTMLInputElement>document.getElementById("confirm-new-password-input")).value;

    if(newPassword != confirmedNewPassword)
      this.respondMessage = "Your new passwords aren't same";
    else if(newPassword.length < 8)
      this.respondMessage = "Your password has to be at least 8 characters long";
    else
    {
      this.userService.changePassword(password, newPassword).subscribe(
        {
          next: data => {
            if(!data)
              this.respondMessage = "Your current password is incorrect";
            else
              {
                this.respondMessage = "";
                this.respondMessage = "Your password has been changed";
              }
          },
          error: err => console.log(err.error)
        });
    }
  }



  ngOnInit(): void {
  }

}
