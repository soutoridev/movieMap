import { finalize } from 'rxjs/operators';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import GENRERS from 'src/app/core/constants/genresMovie';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  environment = environment;
  loader = false;
  total_results: number;
  total_pages: number;
  page = 1;

  id: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private subscription: Subscription;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private paginatorIntl: MatPaginatorIntl
  ) {
    this.setLabelsPaginator();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchMoviesByGenre(params['id']);
      this.page = 1;
    });
  }

  getGenreById(id: number) {
    let genre = GENRERS.find((el: any) => el.id === id);
    return genre?.name;
  }

  navigateToSomeRoute(id: number) {
    this.router.navigate(['/detail-movies'], { queryParams: { id: id } });
  }

  pageEvent(event) {
    this.searchMoviesByGenre(this.id, event.pageIndex + 1);
    window.scrollTo(0, 0);
  }

  setLabelsPaginator() {
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    this.paginatorIntl.nextPageLabel = 'Próxima página';
    this.paginatorIntl.previousPageLabel = 'Página anterior';
    this.paginatorIntl.firstPageLabel = 'Primeira página';
    this.paginatorIntl.lastPageLabel = 'Última página';
    this.paginatorIntl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
  }

  searchMoviesByGenre(id: number, page?) {
    this.loader = true;

    this.subscription = this.moviesService
      .searchMoviesByGenre(id, page)
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe((data) => {
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;
        this.page = data.page;

        this.movies = data.results;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
