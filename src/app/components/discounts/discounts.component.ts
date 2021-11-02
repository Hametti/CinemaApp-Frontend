import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDiscount } from 'src/app/interfaces/IDiscount';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IUser } from 'src/app/interfaces/IUser';
import { MovieService } from 'src/app/services/movie/movie.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor( private movieService: MovieService, private router: Router, private userService: UserService) { }

  userDiscount!: IDiscount;
  weeklyDiscount!: IDiscount;

  movieClicked(id: number): void {
    this.router.navigate(['/movie/' + id]);
  }

  bookTicketsClicked(): void {
    alert("This function will be available after implementing backend server")
  }

  ngOnInit(): void {
    this.userService.getUserDiscount().subscribe(
      data => this.userDiscount = <any>data
    );

    this.movieService.getWeeklyDiscountMovie().subscribe(
      data => this.weeklyDiscount = <any>data 
    )
  }

}
