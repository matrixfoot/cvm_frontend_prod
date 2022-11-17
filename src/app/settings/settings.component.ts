import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Carousel } from '../models/settings';
import { CarouselService } from '../services/settings';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentUser: any;
   loading=false;
  public carousels: Carousel[] = [];
  private carouselsSub: Subscription;
  carouselform: FormGroup;
  public imagePreview: string;
  fileUploaded = false;
  constructor(private token: TokenStorageService,private carousel:CarouselService,private formBuilder: FormBuilder,
    private router: Router,) { }

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
    this.carousel.getCarouselalldata();

    this.carouselform = this.formBuilder.group({
      titre: [''],
      
      commentaire: [''],
      description: [''],
      
      image: ['']
      
    });
  }
  
  get f() { return this.carouselform.controls; }
  saveactualite() {
    this.loading = true;
   
    const carousel = new Carousel();
  carousel.titre = this.carouselform.get('titre').value;
    
  carousel.commentaire = this.carouselform.get('commentaire').value;
    
  carousel.description = this.carouselform.get('description').value;
  
    
    carousel.ficheUrl = '';
    
    this.carousel.create(carousel, this.carouselform.get('image').value).then(
      (data:any) => {
        this.carouselform.reset();
        this.loading = false;
        this.reloadPage()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'actualité ajoutée avec succès!',
          showConfirmButton: false,
          timer: 6000 
        });
      },
      (error) => {
        this.loading = false;
        
      }
    );
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.carouselform.get('image').patchValue(file);
    this.carouselform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.carouselform.get('image').valid) {
        this.imagePreview = reader.result as string;
        this.fileUploaded = true;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
    
  }
  getNavigation(link, id){
      
    this.carousel.getCarouseldataById(id);
    this.router.navigate([link + '/' + id]); 
  }
  getcarousels() {
                                
                                                
    this.carousel.getCarouselalldata();
                                                   
                                                     
 }
 onDelete(id) {
    this.loading = true;
    this.carousel.getCarouseldataById(id);
    
        this.carousel.getCarouseldataById(id).then(
          (data:any) => {
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
                this.carousel.deletecarouseldataById(id);
                this.reloadPage()
              }
  
            }).catch(() => {
              Swal.fire('opération non aboutie!');
            });
    
        
          }
          
        );
      
  }
 myFunction1() {
  var checkbox:any = document.getElementById("myCheck1");
  var text2 = document.getElementById("bodycontainer");
  if (checkbox.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }
}
reloadPage(): void {
  
  setTimeout(() => window.location.reload(), 3000);
  
}
}
