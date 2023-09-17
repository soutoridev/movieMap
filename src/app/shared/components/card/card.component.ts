import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;
  environment = environment;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToSomeRoute(id:number) {
    this.router.navigate(['/detail-movies'], { queryParams: { id: id } });
  }
}
