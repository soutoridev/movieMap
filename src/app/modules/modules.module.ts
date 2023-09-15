import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';
import { DetailMoviesComponent } from './detail-movies/detail-movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    ModulesComponent,
    DetailMoviesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
