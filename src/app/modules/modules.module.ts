import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';
import { DetailMoviesComponent } from './detail-movies/detail-movies.component';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ModulesComponent,
    DetailMoviesComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
