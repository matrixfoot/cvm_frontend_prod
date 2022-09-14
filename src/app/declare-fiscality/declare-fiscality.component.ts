import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-declare-fiscality',
  templateUrl: './declare-fiscality.component.html',
  styleUrls: ['./declare-fiscality.component.scss']
})
export class DeclareFiscalityComponent implements OnInit {
  isLoggedIn=false
  loading=false;
  errormsg:string;
  natureactivite:string;
  activite:string;
  sousactivite:string;
  regimefiscalimpot:string;
  regimefiscaltva:string;
  matriculefiscale:string;
  currentUser: any;
  user:User;
  traitementsalaireform: FormGroup;
  standardtraitementsalaireform: FormGroup;
  impotform2: FormGroup;
  public ammounts1: FormArray;
  public ammounts2: FormArray;
  optionValue:any;
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private fb: FormBuilder) {
      this.traitementsalaireform = this.fb.group({
        ammounts1: this.fb.array([ this.createammount() ])
     }),this.impotform2 = this.fb.group({
      ammounts2: this.fb.array([ this.createammount() ])
   })
    }
  ngOnInit() {
    this.standardtraitementsalaireform =this.fb.group({
      brutsalary: '',
      imposalary: '',
      retenuesalary: '',
      solidaritycontribution: '',
      choice:''
      
    });
  this.isLoggedIn = !!this.token.getToken();
    
    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();      
    }
    else (this.router.navigate(['login']));
    
  this.usersservice.getUserById(this.currentUser.userId).then(
          (user: User) => {
            this.loading = false;
            this.user = user;
            this.natureactivite=this.user.natureactivite;
            this.activite=this.user.activite;
            this.sousactivite=this.user.sousactivite;
    
            this.regimefiscalimpot=this.user.regimefiscalimpot;
            this.matriculefiscale=this.user.matriculefiscale;
    if (!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'
    || user.regimefiscalimpot=='Autre/null'
    || !user.regimefiscalimpot || user.matriculefiscale.length<17) return (this.router.navigate(['complete-profil/'+this.currentUser.userId]))
            
    if (user.regimefiscalimpot=='Réel')
    {
      Swal.fire({
        title: 'Votre régime fiscale en matière d\'impôts directs est le régime réel. Voulez vous établir votre déclaration à travers le module comptabilité',
        
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmer',
        cancelButtonText: 'continer avec ce module',
      }).then((result) => {
        if (result.value) {
          
          this.router.navigate(['declare-comptabilite']);
        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
    }
            
          }
        )
        
      
    
   
  }
  get ammountControls1() {
    return this.traitementsalaireform.get('ammounts1')['controls'];
  }
  get ammountControls2() {
    return this.impotform2.get('ammounts2')['controls'];
  }
  createammount(): FormGroup {
    return this.fb.group({
      brutsalary: '',
      imposalary: '',
      retenuesalary: '',
      solidaritycontribution: '',
      
      
    });
  }

  addammount1(): void {
    this.ammounts1 = this.traitementsalaireform.get('ammounts1') as FormArray;
    this.ammounts1.push(this.createammount());
  }
  addammount2(): void {
    this.ammounts2 = this.impotform2.get('ammounts2') as FormArray;
    this.ammounts2.push(this.createammount());
  }
  removeammount1(i: number) {
    this.ammounts1.removeAt(i);
  }
  removeammount2(i: number) {
    this.ammounts2.removeAt(i);
  }
  logValue1() {
    console.log(this.ammounts1.value);
  }
  logValue2() {
    console.log(this.ammounts2.value);
  }
    myFunction7() {
      var checkbox:any = document.getElementById("myCheck7");
      var text2 = document.getElementById("datelist");
      var text3 = document.getElementById("impotlist");
      if (checkbox.checked == true){
        text2.style.display = "flex";
        text3.style.display = "flex";
      } else {
         text2.style.display = "none";
         text3.style.display = "none";
      }
    }
    myFunction5() {
      var checkbox:any = document.getElementById("myCheck5");
      var text2 = document.getElementById("Check7");
      var text3 = document.getElementById("Check6");
      if (checkbox.checked == true){
        text2.style.display = "none";
        text3.style.display = "none";
      } else {
         text2.style.display = "block";
         text3.style.display = "block";
      }
    }
    myFunction8() {
      var checkbox:any = document.getElementById("myCheck8");
      var text2 = document.getElementById("retenuelist");
     
      if (checkbox.checked == true){
        text2.style.display = "flex";
        
      } else {
         text2.style.display = "none";
         
      }
    }
    myFunction9() {
      var checkbox:any = document.getElementById("myCheck9");
      var text2 = document.getElementById("form2");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        
      } else {
         text2.style.display = "none";
         
      }
    }
    myFunction13() {
      var checkbox:any = document.getElementById("myCheck13");
      var text2 = document.getElementById("traitementsalform");
      var text3 = document.getElementById("ammounttable");
      var text4 = document.getElementById("standardtraitementsalaireform");
     
      if (checkbox.checked == true){
        
        text2.style.display = "block";
        text3.style.display = "block";
        text4.style.display = "block";
        
      } else {
         
         text2.style.display = "none";
         text3.style.display = "none";
         text4.style.display = "none";
      }
    }
    
}


  