import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { CarouselService } from '../services/settings';
import { Carouselmodel } from '../models/settings';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-carousel',
  templateUrl: './view-carousel.component.html',
  styleUrls: ['./view-carousel.component.scss']
})
export class ViewCarouselComponent implements OnInit {
  public carousel: Carouselmodel;
  public errormsg:string;
  public loading: boolean;
  
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private caro: CarouselService,
    private token: TokenStorageService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
    this.route.params.subscribe(
      (params: Params) => {
        this.caro.getCarouseldataById(params.id).then(
          (carousel: Carouselmodel) => {
            this.loading = false;
            this.carousel = carousel;
            
            
          }
        );
      }
    );
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  onDelete() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.loading = false;
            Swal.fire({
              title: 'Veuillez confirmer la suppression!',
              
              icon: 'info',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer',
              
            }).then((result) => {
              if (result.value) {
                this.caro.deletecarouseldataById(params.id);
                this.router.navigate(['settings']);
              }
  
            }).catch(() => {
              Swal.fire('opération non aboutie!');
            });
      }
    );
  }

}
