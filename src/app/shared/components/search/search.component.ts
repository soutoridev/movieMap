import GENRERS from 'src/app/core/constants/genresMovie';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  options: any[] = [];
  filteredOptions!: Observable<any[]>;
  loaderSearch = false;
  isInputFocused = false;
  selected = 'option2';
  GENRERS = GENRERS;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        this.clearOptions();
        if (value.trim() === '') {
          return of([]);
        } else {
          return this.getMovies(value);
        }
      })
    );
  }

  clearOptions() {
    this.options = [];
  }

  getMovies(title: string): Observable<any[]> {
    this.loaderSearch = true;
    return this.moviesService.geMovieByTitle(title).pipe(
      switchMap((data) => {
        this.options = data.results;
        return of(data.results);
      }),
      finalize(()=> {
        this.loaderSearch = false;
      })
    );
  }

  onFocus() {
    this.isInputFocused = true;
  }

  onBlur() {
    this.isInputFocused = false;
  }

  navigateToSomeRoute(id: number) {
    this.router.navigate(['/detail-movies'], { queryParams: { id: id } });
  }

  onSelectionChange(id) {
    this.router.navigate(['/movies-list'], { queryParams: { id: id } });
  }
}
