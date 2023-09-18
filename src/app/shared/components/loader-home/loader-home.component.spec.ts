import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderHomeComponent } from './loader-home.component';

describe('LoaderHomeComponent', () => {
  let component: LoaderHomeComponent;
  let fixture: ComponentFixture<LoaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
