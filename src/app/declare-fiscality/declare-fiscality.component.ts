import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';

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
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,private alertService: AlertService,private usersservice: UserService,) { }
  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();      
    }
    else (this.alertService.warn('Veuillez compléter votre profil pour pouvoir déposer votre déclaration'),this.router.navigate(['login']));
    this.natureactivite=this.currentUser.natureactivite;
    this.activite=this.currentUser.activite;
    this.sousactivite=this.currentUser.sousactivite;
    
    this.regimefiscalimpot=this.currentUser.regimefiscalimpot;
    this.matriculefiscale=this.currentUser.matriculefiscale;
    if (!this.natureactivite||!this.activite||!this.sousactivite||!this.regimefiscalimpot||!this.matriculefiscale) return (this.router.navigate(['modify-user/:'+this.currentUser.userId]))
  }
    myFunction6() {
      var checkbox:any = document.getElementById("myCheck6");
      var text2 = document.getElementById("Check5");
      var text3 = document.getElementById("Check7");
      if (checkbox.checked == true){
        text3.style.display = "none";
        text2.style.display = "none";
      } else {
         text3.style.display = "block";
         text2.style.display = "block";
      }
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
    myFunction1() {
      var checkbox:any = document.getElementById("myCheck1");
      var text6 = document.getElementById("Check2");
      
      if (checkbox.checked == true){
        
        text6.style.display = "none";
      } else {
         
         text6.style.display = "block";
      }
    }
    myFunction3() {
      var checkbox:any = document.getElementById("myCheck3");
      var text6 = document.getElementById("Check4");
      
      if (checkbox.checked == true){
        
        text6.style.display = "none";
      } else {
         
         text6.style.display = "block";
      }
    }
    myFunction4() {
      var checkbox:any = document.getElementById("myCheck4");
      var text2 = document.getElementById("Check3");
     
      if (checkbox.checked == true){
        
        text2.style.display = "none";
      } else {
         
         text2.style.display = "block";
      }
    }
    myFunction2() {
      var checkbox:any = document.getElementById("myCheck2");
      var text = document.getElementById("check2");
      var text3 = document.getElementById("Check1");
      if (checkbox.checked == true){
        text.style.display = "block";
        text3.style.display = "none";
      } else {
         text.style.display = "none";
         text3.style.display = "block";
      }
    }
}


  