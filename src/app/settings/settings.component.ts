import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Carousel } from '../models/settings';
import { CarouselService } from '../services/settings';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentUser: any;
  public loading: boolean;
  public carousels: Carousel[] = [];
  private carouselsSub: Subscription;
  constructor(private token: TokenStorageService,private carousel:CarouselService,private router: Router,) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.carouselsSub = this.carousel.carousels$.subscribe(
      (carousels) => {
        this.carousels = carousels;
        
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        
      }
    );
  }
  getNavigation(link, id){
      
    this.carousel.getCarouseldataById(id);
    this.router.navigate([link + '/' + id]); 
  }
  getcarousels() {
                                
                                                
    this.carousel.getCarouselalldata();
                                                   
                                                     
 }
}
