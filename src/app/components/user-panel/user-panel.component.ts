import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  currentTab: string = "";

  changeTab(tab: string): void {
    this.currentTab = tab;
  }

  accountSettingsButtonClicked(value: string): void {
    this.currentTab = value;
  }

  ngOnInit(): void {
    this.currentTab = 'account-settings';
  }

}
