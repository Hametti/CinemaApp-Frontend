import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from 'src/app/services/update/update.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private updateService: UpdateService, private userService: UserService, private router: Router ) { }

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
                this.userService.logout();
                this.router.navigate(["/password-changed-message"]);
          },
          error: err => this.respondMessage = "Your current password is incorrect"
        });
    }
  }



  ngOnInit(): void {
  }

}
