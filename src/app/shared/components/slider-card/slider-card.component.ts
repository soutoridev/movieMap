import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss'],
})
export class SliderCardComponent implements OnInit {
  @Input() movies: any;
  @Input() title: any;

  constructor() {}

  ngOnInit(): void {}

  cards = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
  };

  addSlide() {}

  slickInit() {}

  breakpoint() {}

  afterChange() {}

  beforeChange() {}
}
