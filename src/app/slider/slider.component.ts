import { Component, OnInit } from '@angular/core';
import { ISlider } from './ISlider';

@Component({
  selector: 'slider-component',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
pictureUrl: string = "slide (1)";
counter: number = 1;


sliders: ISlider[] = [
  {
    pictureUrl: 'slide (1)',
    title: 'Inception'
  },
  {
    pictureUrl: 'slide (2)',
    title: 'Forrest Gump'
  },
  {
    pictureUrl: 'slide (3)',
    title: 'Green Mile'
  },
  {
    pictureUrl: 'slide (4)',
    title: 'Interstellar'
  },
  {
    pictureUrl: 'slide (5)',
    title: 'Suicide Squad'
  }
];
currentSlide: ISlider = this.sliders[0];
cubeIds: number[] = [ 0, 1, 2, 3, 4 ];

  ngOnInit(): void {
    this.startTimer();
  }

  changeSlide(slideNumber: number)
  {
    this.currentSlide = this.sliders[slideNumber];
    this.counter=slideNumber + 1;
    this.startTimer();
  }

  timer: any = setInterval(() => {},5000)

  startTimer() {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      if(this.counter == 5)
      this.counter = 0;

      this.currentSlide = this.sliders[this.counter];
      this.counter++;
    },10000)
  }
}
