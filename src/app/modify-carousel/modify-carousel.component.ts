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
  public imagePreview: string;
  fileUploaded = false; 

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
            
            titre: [carousel.titre],
            commentaire: [carousel.commentaire],

            description: [carousel.description],
            file: [carousel.ficheUrl]

          
          });
          this.imagePreview = carousel.ficheUrl;
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const carousel = new Carousel();
  carousel._id=this.carousel._id
  carousel.titre =this.carouselForm.get('titre').value;
  carousel.commentaire =this.carouselForm.get('commentaire').value;
  carousel.description =this.carouselForm.get('description').value;
  carousel.ficheUrl = '';
  this.caro.modify(carousel._id, carousel, this.carouselForm.get('file').value).then(
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
onImagePick(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.carouselForm.get('file').patchValue(file);
  this.carouselForm.get('file').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (this.carouselForm.get('file').valid) {
      console.log(this.carouselForm.get('file').value)
      this.imagePreview = reader.result as string;
      this.fileUploaded = true;
    } else {
      this.imagePreview = null;
    }
  };
  reader.readAsDataURL(file);
}
reloadPage(): void {
  
  window.location.reload();
  
}

}
