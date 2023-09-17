import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/movie/popular`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }
  getMovieById(id:number): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/movie/${id}`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }

  getTopRated(): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/movie/top_rated`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/movie/now_playing`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }
  getUpComing(): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/movie/upcoming`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }
  getGenreList(): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/genre/movie/list`, {
      params: {
        language: 'pt-BR?language=pt-BR',
      },
    });
  }
  geMovieByGenre(genre: string): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/discover/movie`, {
      params: {
        language: 'pt-BR?language=pt-BR',
        with_genre: genre,
      },
    });
  }
  searchMoviesByGenre(id:number, page?): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/discover/movie`, {
      params: {
        language: 'pt-BR?language=pt-BR',
        with_genres: id,
        page: page
      },
    });
  }
  geMovieByTitle(title:string): Observable<any> {
    return this.http.get(`${environment.tmdbApiUrl}/search/movie`, {
      params: {
        language: 'pt-BR?language=pt-BR',
        query: title
      },
    });
  }
}
