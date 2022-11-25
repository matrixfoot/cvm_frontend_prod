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
import { merge, Subject, Subscription } from 'rxjs';
import { ComponentCanDeactivate  } from '../services/component-can-deactivate';
import { stringify } from 'querystring';
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
  totalht=0.000
  totaltva=0.000
  totaldt=0.000
  totalttc=0.000
  totalht2=0.000
  totaltva2=0.000
  totaldt2=0.000
  totalttc2=0.000
  editionnoteform: FormGroup;
  public ammounts: FormArray;
  recettejournaliereform: FormGroup;
  public ammounts2: FormArray;
  private destroyed$ = new Subject<void>();

  constructor(
    private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private DeccomptabiliteService :DeccomptabiliteService,private fb: FormBuilder
  ) {
    super();
    this.editionnoteform = this.fb.group({
      ammounts: this.fb.array([ this.createammount() ])
   });
   
   this.recettejournaliereform = this.fb.group({
    ammounts2: this.fb.array([ this.createammount2() ])
 });
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
  setThreeNumberDecimal($event) {
    $event.target.value = $event.target.value ? $event.target.value : 0;
    $event.target.value = parseFloat($event.target.value).toFixed(3);
  }
  setdate(i: number) {
  let ammounts = this.editionnoteform.get('ammounts') as FormArray;
   const j= this.editionnoteform.get('ammounts').value.at(i).jour
   console.log(j)
   if (j>31)
   return (alert('veuillez entrer un jour valide'),ammounts.at(i).patchValue({
    jour:''
   }))
   const date=j+'/'+this.option2Value+'/'+this.option1Value
   ammounts.at(i).patchValue({
    date:date
   })
 
  }
  setdate2(i: number) {
    let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
     const j= this.recettejournaliereform.get('ammounts2').value.at(i).jour
     console.log(j)
     if (j>31)
     return (alert('veuillez entrer un jour valide'),ammounts2.at(i).patchValue({
      jour:''
     }))
     const date=j+'/'+this.option2Value+'/'+this.option1Value
     ammounts2.at(i).patchValue({
      date:date
     })
   
    }
  settva(i: number) {
    let ammounts = this.editionnoteform.get('ammounts') as FormArray;
     const mht= this.editionnoteform.get('ammounts').value.at(i).montantht
     console.log(mht)
     
     const montanttva=(mht*0.13).toFixed(3)
     ammounts.at(i).patchValue({
      montanttva:montanttva
     })
   
    }
    settva2(i: number) {
      let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
       const mht= this.recettejournaliereform.get('ammounts2').value.at(i).montantht
       console.log(mht)
       
       const montanttva=(mht*0.13).toFixed(3)
       ammounts2.at(i).patchValue({
        montanttva:montanttva
       })
     
      }
    setht(i: number) {
      let ammounts = this.editionnoteform.get('ammounts') as FormArray;
       const mttc= this.editionnoteform.get('ammounts').value.at(i).montantttc
       console.log()
       
       const montantht=+(mttc/1.13).toFixed(3)
       const montanttva=(mttc-montantht).toFixed(3)
       ammounts.at(i).patchValue({
        montantht:montantht,
        montanttva:montanttva
       })
     
      }
      setht2(i: number) {
        let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
         const mttc= this.recettejournaliereform.get('ammounts2').value.at(i).montantttc
         console.log()
         
         const montantht=+(mttc/1.13).toFixed(3)
         const montanttva=(mttc-montantht).toFixed(3)
         ammounts2.at(i).patchValue({
          montantht:montantht,
          montanttva:montanttva
         })
       
        }
    setttc(i: number) {
      let ammounts = this.editionnoteform.get('ammounts') as FormArray;
       const mht= +(this.editionnoteform.get('ammounts').value).at(i).montantht
       const mtva= (this.editionnoteform.get('ammounts').value.at(i).montanttva)
       const mdt= +(this.editionnoteform.get('ammounts').value).at(i).montantdt

       console.log(mht)
       
       const montantttc=(mht+ +mtva+mdt).toFixed(3)

       ammounts.at(i).patchValue({
        montantttc:montantttc
       })
     
      }
      setttc2(i: number) {
        let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
         const mht= +(this.recettejournaliereform.get('ammounts2').value).at(i).montantht
         const mtva= (this.recettejournaliereform.get('ammounts2').value.at(i).montanttva)
         const mdt= +(this.recettejournaliereform.get('ammounts2').value).at(i).montantdt
  
         console.log(mht)
         
         const montantttc=(mht+ +mtva+mdt).toFixed(3)
  
         ammounts2.at(i).patchValue({
          montantttc:montantttc
         })
       
        }
      onChange(i: number){
        const totalht = (this.editionnoteform.get('ammounts').value.at(i).montantht || 0)
        const totaltva = (this.editionnoteform.get('ammounts').value.at(i).montanttva || 0)
        const totaldt = (this.editionnoteform.get('ammounts').value.at(i).montantdt || 0)
        const totalttc = (this.editionnoteform.get('ammounts').value.at(i).montantttc || 0)

        this.totalht = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
          acc += +(curr.montantht || 0);
          return acc;
        },0);
        this.totaltva = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
          acc += +(curr.montanttva || 0);
          return acc;
        },0);
        this.totaldt = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
          acc += +(curr.montantdt || 0);
          return acc;
        },0);
        this.totalttc = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
          acc += +(curr.montantttc || 0);
          return acc;
        },0);
      }
      onChange2(i: number){
        

        this.totalht2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
          acc += +(curr.montantht || 0);
          return acc;
        },0);
        this.totaltva2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
          acc += +(curr.montanttva || 0);
          return acc;
        },0);
        this.totaldt2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
          acc += +(curr.montantdt || 0);
          return acc;
        },0);
        this.totalttc2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
          acc += +(curr.montantttc || 0);
          return acc;
        },0);
      }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  //Ajout de formulaire de création  edition note + recette journaliere
  get ammountControls() {
    return this.editionnoteform.get('ammounts')['controls'];
  }
  get ammountControls2() {
    return this.recettejournaliereform.get('ammounts2')['controls'];
  }
  createammount() 
  : FormGroup {
    if(this.ammounts)
    {
      const i =this.ammounts.length +1
      return this.fb.group({
        jour: '',
        date: '',
        numeronote: [{value:i,disabled:true}],
        montantht:'',
        montanttva:'',
        montantdt:'0.600',
        montantttc:'',
  
      });
    }
    else
    {
      const i =1
      return this.fb.group({
        jour: '',
        date: '',
        numeronote: [{value:i,disabled:true}],
        montantht:'',
        montanttva:'',
        montantdt:'0.600',
        montantttc:'',
  
      });
    }
    
  }
  createammount2() 
  : FormGroup {
    
    return this.fb.group({
      jour: '',
      date: '',
      recette:'',
      montantht:'',
      montanttva:'',
      montantdt:'0.600',
      montantttc:'',

    });
  }
  addammount(i:number){
    this.ammounts = this.editionnoteform.get('ammounts') as FormArray;
    this.ammounts.push(this.createammount());
  }
  addammount2(): void {
    this.ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
    this.ammounts2.push(this.createammount2());
  }
  removeammount(i: number) {
    this.ammounts.removeAt(i);
    this.totalht = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
      acc += +(curr.montantht || 0);
      return acc;
    },0);
    this.totaltva = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
      acc += +(curr.montanttva || 0);
      return acc;
    },0);
    this.totaldt = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
      acc += +(curr.montantdt || 0);
      return acc;
    },0);
    this.totalttc = +(this.editionnoteform.get('ammounts').value).reduce((acc,curr)=>{
      acc += +(curr.montantttc || 0);
      return acc;
    },0);
  }
  removeammount2(i: number) {
    this.ammounts2.removeAt(i);
    this.totalht2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montantht || 0);
      return acc;
    },0);
    this.totaltva2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montanttva || 0);
      return acc;
    },0);
    this.totaldt2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montantdt || 0);
      return acc;
    },0);
    this.totalttc2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montantttc || 0);
      return acc;
    },0);
  }
  logValue() {
    console.log(this.ammounts);

    console.log(this.editionnoteform.get('ammounts').value);
  }
  logValue2() {
    console.log(this.ammounts2);

    console.log(this.recettejournaliereform.get('ammounts2').value);
  }
  ngOnDestroy(){
    this.destroyed$.next();
   this.destroyed$.complete();
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 1000);
    
    
  }
}
