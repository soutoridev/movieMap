import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import  GENRERS  from '../../../core/constants/genresMovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() movies: any;
  environment = environment;

  genreList: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
  };

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }

  getGenreById(id: number) {
    let genre = GENRERS.find((el: any) => el.id === id);
    return genre?.name;
  }

  navigateToSomeRoute(id:number) {
    this.router.navigate(['/detail-movies'], { queryParams: { id: id } });
  }
}
