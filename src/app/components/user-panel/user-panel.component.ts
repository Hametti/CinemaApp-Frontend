import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  username!: string;

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

  ngOnInit(): void {
    this.updateUserData();
  }

}
