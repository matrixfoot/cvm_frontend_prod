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
  standardtraitementsalaireform: FormGroup;
  optionValue:any;
  option2Value:any;
  message: string;
  selectedTab: number = 0;
  retenues: Array<string> = ['location, commission, courtage et vacation', 'traitement et salaires', 'honoraire', 'montant supérieure à 1000 dt', 'Autre'];
  selected = "----"
  showretenuetab=false;
  showtfptab=false;
  showfoprolostab=false;
  showtvatab=false;
  showtimbretab=false;
  showtcltab=false;
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private fb: FormBuilder) {}
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
        title: 'Votre régime fiscale en matière d\'impôts directs est le régime réel. Voulez vous établir votre déclaration à travers le module comptabilité?',
        
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
  
  onTabClick(event) {
   
  }
  update(e){
    this.selected = e.target.value
  }
  findfiltredretenue(retenues: any[]): any[] {
    return retenues.filter(p => p!==this.optionValue);
  }
    myFunction7() {
      var checkbox:any = document.getElementById("myCheck7");
      var checkbox1:any = document.getElementById("myCheck8");
      var checkbox2:any = document.getElementById("myCheck9");
      var checkbox3:any = document.getElementById("myCheck10");
      var checkbox4:any = document.getElementById("myCheck11");
      var checkbox5:any = document.getElementById("myCheck12");
      var checkbox6:any = document.getElementById("myCheck13");
      var text2 = document.getElementById("datelist");
      var text3 = document.getElementById("impotlist");
      var text4 = document.getElementById("tabcontainer");
      if (checkbox.checked == true){
        text2.style.display = "flex";
        text3.style.display = "flex";
      } else {
         text2.style.display = "none";
         text3.style.display = "none";
      }
      if (checkbox1.checked == true || checkbox2.checked==true|| checkbox3.checked==true|| checkbox4.checked==true|| checkbox5.checked==true|| checkbox6.checked==true){
        text4.style.display = "block";
        
      } else {
         text4.style.display = "none";
         
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
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showretenuetab=true;
      } else {
         
         this.showretenuetab=false;
      }
    }
    myFunction9() {
      var checkbox:any = document.getElementById("myCheck9");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showtfptab=true;
        
      } else {
         
         this.showtfptab=false;
      }
    }
    myFunction10() {
      var checkbox:any = document.getElementById("myCheck10");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showfoprolostab=true;
        
      } else {
         
         this.showfoprolostab=false;
      }
    }
    myFunction11() {
      var checkbox:any = document.getElementById("myCheck11");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showtvatab=true;
        
      } else {
         
         this.showtvatab=false;
      }
    }
    myFunction12() {
      var checkbox:any = document.getElementById("myCheck12");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showtimbretab=true;
        
      } else {
         
         this.showtimbretab=false;
      }
    }
    myFunction13() {
      var checkbox:any = document.getElementById("myCheck13");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        this.showtcltab=true;
        
      } else {
         
         this.showtcltab=false;
      }
    }
}


  