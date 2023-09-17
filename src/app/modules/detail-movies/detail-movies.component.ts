import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/core/services/movies.service';
import { environment } from 'src/environments/environment';
import GENRERS from 'src/app/core/constants/genresMovie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss'],
})
export class DetailMoviesComponent implements OnInit {
  environment = environment;
  movie:any;
  id:any;
  loader = false;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getMovieById(params['id'])
    });
  }

  getMovieById(id:number) {
    this.loader = true;
    this.moviesService.getMovieById(id)
    .pipe(
      finalize(()=> {
        this.loader = false;
      })
    )
    .subscribe((data) => {
      this.movie = data
    });
  }


  getGenreById(id: number) {
    let genre = GENRERS.find((el: any) => el.id === id);
    return genre?.name;
  }

  convertTime(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Agora você pode formatar a saída como desejar, por exemplo, como "1 hora e 40 minutos"
    if (hours === 1 && minutes === 1) {
      return `${hours} hora e ${minutes} minuto`;
    } else if (hours === 1) {
      return `${hours} hora e ${minutes} minutos`;
    } else if (minutes === 1) {
      return `${hours} horas e ${minutes} minuto`;
    } else {
      return `${hours} horas e ${minutes} minutos`;
    }
  }
}
