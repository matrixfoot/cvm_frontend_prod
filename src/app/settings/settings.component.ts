import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Carouselmodel } from '../models/settings';
import { CarouselService } from '../services/settings';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { read, utils } from "xlsx"
import Swal from 'sweetalert2';
import { ApiServiceService } from '../services/event.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentUser: any;
   loading=false;
  public carousels: Carouselmodel[] = [];
  private carouselsSub: Subscription;
  carouselform: FormGroup;
  public imagePreview: string;
  fileUploaded = false;
  file: any;
  uploadEvent: any;
  arrayBuffer: string | ArrayBuffer;
  exceljsondata: Event[];
  exceljsondata2: User[];

  constructor(private token: TokenStorageService,private carousel:CarouselService,    private userservice: UserService,
    private eve:ApiServiceService,private formBuilder: FormBuilder,
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
      rang: [''],
      commentaire: [''],
      description: [''],
      
      image: [null]
      
    });
  }
  
  get f() { return this.carouselform.controls; }
  saveactualite() {
    this.loading = true;
   
    const carousel = new Carouselmodel();
  carousel.titre = this.carouselform.get('titre').value;
    
  carousel.commentaire = this.carouselform.get('commentaire').value;
    
  carousel.description = this.carouselform.get('description').value;
  carousel.rang = this.carouselform.get('rang').value;

    
    carousel.ficheUrl = '';
   if(this.carouselform.get('image').value==null) 
   {
    
      this.carousel.createwithoutfile(carousel).then(
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
      )
    
   
   }
  else
  {
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
    Swal.fire({
      title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au formulaire d\'ajout d\'actualités, voulez vous continuer?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Réinitialiser',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        
        this.carouselform.reset();
        text2.style.display = "none";
      }
      else{
        checkbox.checked = true
        text2.style.display = "block";

      }
    }).catch(() => {
      Swal.fire('opération non aboutie!');
    });
  }
}
myFunction2() {
  var checkbox:any = document.getElementById("myCheck2");
  var text2 = document.getElementById("bodycontainer2");
  if (checkbox.checked == true){
    text2.style.display = "block";
  } else {
    Swal.fire({
      title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au formulaire d\'ajout d\'utilisateurs, voulez vous continuer?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Réinitialiser',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        
        this.carouselform.reset();
        text2.style.display = "none";
      }
      else{
        checkbox.checked = true
        text2.style.display = "block";

      }
    }).catch(() => {
      Swal.fire('opération non aboutie!');
    });
  }
}
onFileChange(event) {
  if (event.target.files.length > 0) {
    this.file = event.target.files[0];
    this.uploadEvent = event;
  }
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.arrayBuffer = fileReader.result;
    //@ts-ignore
    var data = new Uint8Array(this.arrayBuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i)
      arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");
    var workbook = read(bstr, {
      type: "binary"
    });
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    this.exceljsondata2 = utils.sheet_to_json(worksheet, {
      raw: true,
      defval: "",
    });
  };
  fileReader.readAsArrayBuffer(this.file);
}
afficher()
{
  this.loading = true;
  console.log(this.exceljsondata)
  this.userservice.addusers(this.exceljsondata2).then(
    (data:any) => {
      this.loading = false;
console.log(this.exceljsondata2)        
Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'utilisateurs ajoutées avec succès!',
        showConfirmButton: false,
        timer: 6000 
      });
      this.router.navigate(['settings'])
          this.reloadPage();
    },
    (error) => {
      this.loading = false;
      
    }
  );
}
reloadPage(): void {
  
  setTimeout(() => window.location.reload(), 3000);
  
}
}
