import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SliderCardComponent implements OnInit {
  @Input() movies: any;
  @Input() title: any;

  constructor() {}

  ngOnInit(): void {}

  cards = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  addSlide() {}

  slickInit() {}

  breakpoint() {}

  afterChange() {}

  beforeChange() {}
}
