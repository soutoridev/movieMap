import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies = [];
  topRated = [];
  nowPlaying = [];
  upcoming = [];
  genreList = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getGenreList().subscribe((data)=> {
      this.genreList = data
    })

    this.moviesService.getUsers().subscribe((data)=> {
      this.movies = data.results;
    })

    this.moviesService.getTopRated().subscribe((data)=> {
      this.topRated = data.results;
    })
    this.moviesService.getNowPlaying().subscribe((data)=> {
      this.nowPlaying = data.results;
    })
    this.moviesService.getUpComing().subscribe((data)=> {
      this.upcoming = data.results;
    })

  }

  getGenreById(list:Array<any>) {

  }

}
