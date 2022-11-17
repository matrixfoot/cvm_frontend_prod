import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { CarouselService } from '../services/settings';
import { Carousel } from '../models/settings';
import { AlertService } from '../_helpers/alert.service';
import { image } from 'html2canvas/dist/types/css/types/image';
@Component({
  selector: 'app-modify-carousel',
  templateUrl: './modify-carousel.component.html',
  styleUrls: ['./modify-carousel.component.scss']
})
export class ModifyCarouselComponent implements OnInit {

  public carouselForm: FormGroup; 
  public currentuser: User;
  public carousels: Carousel[]=[];
  public carousel: Carousel;
  
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private caro: CarouselService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService) {}


 ngOnInit() {
  this.loading = true;
    
  
  this.route.params.subscribe(
    (params) => {
      this.caro.getCarouseldataById(params.id).then(
        (carousel: Carousel) => {
          
          this.carousel = carousel;
          
          this.carouselForm = this.formBuilder.group({
            
            titre: [this.carousel.titre],
            commentaire: [this.carousel.commentaire],

            description: [this.carousel.description],
            ficheUrl: [this.carousel.ficheUrl],

          
          });
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const carousel = new Carousel();
  
  carousel.titre =this.carouselForm.get('titre').value;
  carousel.titre =this.carouselForm.get('commentaire').value;
  carousel.titre =this.carouselForm.get('description').value;
  this.caro.modify(this.carousel._id, carousel, '').then(
    (data:any) => {
      this.carouselForm.reset();
      this.loading = false;
      this.alertService.success(data.message);
      window.scrollTo(0, 0);
      this.router.navigate(['settings']);
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
reloadPage(): void {
  
  window.location.reload();
  
}

}
