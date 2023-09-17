import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { CardComponent } from './components/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './components/search/search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderCardComponent } from './components/loader-card/loader-card.component';
import { LoaderDetailMovieComponent } from './components/loader-detail-movie/loader-detail-movie.component';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SliderCardComponent,
    CardComponent,
    SearchComponent,
    LoaderCardComponent,
    LoaderDetailMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatSelectModule,
    NgxSkeletonLoaderModule,
    MatPaginatorModule
  ],
  exports:[
    HeaderComponent,
    BannerComponent,
    SliderCardComponent,
    CardComponent,
    SearchComponent,
    LoaderCardComponent,
    LoaderDetailMovieComponent,
    NgxSkeletonLoaderModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
