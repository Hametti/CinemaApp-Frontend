import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from 'src/app/services/update/update.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor( private updateService: UpdateService, private userService: UserService, private router: Router ) { }

  respondMessage: string = "";

  backButtonClicked(): void {
    this.updateService.sendUpdate();
  }

  deleteAccountClicked(): void {
    var password = (<HTMLInputElement>document.getElementById("current-password-input")).value;
    this.userService.deleteAccount(password).subscribe(
      {
        next: data => {
          this.router.navigate(["/main-page"]);
          this.userService.logout();
          this.router.navigate(["/account-deleted-message"]);
        },
        error: err => this.respondMessage = err.error
      }
    )
  }

  ngOnInit(): void {
  }

}
