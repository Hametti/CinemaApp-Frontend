import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  currentTab: string = 'reservations'

  changeTab(tab: string): void {
    this.currentTab = tab;
  }

  ngOnInit(): void {
  }

}
