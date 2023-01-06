import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Carouselmodel } from '../models/settings';
import { CarouselService } from '../services/settings';
import { Carousel } from "bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("carouselExampleSlidesOnly", {static: false}) carouselElement: ElementRef<HTMLElement>;
  carousels: Carouselmodel[];
  carouselsSub: any;
  sortedcarousels: Carouselmodel[];
  carouselRef: Carousel;

  constructor(
    private carousel:CarouselService,private router: Router
  ) { }

  ngOnInit() {
    this.carouselsSub = this.carousel.carousels$.subscribe(
      (carousels) => {
        this.carousels = carousels; 
        this.sortedcarousels=this.carousels.sort((a, b) => a.rang - b.rang);
      },
      (error) => {
        
      }
    );
    
      this.carousel.getCarouselalldata();
  }
  ngAfterViewInit() {
    this.carouselRef = new Carousel(this.carouselElement.nativeElement, {
      slide: false,
      interval: 4000
    });
  }
  getNavigation(link, id){
      
    this.carousel.getCarouseldataById(id);
    this.router.navigate([link + '/' + id]); 
  }
}
