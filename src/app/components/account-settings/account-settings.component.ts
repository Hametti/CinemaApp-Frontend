import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUserDTO } from 'src/app/interfaces/IUserDTO';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( private userService: UserService ) { }

  user!: IUserDTO;
  editMode: boolean = false;
  @Output() changePasswordClicked: EventEmitter<string> = new EventEmitter<string>();

  subscribeNewsletter(): void {
    this.userService.subscribeNewsletter().subscribe(
      data => this.ngOnInit()
    );
  }

  unsubscribeNewsletter(): void {
    this.userService.unsubscribeNewsletter().subscribe(
      data => this.ngOnInit()
    );
  }

  changePassword(): void {
    this.changePasswordClicked.emit(`change-password`);
  }

  deleteAccount(): void {
    this.changePasswordClicked.emit(`delete-account`);
  }

  ngOnInit(): void {
    this.userService.getUserByToken().subscribe(
      data => this.user = <any>data
    );
  }
}
