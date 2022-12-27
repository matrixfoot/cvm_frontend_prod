import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../services/settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private carousel:CarouselService
  ) { }

  ngOnInit() {
    this.carousel.getCarouselalldata()
  }

}
