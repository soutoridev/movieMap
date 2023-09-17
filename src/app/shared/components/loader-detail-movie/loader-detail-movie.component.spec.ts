import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDetailMovieComponent } from './loader-detail-movie.component';

describe('LoaderDetailMovieComponent', () => {
  let component: LoaderDetailMovieComponent;
  let fixture: ComponentFixture<LoaderDetailMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderDetailMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
