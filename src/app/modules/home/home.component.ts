import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = [];
  topRated = [];
  nowPlaying = [];
  upcoming = [];
  genreList = [];

  loader = false;

  observables: Observable<any>[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getStarts();
  }

  getStarts() {
    this.loader = true;
    this.observables.push(this.getGenreList());
    this.observables.push(this.getUsers());
    this.observables.push(this.getTopRated());
    this.observables.push(this.getNowPlaying());
    this.observables.push(this.getUpComing());

    forkJoin(this.observables)
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe();
  }

  getGenreList(): Observable<any> {
    return this.moviesService.getGenreList().pipe(
      map((data) => {
        this.genreList = data;
      })
    );
  }

  getUsers(): Observable<any> {
    return this.moviesService.getUsers().pipe(
      map((data) => {
        this.movies = data.results;
      })
    );
  }

  getTopRated(): Observable<any> {
    return this.moviesService.getTopRated().pipe(
      map((data) => {
        this.topRated = data.results;
      })
    );
  }

  getNowPlaying(): Observable<any> {
    return this.moviesService.getNowPlaying().pipe(
      map((data) => {
        this.nowPlaying = data.results;
      })
    );
  }

  getUpComing(): Observable<any> {
    return this.moviesService.getUpComing().pipe(
      map((data) => {
        this.upcoming = data.results;
      })
    );
  }
}
