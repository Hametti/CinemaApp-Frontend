import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor( private updateService: UpdateService ) { }

  currentTab: string = "";

  changeTab(tab: string): void {
    this.currentTab = tab;
  }

  accountSettingsButtonClicked(value: string): void {
    this.currentTab = value;
  }

  ngOnInit(): void {
    this.currentTab = 'reservations';
    this.updateService.getUpdate().subscribe({
      next: data => this.ngOnInit()
    });
  }

}
