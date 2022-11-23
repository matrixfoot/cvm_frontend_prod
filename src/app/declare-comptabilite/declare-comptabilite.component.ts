import { Component, OnInit, OnDestroy, HostListener, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { AlertService } from '../_helpers/alert.service';
import { User } from '../models/user.model';
import { Deccomptabilite } from '../models/dec-comptabilite';
import Swal from 'sweetalert2';
import { merge, Subscription } from 'rxjs';
import { ComponentCanDeactivate  } from '../services/component-can-deactivate';
@Component({
  selector: 'app-declare-comptabilite',
  templateUrl: './declare-comptabilite.component.html',
  styleUrls: ['./declare-comptabilite.component.scss']
})
export class DeclareComptabiliteComponent extends ComponentCanDeactivate implements OnInit,OnDestroy {
  isLoggedIn=false
  loading=false;
  showeditionnote=false;
  showrecettejour=false
  errormsg:string;
  natureactivite:string;
  activite:string;
  sousactivite:string;
  regimefiscalimpot:string;
  regimefiscaltva:string;
  matriculefiscale:string;
  currentUser: any;
  user:User;
  choixfacture:string;
  option1Value:string
  option2Value:string
  constructor(
    private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private DeccomptabiliteService :DeccomptabiliteService,private fb: FormBuilder
  ) {
    super();
   }
  
 
  ngOnInit() {
    //verify user loggedin or redirect to login
    this.isLoggedIn = !!this.token.getToken();
  if (this.isLoggedIn) {
    this.currentUser = this.token.getUser();      
  }
  else return (
    this.token.saved=true,
    this.router.navigate(['login']));
//verify user choice about method of declaring invoices
this.usersservice.getUserById(this.currentUser.userId).then(
  (user: User) => {
    this.loading = false;
    this.user = user;
    this.natureactivite=this.user.natureactivite;
    this.activite=this.user.activite;
    this.sousactivite=this.user.sousactivite;
console.log(user.choixfacture)
    this.regimefiscalimpot=this.user.regimefiscalimpot;
    this.matriculefiscale=this.user.matriculefiscale;
if (!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'
|| user.regimefiscalimpot=='Autre/null'
|| !user.regimefiscalimpot || user.matriculefiscale.length<17) return (this.router.navigate(['complete-profil/'+this.currentUser.userId]))
  //vérification du renseignement de la méthode de décalaration du chiffre d'affaire  
if (!user.choixfacture)
{
Swal.fire({
title: 'Veuillez choisir le mode de déclaration du chiffre d\'affaire. Notez que ce choix effectué ne peut être changé que suite à une demande au cabinet MaCompta',

icon: 'info',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Edition des notes d\'honoraire',
cancelButtonText: 'Saisie des recettes journalières',
}).then((result) => {
if (result.value) {
  this.choixfacture='edition note'
  const newuser= new User
  newuser.choixfacture=this.choixfacture
  this.usersservice.completeUserById(user._id,newuser).then(
    () => {
      this.reloadPage();
    }
  )
}
else {
  this.choixfacture='saisie recette'
  const newuser= new User
  newuser.choixfacture=this.choixfacture
  this.usersservice.completeUserById(user._id,newuser).then(
    () => {
      this.reloadPage();
    }
  )
}

}).catch(() => {
Swal.fire('opération non aboutie!');
});
}
if (user.choixfacture=='edition note')
{
  this.showeditionnote=true
}
else{
  this.showrecettejour=true
}
  }
)
  }
  canDeactivate():boolean {  
    
    if(this.token.saved)
    {
      return true;
    }
    return false;
  }
  //verify doublons fichier comptable 
  verify(e)
  {
    this.DeccomptabiliteService.geexistenttdeccomptabilite(this.currentUser.userId,this.option1Value,this.option2Value).then(
      (data:Deccomptabilite[]) => {
        
        if (data.length>0)
        {
          Swal.fire({
            title: 'vous avez déjà un fichier comptable qui existe avec ce mois et cette année, veuillez choisir entre les alternatives suivantes:',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Modifier le fichier existant',
            cancelButtonText: 'Modifier le mois',
          }).then((result) => 
          {
            if (result.value) {
            
              this.router.navigate(['modify-deccomptabilite/'+data[0]._id])

  
            }
            else{
             this.option2Value=''
  
            }
          }).catch(() => {
            Swal.fire('opération non aboutie!')
          })
        }
        else{

          var text3 = document.getElementById("invoiceform");
          text3.style.display = "block";

        }
      }
      
    )
   

  }
  ngOnDestroy(){
    
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 1000);
    
    
  }
}
