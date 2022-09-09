import { Component, OnInit } from '@angular/core';

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
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,private alertService: AlertService,private usersservice: UserService,) { }
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
    || !user.sousactivite || user.sousactivite=='Autre/null' || user.regimefiscalimpot=='Autre/null'
    || !user.regimefiscalimpot || !user.matriculefiscale) return (this.router.navigate(['complete-profil/'+this.currentUser.userId]))
            
            
          }
        )
        
      
    
   
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
    myFunction8() {
      var checkbox:any = document.getElementById("myCheck8");
      var text2 = document.getElementById("fg1");
      var text3 = document.getElementById("fg2");
      var text4 = document.getElementById("fg3");
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
    myFunction9() {
      var checkbox:any = document.getElementById("myCheck9");
      var text2 = document.getElementById("fg4");
      var text3 = document.getElementById("fg5");
      var text4 = document.getElementById("fg6");
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


  