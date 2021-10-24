import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  user: IUser = { login: "test1", name: "Jan", subscription: true,
   uniqueDiscount: {
    "id": 2,
    "title": "No Time To Die",
    "pictureUrl": "no-time-to-die.jpg",
    "shortDescription": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
    "director": "Cary Joji Fukunaya",
    "cast": "Rami Malek | Ben Whishaw | Ralph Fiennes | Lashana Lynch | Ana de Armas | Billy Magnussen | Daniel Craig | Jeffrey Wright | Lea Seydoux | Naomie Harris | Rory Kinnear | David Dencik | Dali Benssalah",
    "longDescription": "In No Time To Die, Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "releaseYear": "2021",
    "language": "2021",
    "duration": "2h 43m",
    "budget": "$250-301 million"
  }, uniqueDiscountValue: 50 };

  editUserCred(): void {
    alert("This function will be available after implementing backend server")
  }

  ngOnInit(): void {
  }

}
