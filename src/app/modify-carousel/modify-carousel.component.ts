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
import { Carouselmodel } from '../models/settings';
import { AlertService } from '../_helpers/alert.service';
@Component({
  selector: 'app-modify-carousel',
  templateUrl: './modify-carousel.component.html',
  styleUrls: ['./modify-carousel.component.scss']
})
export class ModifyCarouselComponent implements OnInit {

  public carouselform: FormGroup; 
  public currentuser: User;
  public carousels: Carouselmodel[]=[];
  public carousel: Carouselmodel;
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
        (carousel: Carouselmodel) => {
          
          this.carousel = carousel;
          this.carouselform = this.formBuilder.group({
            
            titre: [carousel.titre],
            commentaire: [carousel.commentaire],
            rang: [carousel.rang],

            description: [carousel.description],
            file: [carousel.ficheUrl],
              //@ts-ignore

            type: [carousel.tarifs[0].type],
              //@ts-ignore

            annee: [carousel.tarifs[0].annee],
              //@ts-ignore

            debut: [carousel.tarifs[0].debut],
              //@ts-ignore

            fin: [carousel.tarifs[0].fin],
              //@ts-ignore

            nature: [carousel.tarifs[0].nature],
              //@ts-ignore

            natureactivite: [carousel.tarifs[0].natureactivite],
              //@ts-ignore

            activite: [carousel.tarifs[0].activite],
              //@ts-ignore

            sousactivite: [carousel.tarifs[0].sousactivite],
              //@ts-ignore

            impot: [carousel.tarifs[0].impot],
              //@ts-ignore

            prix: [carousel.tarifs[0].prix],

          
          });
          this.imagePreview = carousel.ficheUrl;
          this.loading = false;
          
        }
      );
    }
  );

}
setThreeNumberDecimal($event) {
  $event.target.value = $event.target.value ? $event.target.value : 0;
  $event.target.value = parseFloat($event.target.value).toFixed(3);
}
onSubmit() {
  this.loading = true;
  const carousel = new Carouselmodel();
  carousel.tarifs=this.carousel.tarifs
  carousel._id=this.carousel._id
  carousel.titre =this.carouselform.get('titre').value;
  carousel.commentaire =this.carouselform.get('commentaire').value;
  carousel.rang =this.carouselform.get('rang').value;
  carousel.description =this.carouselform.get('description').value;
  //@ts-ignore
  carousel.tarifs[0].type =this.carouselform.get('type').value;
    //@ts-ignore
  carousel.tarifs[0].annee =this.carouselform.get('annee').value;
    //@ts-ignore

  carousel.tarifs[0].debut =this.carouselform.get('debut').value;
  //@ts-ignore

  carousel.tarifs[0].fin =this.carouselform.get('fin').value;
  //@ts-ignore

  carousel.tarifs[0].nature =this.carouselform.get('nature').value;
  //@ts-ignore

  carousel.tarifs[0].natureactivite =this.carouselform.get('natureactivite').value;
  //@ts-ignore

  carousel.tarifs[0].activite =this.carouselform.get('activite').value;
  //@ts-ignore

  carousel.tarifs[0].sousactivite =this.carouselform.get('sousactivite').value;
  //@ts-ignore

  carousel.tarifs[0].impot =this.carouselform.get('impot').value;
  //@ts-ignore

  carousel.tarifs[0].prix =this.carouselform.get('prix').value;
  carousel.ficheUrl = '';
  this.caro.modify(carousel._id, carousel, this.carouselform.get('file').value||'').then(
    (data:any) => {
      console.log(data)
      this.loading = false;
      this.router.navigate(['settings']);

    },
    (error) => {
      this.loading = false;
      
      
    
      
    }
  );
}
onImagePick(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.carouselform.get('file').patchValue(file);
  this.carouselform.get('file').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (this.carouselform.get('file').valid) {
      console.log(this.carouselform.get('file').value)
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
