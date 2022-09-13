import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';
import { User } from '../models/user.model';

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
  impotform: FormGroup;
  impotform2: FormGroup;
  public ammounts1: FormArray;
  public ammounts2: FormArray;
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private fb: FormBuilder) {
      this.impotform = this.fb.group({
        ammounts1: this.fb.array([ this.createammount() ])
     }),this.impotform2 = this.fb.group({
      ammounts2: this.fb.array([ this.createammount() ])
   })
    }
  ngOnInit() {
   this.isLoggedIn = !!this.token.getToken();
    
    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();      
    }
    else (this.alertService.warn('Veuillez compléter votre profil pour pouvoir déposer votre déclaration'),this.router.navigate(['login']));
    
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
            
            
          }
        )
        
      
    
   
  }
  get ammountControls1() {
    return this.impotform.get('ammounts1')['controls'];
  }
  get ammountControls2() {
    return this.impotform2.get('ammounts2')['controls'];
  }
  createammount(): FormGroup {
    return this.fb.group({
      title: '',
      ammount: '',
      description: ''
    });
  }

  addammount1(): void {
    this.ammounts1 = this.impotform.get('ammounts1') as FormArray;
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
    myFunction7() {
      var checkbox:any = document.getElementById("myCheck7");
      var text2 = document.getElementById("Check5");
      var text3 = document.getElementById("Check6");
      if (checkbox.checked == true){
        text2.style.display = "none";
        text3.style.display = "none";
      } else {
         text2.style.display = "block";
         text3.style.display = "block";
      }
    }
    logValue1() {
      console.log(this.ammounts1.value);
    }
    logValue2() {
      console.log(this.ammounts2.value);
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
      var text2 = document.getElementById("form1");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        
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
    myFunction10() {
      var checkbox:any = document.getElementById("myCheck10");
      var text2 = document.getElementById("fg7");
      var text3 = document.getElementById("fg8");
      var text4 = document.getElementById("fg9");
      if (checkbox.checked == true){
        text3.style.display = "block";
        text2.style.display = "block";
        text4.style.display = "block";
      } else {
         text3.style.display = "none";
         text2.style.display = "none";
         text4.style.display = "none";
      }
    }
    
}


  