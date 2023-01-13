import { Component, OnInit, OnDestroy, HostListener, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { AlertService } from '../_helpers/alert.service';
import { User } from '../models/user.model';
import { Deccomptabilite } from '../models/dec-comptabilite';
import Swal from 'sweetalert2';
import { merge, Subject, Subscription } from 'rxjs';
import { ComponentCanDeactivate  } from '../services/component-can-deactivate';
import { stringify } from 'querystring';
import { Decfiscmens } from '../models/dec-fisc-mens';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-declare-comptabilite',
  templateUrl: './declare-comptabilite.component.html',
  styleUrls: ['./declare-comptabilite.component.scss']
})
export class DeclareComptabiliteComponent extends ComponentCanDeactivate implements OnInit,OnDestroy {
  fileUploaded = false;
  uploadFilesautre3: File[] = [];
  uploadFilesautre5: File[] = [];
  uploadFilesautre6: File[] = [];
deccomptabilites:Deccomptabilite[]
public deccomptabilite: Deccomptabilite;
private deccomptabilitesSub: Subscription;
  isLoggedIn=false
  loading=false;
  showeditionnote=false;
  showrecettejour=false
  showrelevemanuel=false;
  showrelevejoint=false
  showpaiemanuel=false
  showcatab=false
  showachattab=false
  showbanquetab=false
  showsalairetab=false
  showinvoiceform=false
  showdocjoint3=false
  showdocjoint5=false
  showdocjoint6=false

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
  option1Value:any
  option2Value:any
  option3Value=false
  option4Value=false
  option5Value=false
  option6Value=false
  option7Value:string
  totalht=0.000
  totaltva=0.000
  realtotaltva=0.000
  totaldt=0.000
  totalttc=0.000
  totalht2=0.000
  totaltva2=0.000
  totaldt2=0.000
  totalttc2=0.000
  totalrecette=0.000
  totalht3=0.000
  totaltva3=0.000
  totaldt3=0.000
  totalttc3=0.000
  totaldebit=0.000
  totalcredit=0.000
  totalsoldemois=0.000
  totalsalairebrut=0.000
  totalcnss=0.000
  totalsalaireimposable=0.000
  totalretenueimpot=0.000
  totalavancepret=0.000
  totalsalairenet=0.000
realht1=0.000
realdt1=0.000
realht2=0.000
realdt2=0.000
realht3=0.000
realtva3=0.000
realsalairebrut6=0.000
realsalaireimposable6=0.000
realretenue6=0.000
tfpapayer=0.000
foprolosapayer=0.000
  editionnoteform: FormGroup;
  public ammounts: FormArray;
  recettejournaliereform: FormGroup;
  public ammounts2: FormArray;
  editionnoteform19: FormGroup;
  public ammounts7: FormArray;
  recettejournaliereform19: FormGroup;
  public ammounts8: FormArray;
  factureachatform: FormGroup;
  public ammounts3: FormArray;
  relevemanuelform: FormGroup;
  public ammounts4: FormArray;
  relevejointform: FormGroup;
  public ammounts5: FormArray;
  salaireform: FormGroup;
  public ammounts6: FormArray;
  private destroyed$ = new Subject<void>();
  tauxtva: string;
  tauxdt:any;
  specialite: string;
  totalht219=0.000;
  totaltva219=0.000;
  totaldt219=0.000;
  totalttc219=0.000;
  totalrecette19=0.000;
  realht219=0.000;
  totalht19=0.000;
  totaltva19=0.000;
  totaldt19=0.000;
  totalttc19=0.000;
  realht119=0.000;
  realdt219=0.000;
  realdt119=0.000;

  constructor(
    private token: TokenStorageService,private router: Router,private route: ActivatedRoute,private DecfiscmensService :DecfiscmensService,
    private alertService: AlertService,private usersservice: UserService,private DeccomptabiliteService :DeccomptabiliteService,private fb: FormBuilder
  ) {
    super();
    this.editionnoteform = this.fb.group({
      ammounts: this.fb.array([ this.createammount() ])
   });
   
   this.recettejournaliereform = this.fb.group({
    ammounts2: this.fb.array([ this.createammount2() ])
 });
 this.factureachatform = this.fb.group({
  ammounts3: this.fb.array([ this.createammount3() ])
});
this.relevemanuelform = this.fb.group({
  mois:'',
  annee:'',
  soldemoisprecedentdebit:'',
  soldemoisprecedentcredit:'',
  ammounts4: this.fb.array([ this.createammount4() ])
}); 
this.relevejointform = this.fb.group({
  ammounts5: this.fb.array([ this.createammount5() ])
});
this.salaireform = this.fb.group({
  ammounts6: this.fb.array([ this.createammount6() ])
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
    this.tauxdt=0.600    
    this.DeccomptabiliteService.getdeccomptabilite(this.currentUser.userId).then(
      (deccomptabilite: Deccomptabilite) => {
  this.deccomptabilite=deccomptabilite
      }
    )    
//verify user choice about method of declaring invoices
this.usersservice.getUserById(this.currentUser.userId).then(
  (user: User) => {
    this.loading = false;
    this.user = user;
    this.natureactivite=this.user.natureactivite;
    this.activite=this.user.activite;
    this.sousactivite=this.user.sousactivite;
    this.specialite=this.user.specialite
    this.regimefiscalimpot=this.user.regimefiscalimpot;
    this.matriculefiscale=this.user.matriculefiscale;
if (!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'
|| user.regimefiscalimpot=='Autre/null' 
|| !user.regimefiscalimpot || user.matriculefiscale.length<17) return (this.router.navigate(['complete-profil/'+this.currentUser.userId]))
if(this.activite=='Avocat'||this.activite=='Architectes'||this.activite=='Syndic des copropriétaires'||this.activite=='Ingénieurs-conseil'||this.activite=='Dessinateurs'||this.activite=='Géomètres'||
this.activite=='Topographes'||this.activite=='Notaire'||this.activite=='Huissiers notaire'||this.activite=='Interprètes'||this.activite=='Expert' )
{
  this.tauxtva='0.13'
}
if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
||this.activite=='Sage-femmes')
{
  this.tauxtva='0.07'
}
if(this.activite=='Consultant')
{
  this.tauxtva='0.19'
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
    this.loading=true
    if(this.option1Value=='2023'&&this.activite=='Architectes'||this.option1Value=='2023'&&this.activite=='Syndic des copropriétaires'||this.option1Value=='2023'&&this.activite=='Ingénieurs-conseil'||
    this.option1Value=='2023'&&this.activite=='Dessinateurs'||this.option1Value=='2023'&&this.activite=='Géomètres'||
    this.option1Value=='2023'&&this.activite=='Topographes'||this.option1Value=='2023'&&this.activite=='Notaire'||
    this.option1Value=='2023'&&this.activite=='Huissiers notaire'||this.option1Value=='2023'&&this.activite=='Interprètes'||
    this.option1Value=='2023'&&this.activite=='Expert'||this.option1Value=='2023'&&this.activite=='Avocat')
    {
      this.tauxtva='0.19'
    }
    if(this.option1Value=='2023')
    {
      this.tauxdt=1.000
    }
    /*
    let date=new Date()
    let anneactuel=date.getFullYear()
    let moisactuel=date.getMonth()+1
    console.log(anneactuel,moisactuel)
    if (this.option1Value>anneactuel||this.option2Value>=moisactuel)
    return (
      Swal.fire({
      title: 'vous ne pouvez pas déposer une déclaration au futur',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {this.option1Value='',this.option2Value=''
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    }))*/
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

  this.loading=false
            }
            else{
              this.loading=false
             this.option2Value=''
  
            }
          }).catch(() => {
            this.loading=false
            Swal.fire('opération non aboutie!')
          })
        }
        else{
this.loading=false
          var text3 = document.getElementById("datalist");
          var text4 = document.getElementById("datelist");

          text3.style.display = "block";
          text4.style.display = "none";

          
        }
      }
      
    )
   

  }
  verifyfutur(e)
  {/*
    let date=new Date()
    let anneactuel=date.getFullYear()
    let moisactuel=date.getMonth()+1
    console.log(anneactuel,moisactuel)
    if (this.option1Value>anneactuel||this.option2Value>=moisactuel)
    return (
      Swal.fire({
      title: 'vous ne pouvez pas déposer une déclaration au futur',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {this.option1Value='',this.option2Value='',this.loading=false

    }).catch(() => {
      Swal.fire('opération non aboutie!')
    }))
  */
  }
  onTabClick(event) {
   
  }
  setThreeNumberDecimal($event) {
    $event.target.value = $event.target.value ? $event.target.value : 0;
    $event.target.value = parseFloat($event.target.value).toFixed(3);
  }
  setdate(i: number) {
  let ammounts = this.editionnoteform.get('ammounts') as FormArray;
  
   const j= this.editionnoteform.get('ammounts').value.at(i).jour
   if (ammounts.value.find(element => element.jour > j))
   return (alert('une note existe avec une date supérieure'),ammounts.at(i).patchValue({
    jour:''
   }))
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
     if (j>31)
     return (alert('veuillez entrer un jour valide'),ammounts2.at(i).patchValue({
      jour:''
     }))
     const date=j+'/'+this.option2Value+'/'+this.option1Value
     ammounts2.at(i).patchValue({
      date:date
     })
   
    }
    setdate3(i: number) {
      let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
       const j= this.factureachatform.get('ammounts3').value.at(i).jour
       if (j>31)
       return (alert('veuillez entrer un jour valide'),ammounts3.at(i).patchValue({
        jour:''
       }))
       const date=j+'/'+this.option2Value+'/'+this.option1Value
       ammounts3.at(i).patchValue({
        date:date
       })
     
      }
      setdate4(i: number) {
        let ammounts4 = this.relevemanuelform.get('ammounts4') as FormArray;
         const j= this.relevemanuelform.get('ammounts4').value.at(i).jour
         if (j>31)
         return (alert('veuillez entrer un jour valide'),ammounts4.at(i).patchValue({
          jour:''
         }))
         const date=j+'/'+this.relevemanuelform.get('mois').value+'/'+this.relevemanuelform.get('annee').value
         ammounts4.at(i).patchValue({
          date:date
         })
       
        }
        setdate5(i: number) {
          let ammounts5 = this.relevejointform.get('ammounts5') as FormArray;
           const j= this.relevejointform.get('ammounts5').value.at(i).jour
           if (j>31)
           return (alert('veuillez entrer un jour valide'),ammounts5.at(i).patchValue({
            jour:''
           }))
           const date=j+'/'+this.option2Value+'/'+this.option1Value
           ammounts5.at(i).patchValue({
            date:date
           })
         
          }
          setdate6(i: number) {
            let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
             const j= this.salaireform.get('ammounts6').value.at(i).jour
             if (j>31)
             return (alert('veuillez entrer un jour valide'),ammounts6.at(i).patchValue({
              jour:''
             }))
             const date=j+'/'+this.option2Value+'/'+this.option1Value
             ammounts6.at(i).patchValue({
              date:date
             })
           
            }
  settva(i: number) {
    let ammounts = this.editionnoteform.get('ammounts') as FormArray;
     const mht= this.editionnoteform.get('ammounts').value.at(i).montantht
     console.log(this.tauxtva)
     if (+(this.editionnoteform.getRawValue().ammounts)[i].tauxtva===0.19)
     {
      const montanttva=(mht*+(this.editionnoteform.getRawValue().ammounts)[i].tauxtva).toFixed(3)
      ammounts.at(i).patchValue({
        montanttva:montanttva
       })
     }
     else 
     {
      const montanttva=(mht*+this.tauxtva).toFixed(3)
      ammounts.at(i).patchValue({
        montanttva:montanttva
       })
     }
     ammounts.controls[i].get('tauxtva').disable();
    }
    settva2(i: number) {
      let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
       const mht= this.recettejournaliereform.get('ammounts2').value.at(i).montantht
       console.log(mht)
       if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.19)
       {
        const montanttva=(mht*+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva).toFixed(3)
        ammounts2.at(i).patchValue({
         montanttva:montanttva
        })
       }
       else 
       {
        const montanttva=(mht*+this.tauxtva).toFixed(3)
        ammounts2.at(i).patchValue({
         montanttva:montanttva
        })
       }
       ammounts2.controls[i].get('tauxtva').disable(); 
      }
      settva3(i: number) {
        let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
         const mht= this.factureachatform.get('ammounts3').value.at(i).montantht
         console.log(mht)
         
         const montanttva=(mht*+this.tauxtva).toFixed(3)
         ammounts3.at(i).patchValue({
          montanttva:montanttva
         })
       
        }
    setht(i: number) {
      let ammounts = this.editionnoteform.get('ammounts') as FormArray;
       const mttc= this.editionnoteform.get('ammounts').value.at(i).montantttc
       const mdt= this.editionnoteform.get('ammounts').value.at(i).montantdt

       console.log()
       if(+(this.editionnoteform.getRawValue().ammounts)[i].tauxtva===0.19)
       {
const montantht=+((mttc-mdt)/(1+ 0.19)).toFixed(3)
       const montanttva=(mttc-mdt-montantht).toFixed(3)
       ammounts.at(i).patchValue({
        montantht:montantht,
        montanttva:montanttva
       })
       }
       else 
       {
        const montantht=+((mttc-mdt)/(1+ +this.tauxtva)).toFixed(3)
       const montanttva=(mttc-mdt-montantht).toFixed(3)
       ammounts.at(i).patchValue({
        montantht:montantht,
        montanttva:montanttva
       })
       }
       ammounts.controls[i].get('tauxtva').disable();  
     
      }
      setht2(i: number) {
        let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
        this.recettejournaliereform.get('ammounts2').value.at(i).montantdt=this.tauxdt
         const mrecette= +this.recettejournaliereform.get('ammounts2').value.at(i).recette
         const mtimbre= +this.recettejournaliereform.get('ammounts2').value.at(i).montantdt
         console.log(this.activite)
         console.log(this.tauxtva)
         if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.19)
         {
const montantttc=+(mrecette).toFixed(3) 
         const montantht=+((+montantttc-mtimbre)/(1+ 0.19)).toFixed(3)
         const montanttva=+(montantttc-montantht-mtimbre).toFixed(3)
         console.log(montantttc)
         ammounts2.at(i).patchValue({
          montantht:montantht,
          montanttva:montanttva,
          montantttc:montantttc,
          montantdt:this.tauxdt

         })
         this.totalht219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
          acc += +(curr.montantht || 0);
          return acc;
        },0);
        this.totaltva219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
          acc += +(curr.montanttva || 0);
          return acc;
        },0);
         if(this.recettejournaliereform.get('ammounts2').value.at(i).recette!=''||+this.recettejournaliereform.get('ammounts2').value.at(i).recette!=0)
        {
          this.totaldt219 =+(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
            acc += +(curr.montantdt || 0);
            return acc;
          },0);
        }
        
        this.totalttc219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
          acc += +(curr.montantttc || 0);
          return acc;
        },0);
        this.totalrecette19 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
          acc += +(curr.recette || 0);
          return acc;
        },0);
        this.realht219=this.totalht219
        this.realdt219=this.totaldt219
        console.log(this.realht2,this.realdt2,this.realdt1)
         }
         else 
         {
          const montantttc=+(mrecette).toFixed(3) 
         const montantht=+((+montantttc-mtimbre)/(1+ +this.tauxtva)).toFixed(3)
         const montanttva=+(montantttc-montantht-mtimbre).toFixed(3)
         console.log(montantttc)
         ammounts2.at(i).patchValue({
          montantht:montantht,
          montanttva:montanttva,
          montantttc:montantttc,
          montantdt:this.tauxdt

         })
         this.totalht2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
          acc += +(curr.montantht || 0);
          return acc;
        },0);
        this.totaltva2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
          acc += +(curr.montanttva || 0);
          return acc;
        },0);
         if(this.recettejournaliereform.get('ammounts2').value.at(i).recette!=''||+this.recettejournaliereform.get('ammounts2').value.at(i).recette!=0)
        {
          this.totaldt2 =+(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
            acc += +(curr.montantdt || 0);
            return acc;
          },0);
        }
        
        this.totalttc2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
          acc += +(curr.montantttc || 0);
          return acc;
        },0);
        this.totalrecette = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
          acc += +(curr.recette || 0);
          return acc;
        },0);
        this.realht2=this.totalht2
        this.realdt2=this.totaldt2
        console.log(this.realht2,this.realdt2,this.realdt1)
         }
        ammounts2.controls[i].get('tauxtva').disable();
        }
        setht3(i: number) {
          let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
           const mttc= this.factureachatform.get('ammounts3').value.at(i).montantttc
           const mdt= this.factureachatform.get('ammounts3').value.at(i).montantdt

           console.log()
           
           const montantht=+((mttc-mdt)/(1+ +this.tauxtva)).toFixed(3)
           const montanttva=+(mttc-montantht-mdt).toFixed(3)
           const montantdt=(mttc-montantht-montanttva).toFixed(3)

           ammounts3.at(i).patchValue({
            montantht:montantht,
            montanttva:montanttva,
            montantdt:montantdt,

           })
           this.totalht3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantht || 0);
            return acc;
          },0);
          this.totaltva3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montanttva || 0);
            return acc;
          },0);
          this.totaldt3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantdt || 0);
            return acc;
          },0);
          this.totalttc3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantttc || 0);
            return acc;
          },0);
        
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
       ammounts.controls[i].get('tauxtva').disable();
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
         ammounts2.controls[i].get('tauxtva').disable();

        }
        setttc3(i: number) {
          let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
           const mht= +(this.factureachatform.get('ammounts3').value).at(i).montantht
           const mtva= (this.factureachatform.get('ammounts3').value.at(i).montanttva)
           const mdt= +(this.factureachatform.get('ammounts3').value).at(i).montantdt
    
           console.log(mht)
           
           const montantttc=(mht+ +mtva+mdt).toFixed(3)
    
           ammounts3.at(i).patchValue({
            montantttc:montantttc
           })
           this.totalht3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantht || 0);
            return acc;
          },0);
          this.totaltva3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montanttva || 0);
            return acc;
          },0);
          this.totaldt3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantdt || 0);
            return acc;
          },0);
          this.totalttc3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
            acc += +(curr.montantttc || 0);
            return acc;
          },0);
          }
          setimposable(i: number) {
            let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
             const mbrut= +(this.salaireform.get('ammounts6').value).at(i).salairebrut
             const mcnss= (this.salaireform.get('ammounts6').value.at(i).montantcnss)
      
             
             const montantimposable=(+mbrut- +mcnss).toFixed(3)
      
             ammounts6.at(i).patchValue({
              montantimposable:montantimposable
             })
           
            }
            setnet(i: number) {
              let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
               const mimposable= +(this.salaireform.get('ammounts6').value).at(i).montantimposable
               const mretenue= +(this.salaireform.get('ammounts6').value.at(i).montantretenue)
               const mavance= +(this.salaireform.get('ammounts6').value).at(i).montantavance
               const mabrut= +(this.salaireform.get('ammounts6').value).at(i).salairebrut
               const mcnss= +(this.salaireform.get('ammounts6').value).at(i).montantcnss

               
               const salairenet=(+mabrut- +mcnss- +mretenue- +mavance).toFixed(3)
        
               ammounts6.at(i).patchValue({
                salairenet:salairenet
               })
             
              }
              setbrut(i: number) {
                let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
                const mimposable= +(this.salaireform.get('ammounts6').value).at(i).montantimposable
               const mretenue= +(this.salaireform.get('ammounts6').value.at(i).montantretenue)
               const mavance= +(this.salaireform.get('ammounts6').value).at(i).montantavance
               const mcnss= +(this.salaireform.get('ammounts6').value.at(i).montantcnss)

          
                 
                 const salairebrut=(+mimposable+ +mretenue+ +mavance+ +mcnss).toFixed(3)
          
                 ammounts6.at(i).patchValue({
                  salairebrut:salairebrut
                 })
               
                }
      onChange(i: number){
        const totalht = (this.editionnoteform.get('ammounts').value.at(i).montantht || 0)
        const totaltva = (this.editionnoteform.get('ammounts').value.at(i).montanttva || 0)
        const totaldt = (this.editionnoteform.get('ammounts').value.at(i).montantdt || 0)
        const totalttc = (this.editionnoteform.get('ammounts').value.at(i).montantttc || 0)
        console.log((this.editionnoteform.getRawValue().ammounts)[i].tauxtva)
        if(+(this.editionnoteform.getRawValue().ammounts)[i].tauxtva===0.07||!(this.editionnoteform.getRawValue().ammounts)[i].tauxtva)
{
  this.totalht = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
  this.realht1=this.totalht
  this.realdt1=this.totaldt
}
else if((this.editionnoteform.getRawValue().ammounts)[i].tauxtva=='0.19')
{
  console.log(+(this.DeccomptabiliteService.filterByValue((this.editionnoteform.getRawValue().ammounts),'0.19')))
  this.totalht19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
  this.realht119=this.totalht19
  this.realdt119=this.totaldt19
}

        
      }
      onChange2(i: number){
        
        if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.07||!(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva)
{
  this.totalht2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
}
else if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.19)
{
  this.totalht219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
}
        
      }
      async onChange3(i: number){
        let ammounts3=this.factureachatform.get('ammounts3') as FormArray
        let tva=ammounts3.at(i).value.montanttva
        let dt=ammounts3.at(i).value.montantdt
        let ht=ammounts3.at(i).value.montantht

        if(+ht<+tva+ +dt)
    try {
      console.log(tva)
      console.log(dt)
      console.log(ht)

        const result = await Swal.fire({
          title: 'Montant TVA ne doit pas dépasser le montant HT',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
        this.loading = false;
        ammounts3.controls[i].patchValue({ montantht: '',montanttva:'',montantttc:''});  
      } catch {
        Swal.fire('opération non aboutie!');
      }
       
        this.totalht3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
          acc += +(curr.montantht || 0);
          return acc;
        },0);
        this.totaltva3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
          acc += +(curr.montanttva || 0);
          return acc;
        },0);
        this.totaldt3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
          acc += +(curr.montantdt || 0);
          return acc;
        },0);
        this.totalttc3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
          acc += +(curr.montantttc || 0);
          return acc;
        },0);
        this.realht3=this.totalht3
        this.realtva3=this.totaltva3
      }
      onChange4(i: number){
        
let totaldebitbis:any
let totalcreditbis:any

        totaldebitbis = +(this.relevemanuelform.get('ammounts4').value).reduce((acc,curr)=>{
          acc += +(curr.debit || 0);
          return acc;
        },0);
        this.totaldebit=totaldebitbis+ +(this.relevemanuelform.get('soldemoisprecedentdebit').value)
        totalcreditbis = +(this.relevemanuelform.get('ammounts4').value).reduce((acc,curr)=>{
          acc += +(curr.credit || 0);
          return acc;
        },0);
        this.totalcredit = totalcreditbis+ +(this.relevemanuelform.get('soldemoisprecedentcredit').value)
        this.totalsoldemois = this.totalcredit-this.totaldebit
      }
      async onChange6(i: number){
        let ammounts6=this.salaireform.get('ammounts6') as FormArray
        let cnss=ammounts6.at(i).value.montantcnss
        let salairebrut=ammounts6.at(i).value.salairebrut
        let montantretenue=ammounts6.at(i).value.montantretenue
        let montantavance=ammounts6.at(i).value.montantavance
        let montantimposable=ammounts6.at(i).value.montantimposable

        if(+cnss>+salairebrut)
    try {
        const result = await Swal.fire({
          title: 'Montant CNSS ne doit pas dépasser le montant Salaire Brut',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
        this.loading = false;
        ammounts6.controls[i].patchValue({ montantcnss: '',salairebrut:'',montantimposable:''});  
      } catch {
        Swal.fire('opération non aboutie!');
      }
      if(+montantavance+ +montantretenue>+montantimposable)
      try {
          const result = await Swal.fire({
            title: 'Les Montants introduits ne peuvent pas dépasser la salaire imposable',
            icon: 'error',
            confirmButtonColor: '#3085d6',
          });
          this.loading = false;
          ammounts6.controls[i].patchValue({ montantretenue: '',montantimposable: '',montantavance:''});  
        } catch {
          Swal.fire('opération non aboutie!');
        }
        this.totalsalairebrut = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.salairebrut || 0);
          return acc;
        },0);
        this.totalcnss = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.montantcnss || 0);
          return acc;
        },0);
        this.totalsalaireimposable = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.montantimposable || 0);
          return acc;
        },0);
        this.totalretenueimpot = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.montantretenue || 0);
          return acc;
        },0);
        this.totalavancepret = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.montantavance || 0);
          return acc;
        },0);
        this.totalsalairenet = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
          acc += +(curr.salairenet || 0);
          return acc;
        },0);
        this.realsalairebrut6=this.totalsalairebrut
        this.realsalaireimposable6=this.totalsalaireimposable
        this.realretenue6=this.totalretenueimpot
    const salairesbrutstfp=this.realsalairebrut6
    const tauxtfp=0.02
    const tauxfoprolos=0.01
   const basetfp=+ Math.trunc((+salairesbrutstfp)*1000)/1000;
      const montanttfpmois=+ Math.trunc((+basetfp* +tauxtfp)*1000)/1000;
      this.tfpapayer=+ Math.trunc((+montanttfpmois)*1000)/1000;
      const basefoprolos=+ Math.trunc((+salairesbrutstfp)*1000)/1000;
      const montantfoprolosmois=+ Math.trunc((+basefoprolos* +tauxfoprolos)*1000)/1000;
      this.foprolosapayer=+ Math.trunc((+montantfoprolosmois)*1000)/1000;
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
  get ammountControls3() {
    return this.factureachatform.get('ammounts3')['controls'];
  }
  get ammountControls4() {
    return this.relevemanuelform.get('ammounts4')['controls'];
  }
  get ammountControls5() {
    return this.relevejointform.get('ammounts5')['controls'];
  }
  get ammountControls6() {
    return this.salaireform.get('ammounts6')['controls'];
  }
  createammount() 
  : FormGroup {
    
      return this.fb.group({
        type:'1',
        jour: '',
        date: '',
        numeronote: '',
        montantht:'0',
        tauxtva:'0.07',
        montanttva:'0',
        montantdt:this.tauxdt,
        montantttc:'0',
        reglement:'',

  
      });
    }
  createammount2() 
  : FormGroup {
    
    return  this.fb.group({
      type:'2',
      jour: '',
      date: '',
      recette:'',
      montantht:'0',
      tauxtva:'0.07',
      montanttva:'0',
      montantdt:'0',
      montantttc:'0',

    });
  }
  createammount3() 
  : FormGroup {
    
    return  this.fb.group({
      type:'3',
      jour: '',
      date: '',
      fournisseur:'',
      autrefournisseur:'',
      numerofacture:'',
      natureachat:'',
      autrenatureachat:'',
      montantht:'0',
      montanttva:'0',
      montantdt:'0',
      montantttc:'0',
      reglement:'',
      image:'',
      ficheUrl:'',
      contientfiche:false

    });
  }
  createammount4() 
  : FormGroup {
    
    return  this.fb.group({
      type:'4',
      jour: '',
      date: '',
      debit:'0',
      credit:'0',
    });
  }
  createammount5() 
  : FormGroup {
    
    return  this.fb.group({
      type:'5',
      annee: '',
      mois: '',
      image:'',
      contientfiche:false

    });
  }
  createammount6() 
  : FormGroup {
    
    return  this.fb.group({
      type:'6',
      matricule: '',
      nomprenom: '',
      salairebrut:'0',
      montantcnss:'0',
      montantimposable:'0',
      montantretenue:'0',
      montantavance:'0',
      salairenet:'0',
      reglement:'0',
      image:'0',
      contientfiche:false
    });
  }
   addammount(){
    this.ammounts = this.editionnoteform.get('ammounts') as FormArray;
 
    this.ammounts.push(this.createammount());
    const i=this.ammounts.length
    if(this.ammounts.at(i-2).value.montantht!='0'&&this.ammounts.at(i-2).value.montantht!='')
    {
      this.ammounts.at(i-1).patchValue({
        numeronote:+(this.ammounts.at(i-2).value.numeronote)+1
       })
    }
    else 
    {
      this.ammounts.at(i-1).patchValue({
        numeronote:+(this.ammounts.at(i-2).value.numeronote)
       })
    }
    
    if(+(this.editionnoteform.getRawValue().ammounts)[i].tauxtva===0.07||!(this.editionnoteform.getRawValue().ammounts)[i].tauxtva)
{
  this.totalht = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
 
}
else if((this.editionnoteform.getRawValue().ammounts)[i].tauxtva=='0.19')
{
  console.log(+(this.DeccomptabiliteService.filterByValue((this.editionnoteform.getRawValue().ammounts),'0.19')))
  this.totalht19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantht || 0);
    return acc;
  },0);
  this.totaltva19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montanttva || 0);
    return acc;
  },0);
  this.totaldt19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantdt || 0);
    return acc;
  },0);
  this.totalttc19 = +(this.DeccomptabiliteService.filterByValue(this.editionnoteform.getRawValue().ammounts,'0.19')).reduce((acc,curr)=>{
    acc += +(curr.montantttc || 0);
    return acc;
  },0);
 
}
  }
  addammount2(): void {
    this.ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
    this.ammounts2.push(this.createammount2());
    /*const i=this.ammounts2.length
    if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.07||!(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva)
    {
      this.totalht2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
        acc += +(curr.montantht || 0);
        return acc;
      },0);
      this.totaltva2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
        acc += +(curr.montanttva || 0);
        return acc;
      },0);
      this.totaldt2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
        acc += +(curr.montantdt || 0);
        return acc;
      },0);
      this.totalttc2 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.07')).reduce((acc,curr)=>{
        acc += +(curr.montantttc || 0);
        return acc;
      },0);
    }
    else if(+(this.recettejournaliereform.getRawValue().ammounts2)[i].tauxtva===0.19)
    {
      this.totalht219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
        acc += +(curr.montantht || 0);
        return acc;
      },0);
      this.totaltva219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
        acc += +(curr.montanttva || 0);
        return acc;
      },0);
      this.totaldt219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
        acc += +(curr.montantdt || 0);
        return acc;
      },0);
      this.totalttc219 = +(this.DeccomptabiliteService.filterByValue(this.recettejournaliereform.getRawValue().ammounts2,'0.19')).reduce((acc,curr)=>{
        acc += +(curr.montantttc || 0);
        return acc;
      },0);
    }*/
  }
  addammount3(){
    this.fileUploaded=false
    this.ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
    let i =this.ammounts3.length
    if (this.ammounts3.value.at(0).montantht=='0'||this.ammounts3.value.at(0).montantht=='')
{
  return (
    Swal.fire({
    title: 'veuillez saisir des données valides pour le type achat avant d\'ajouter une autre ligne',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {this.loading=false
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  }))
}
    this.ammounts3.push(this.createammount3());
    this.ammounts3.controls[i-1].get('fournisseur').disable();
    this.ammounts3.controls[i-1].get('numerofacture').disable();
     this.totalht3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantht || 0);
      return acc;
    },0);
    this.totaltva3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montanttva || 0);
      return acc;
    },0);
    this.totaldt3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantdt || 0);
      return acc;
    },0);
    this.totalttc3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantttc || 0);
      return acc;
    },0);
  }
  addammount4(): void {
    this.ammounts4 = this.relevemanuelform.get('ammounts4') as FormArray;
    this.ammounts4.push(this.createammount4());
 
  }
  addammount5(){
    this.ammounts5 = this.relevejointform.get('ammounts5') as FormArray;
    if (this.ammounts5.value.at(0).mois=='0'||this.ammounts5.value.at(0).mois=='')
{
  return (
    Swal.fire({
    title: 'veuillez saisir des données valides pour le type banque avant d\'ajouter une autre ligne',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {this.loading=false
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  }))
}
    this.ammounts5.push(this.createammount5());
   
  }
  addammount6(){
    this.ammounts6 = this.salaireform.get('ammounts6') as FormArray;
    if (this.ammounts6.value.at(0).salairebrut=='0'||this.ammounts6.value.at(0).salairebrut=='')
{
  return (
    Swal.fire({
    title: 'veuillez saisir des données valides pour le type salaire avant d\'ajouter une autre ligne',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {this.loading=false
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  }))
}
    this.ammounts6.push(this.createammount6());
    this.totalsalairebrut = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.salairebrut || 0);
      return acc;
    },0);
    this.totalcnss = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantcnss || 0);
      return acc;
    },0);
    this.totalsalaireimposable = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantimposable || 0);
      return acc;
    },0);
    this.totalretenueimpot = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantretenue || 0);
      return acc;
    },0);
    this.totalavancepret = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantavance || 0);
      return acc;
    },0);
    this.totalsalairenet = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.salairenet || 0);
      return acc;
    },0);
  }
  removeammount(i: number) {
    const j =this.ammounts.length
    this.ammounts.removeAt(j-1);
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
    this.ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
    console.log(this.ammounts2)
    this.ammounts2.removeAt(i);
    this.totalht2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montantht || 0);
      return acc;
    },0);
    this.totaltva2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montanttva || 0);
      return acc;
    },0);
      this.totaldt2 =+(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
        acc += +(curr.montantdt || 0);
        return acc;
      },0);
    
    this.totalttc2 = +(this.recettejournaliereform.get('ammounts2').value).reduce((acc,curr)=>{
      acc += +(curr.montantttc || 0);
      return acc;
    },0);
  }
  removeammount3(i: number) {
    this.ammounts3.removeAt(i);
    this.totalht3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantht || 0);
      return acc;
    },0);
    this.totaltva3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montanttva || 0);
      return acc;
    },0);
    this.totaldt3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantdt || 0);
      return acc;
    },0);
    this.totalttc3 = +(this.factureachatform.get('ammounts3').value).reduce((acc,curr)=>{
      acc += +(curr.montantttc || 0);
      return acc;
    },0);
  }
  removeammount4(i: number) {
    this.ammounts4.removeAt(i);
    let totaldebitbis:any
    let totalcreditbis:any
    
            totaldebitbis = +(this.relevemanuelform.get('ammounts4').value).reduce((acc,curr)=>{
              acc += +(curr.debit || 0);
              return acc;
            },0);
            this.totaldebit=totaldebitbis+ +(this.relevemanuelform.get('soldemoisprecedentdebit').value)
            totalcreditbis = +(this.relevemanuelform.get('ammounts4').value).reduce((acc,curr)=>{
              acc += +(curr.credit || 0);
              return acc;
            },0);
            this.totalcredit = totalcreditbis+ +(this.relevemanuelform.get('soldemoisprecedentcredit').value)
            this.totalsoldemois = this.totalcredit-this.totaldebit
  }
  removeammount5(i: number) {
    this.ammounts5.removeAt(i);
    
  }
  removeammount6(i: number) {
    this.ammounts6.removeAt(i);
    this.totalsalairebrut = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.salairebrut || 0);
      return acc;
    },0);
    this.totalcnss = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantcnss || 0);
      return acc;
    },0);
    this.totalsalaireimposable = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantimposable || 0);
      return acc;
    },0);
    this.totalretenueimpot = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantretenue || 0);
      return acc;
    },0);
    this.totalavancepret = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.montantavance || 0);
      return acc;
    },0);
    this.totalsalairenet = +(this.salaireform.get('ammounts6').value).reduce((acc,curr)=>{
      acc += +(curr.salairenet || 0);
      return acc;
    },0);
  }
  //resetformsfunctions
  restartform()
  {
    this.loading = true;
this.resetcaall()
this.resetachatall()
this.resetbanqueall()
this.resetsalaireall()
  this.loading=false
console.log(this.uploadFilesautre3,this.uploadFilesautre5,this.uploadFilesautre6)
  }
  resetcaall()
  {
    if (this.option3Value)
    {
      let ammounts = this.editionnoteform.get('ammounts') as FormArray;
      let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
      if(ammounts.length>0)
      {  
        ammounts.at(0).patchValue({
          jour:'',
          date:'',
          montantht:'',
          montanttva:'',
          montantdt:'',
          montantttc:'',
          reglement:''
         })
        for (let i = 0; i < ammounts.length; i++)
      {
  this.removeammount(i)
      }
        this.totalht=0.000
        this.totaltva=0.000
        this.totaldt=0.000
        this.totalttc=0.000
      }
      else if (ammounts2)
      {
        ammounts2.reset()
        this.totalht2=0.000
        this.totaltva2=0.000
        this.totaldt2=0.000
        this.totalttc2=0.000
      }
    }
    

  }
  resetachatall()
  {
    if(this.option4Value)
    {
      let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
      ammounts3.reset()
      var text3 = document.getElementById('achat'+`${0}`);
      text3.style.display="none"
      for (let i = 1; i < ammounts3.length; i++)
      {
  var text2 = document.getElementById('achat'+`${i}`);
  this.removeammount3(i)
  text2.style.display="none"
      }
      this.uploadFilesautre3=[]
      this.totalht3=0.000
        this.totaltva3=0.000
        this.totaldt3=0.000
        this.totalttc3=0.000
    }
    

  }
  resetbanqueall()
  {
    if(this.option5Value)
    {
      let ammounts5 = this.relevejointform.get('ammounts5') as FormArray;
      let ammounts4 = this.relevemanuelform.get('ammounts4') as FormArray;
      var text3 = document.getElementById('releve'+`${0}`);
      text3.style.display="none"    

      ammounts4.reset()
      ammounts5.reset()
      for (let i = 1; i < ammounts5.length; i++)
      {
        var text2 = document.getElementById('releve'+`${i}`);
        this.removeammount5(i)
        text2.style.display="none"    
      }
      this.uploadFilesautre5=[]
  this.totaldebit=0.000
  this.totalcredit=0.000
  this.totalsoldemois=0.000
    }
    

  }
  resetsalaireall()
  {
    if(this.option6Value)
    {
      let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
      var text4 = document.getElementById('salaire'+`${0}`);
      text4.style.display="none"
      ammounts6.reset()
      this.totalsalairebrut=0.000
      this.totalcnss=0.000
      this.totalsalaireimposable=0.000
      this.totalretenueimpot=0.000
      this.totalavancepret=0.000
      this.totalsalairenet=0.000
      for (let i = 1; i < ammounts6.length; i++)
      {
        var text2 = document.getElementById('salaire'+`${i}`);
        this.removeammount6(i)
        text2.style.display="none"
          }
      this.uploadFilesautre6=[]
    }
    

  }
 
  logValue() {
    for (let i = 0; i < this.editionnoteform.get('ammounts').value.length; i++)
      {
        if (this.editionnoteform.get('ammounts').value.at(i).montantht==='0')
{
  this.removeammount(i)
}
      }
      console.log(this.editionnoteform.get('ammounts').value)
 
  }
  logValue2() {
    console.log(this.ammounts2);

    console.log(this.recettejournaliereform.get('ammounts2').value);
  }
  logValue3() {
    console.log(this.ammounts2);

    console.log(this.factureachatform.get('ammounts3').value);
  }
  logValue4() {
    for (let i = 0; i < this.ammounts4.length; i+=1)
      {
        if (this.ammounts4.value.at(i).debit==='0' && this.ammounts4.value.at(i).debit==='')
{
  this.removeammount4(i)
}
      }
      console.log(this.ammounts4.value)
  }
  logValue5() {
    console.log(this.ammounts5);

    console.log(this.relevejointform.get('ammounts5').value);
  }
  logValue6() {
    console.log(this.ammounts6);

    console.log(this.salaireform.get('ammounts6').value);
  }
  //choice when finishing
  onchoice()
  {
    Swal.fire({
      title: 'Veuillez choisir entre les alternatives suivantes!',
      
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#555',
      confirmButtonText: 'déposer uniquement un fichier comptable',
      cancelButtonText: 'Annuler',
      denyButtonText: 'déposer un fichier comptable et générer la déclaration fiscale',
      
      }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmit()
      
      }
      else if (result.isDenied)
      {
        this.onSubmit()
        this.onSubmitfiscality()
      }
      
      }).catch(() => {
      Swal.fire('opération non aboutie!');
      });
  }
  //save method to only accounting file
  onSubmit() {
    this.loading = true;
    const deccomptabilite:Deccomptabilite = new Deccomptabilite();
    deccomptabilite.userId = this.currentUser.userId;
    deccomptabilite.codedeclaration='';
    deccomptabilite.nature='déclaration comptable';
    deccomptabilite.annee=this.option1Value
    deccomptabilite.mois=this.option2Value
    deccomptabilite.debitmoisprecedent=this.relevemanuelform.get('soldemoisprecedentdebit').value
    deccomptabilite.creditmoisprecedent=this.relevemanuelform.get('soldemoisprecedentcredit').value
    deccomptabilite.moisreleve=this.relevemanuelform.get('mois').value
    deccomptabilite.anneereleve=this.relevemanuelform.get('annee').value
    deccomptabilite.totalht=this.totalht
    deccomptabilite.totaltva=this.totaltva
    deccomptabilite.totaldt=this.totaldt
    deccomptabilite.totalttc=this.totalttc
    deccomptabilite.totalht19=this.totalht19
    deccomptabilite.totaltva19=this.totaltva19
    deccomptabilite.totaldt19=this.totaldt19
    deccomptabilite.totalttc19=this.totalttc19
    deccomptabilite.totalht2=this.totalht2
    deccomptabilite.totaltva2=this.totaltva2
    deccomptabilite.totaldt2=this.totaldt2
    deccomptabilite.totalttc2=this.totalttc2
    deccomptabilite.totalrecette=this.totalrecette
    deccomptabilite.totalht219=this.totalht219
    deccomptabilite.totaltva219=this.totaltva219
    deccomptabilite.totaldt219=this.totaldt219
    deccomptabilite.totalttc219=this.totalttc219
    deccomptabilite.totalrecette19=this.totalrecette19
    deccomptabilite.totalht3=this.totalht3
    deccomptabilite.totaltva3=this.totaltva3
    deccomptabilite.totaldt3=this.totaldt3
    deccomptabilite.totalttc3=this.totalttc3
    deccomptabilite.totaldebit=this.totaldebit
    deccomptabilite.totalcredit=this.totalcredit
    deccomptabilite.totalsoldemois=this.totalsoldemois
    deccomptabilite.totalsalairebrut=this.totalsalairebrut
    deccomptabilite.totalcnss=this.totalcnss
    deccomptabilite.totalsalaireimposable=this.totalsalaireimposable
    deccomptabilite.totalretenueimpot=this.totalretenueimpot
    deccomptabilite.totalavancepret=this.totalavancepret
    deccomptabilite.totalsalairenet=this.totalsalairenet
    deccomptabilite.activite=this.activite
    deccomptabilite.sousactivite=this.sousactivite
    deccomptabilite.autre1=[]
    deccomptabilite.autre2=[]
    deccomptabilite.autre3=[]
    deccomptabilite.autre4=[]
    deccomptabilite.autre5=[]
    deccomptabilite.autre6=[]

    if(this.option1Value==''||this.option2Value=='')
    {
      return (
        Swal.fire({
        title: 'veuillez indiquer le mois et l\'année de la déclaration',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
    }

    if (this.option4Value) 
    {
      let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
      for (let i = 0; i < ammounts3.length; i++)
      {
        
ammounts3.controls[i].get('fournisseur').enable();
ammounts3.controls[i].get('numerofacture').enable();    
const item = ammounts3.value.at(i);
if (item.fournisseur==='Autre')
{
  deccomptabilite.autre3.push({
    type: '3',
    jour: item.jour,
    date: item.date,
    fournisseur: item.autrefournisseur,
    autrefournisseur: item.autrefournisseur,
    numerofacture:item.numerofacture,
    natureachat:item.natureachat,
    autrenatureachat:item.autrenatureachat,
  montantht:item.montantht,
  montanttva:item.montanttva,
  montantdt:item.montantdt,
  montantttc:item.montantttc,
  reglement:item.reglement,
  ficheUrl:'',
  contientfiche:item.contientfiche

})
}
if (item.natureachat==='Autre')
{
  deccomptabilite.autre3.push({
    type: '3',
    jour: item.jour,
    date: item.date,
    fournisseur: item.fournisseur,
    autrefournisseur: item.autrefournisseur,
    numerofacture:item.numerofacture,
    natureachat:item.autrenatureachat,
    autrenatureachat:item.autrenatureachat,
  montantht:item.montantht,
  montanttva:item.montanttva,
  montantdt:item.montantdt,
  montantttc:item.montantttc,
  reglement:item.reglement,
  ficheUrl:'',
  contientfiche:item.contientfiche

})
}
if (item.natureachat==='Autre'&&item.fournisseur==='Autre')
{
  deccomptabilite.autre3.push({
    type: '3',
    jour: item.jour,
    date: item.date,
    fournisseur: item.autrefournisseur,
    autrefournisseur: item.autrefournisseur,
    numerofacture:item.numerofacture,
    natureachat:item.autrenatureachat,
    autrenatureachat:item.autrenatureachat,
  montantht:item.montantht,
  montanttva:item.montanttva,
  montantdt:item.montantdt,
  montantttc:item.montantttc,
  reglement:item.reglement,
  ficheUrl:'',
  contientfiche:item.contientfiche

})
}
else{
  deccomptabilite.autre3.push({
    type: '3',
    jour: item.jour,
    date: item.date,
    fournisseur: item.fournisseur,
    autrefournisseur: item.autrefournisseur,
    numerofacture:item.numerofacture,
    natureachat:item.natureachat,
    autrenatureachat:item.autrenatureachat,
  montantht:item.montantht,
  montanttva:item.montanttva,
  montantdt:item.montantdt,
  montantttc:item.montantttc,
  reglement:item.reglement,
  ficheUrl:'',
  contientfiche:item.contientfiche

})
}



console.log(deccomptabilite.autre3)


         
      }
       
    }
      if(this.option3Value)
      {
        let ammounts = this.editionnoteform.get('ammounts') as FormArray;
        for (let i = 0; i < ammounts.length; i++)
       
        {
          const item = ammounts.value.at(i);
  deccomptabilite.autre1.push({
    type:'1',
    jour: item.jour,
    date: item.date,
    numeronote:item.numeronote,
    montantht:item.montantht,
    montanttva:item.montanttva,
    montantdt:item.montantdt,
    montantttc:item.montantttc,
    reglement:item.reglement,
  })
  console.log(deccomptabilite.autre1)
 
        } 
        let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
        for (let i = 0; i < ammounts2.length; i+=1)
        {
          const item = ammounts2.value.at(i);
  deccomptabilite.autre2.push({
    type:'2',
    jour: item.jour,
    date: item.date,
    recette:item.recette,
    montantht:item.montantht,
    montanttva:item.montanttva,
    montantdt:item.montantdt,
    montantttc:item.montantttc,
  
  })
  console.log(deccomptabilite.autre2)
  
        } 
      }
    if (this.option5Value) 
    {
      let ammounts4 = this.relevemanuelform.get('ammounts4') as FormArray;
      for (let i = 0; i < ammounts4.length; i++)
      {
        const item = ammounts4.value.at(i);
deccomptabilite.autre4.push({
        type: '4',
        jour: item.jour,
      date: item.date,
      debit:item.debit,
      credit:item.credit,

}) 
console.log(deccomptabilite.autre4)
      }
      let ammounts5 = this.relevejointform.get('ammounts5') as FormArray;
      for (let i = 0; i < ammounts5.length; i++)
      {
        const item = ammounts5.value.at(i);
deccomptabilite.autre5.push({
        type: '5',
        annee: item.annee,
        mois: item.mois,
      ficheUrl:'',
      contientfiche:item.contientfiche

})
console.log(deccomptabilite.autre5)
      } 
    }
    if (this.option6Value) 
    {
      let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
      for (let i = 0; i < ammounts6.length; i++)
      {
        const item = ammounts6.value.at(i);
deccomptabilite.autre6.push({
        type: '6',
        matricule: item.matricule,
      nomprenom: item.nomprenom,
      salairebrut:item.salairebrut,
      montantcnss:item.montantcnss,
      montantimposable:item.montantimposable,
      montantretenue:item.montantretenue,
      montantavance:item.montantavance,
      salairenet:item.salairenet,
      reglement:item.reglement,
      ficheUrl:'',
      contientfiche:item.contientfiche
})
console.log(deccomptabilite.autre6)

      } 
    }
    deccomptabilite.autre1=deccomptabilite.autre1.filter(item => (item.montantht!='0'&&item.montantht!=''&&item.montantht!=null));
    deccomptabilite.autre2=deccomptabilite.autre2.filter(item => (item.recette!='0'&&item.recette!=''&&item.recette!=null));
    deccomptabilite.autre3=deccomptabilite.autre3.filter(item => (item.montantht!='0'&&item.montantht!=''&&item.montantht!=null));
    deccomptabilite.autre4=deccomptabilite.autre4.filter(item => (item.jour!='0'&&item.jour!=''&&item.jour!=null));
    deccomptabilite.autre5=deccomptabilite.autre5.filter(item => (item.mois!='0'&&item.mois!=''&&item.mois!=null));
    deccomptabilite.autre6=deccomptabilite.autre6.filter(item => (item.salairebrut!='0'&&item.salairebrut!=''&&item.salairebrut!=null));

        this.DeccomptabiliteService.create(deccomptabilite,this.uploadFilesautre3,this.uploadFilesautre5,this.uploadFilesautre6).then(
          (data:any) => {
            this.token.saved=true;
            this.loading = false;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'déclaration sauvegardée avec succès! un email vous a été envoyer pour confirmer la réception de votre déclaration. vous pouvez désormais modifier/compléter votre déclaration à travers votre tableau de bord',
              showConfirmButton: false,
              timer: 6000 
            });
            //this.router.navigate(['modify-deccomptabilite/'+data.data._id])
          },
          (error) => {
            this.loading = false;
            
          }
        )  

  
  }
  //save comptabilite and declare fiscality
  onSubmitfiscality() {
    this.loading = true;
    const decfiscmens:Decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: '', traitementetsalaire: { salairebrut:'', salaireimposable: '', retenuealasource: '',contributionsociale: '', }, 
    location1: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },location2: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },
    location3: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },location4: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },
     honoraire1: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, honoraire2: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},
     honoraire3: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},montant10001: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},
     montant10002: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},montant10003: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, 
    montant10004: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, autre: []}
    decfiscmens.impottype2={ type: '',reporttvamoisprecedent:'',tvacollecter:{
      type:'',
      chiffreaffaireht:'',
      tvaammount:'',
      ammountttc:'',
      
      },tvacollecter19:{
        type:'',
        chiffreaffaireht:'',
        tvaammount:'',
        ammountttc:'',
        
        },tvarecuperableimmobilier:{
          type:'',
      achatlocauxht:'',
      achatlocauxtva:'',
      
      
      },
      tvarecuperableequipement:{
          type:'',
      achatlocauxht:'',
      achatlocauxtva:'',
      achatimporteht:'',
      achatimportetva:'',
      
      
      },
      tvarecuperableautreachat:{
          type:'',
      achatlocauxht:'',
      achatlocauxtva:'',
      achatimporteht:'',
      achatimportetva:'',
      
      
      },
      locationhabitationmeuble:{
          type:'',
          htammount:'',
          tvaammount:'',
          ttcammount:'',
          },
      locationusagecommercial:{
          type:'',
              htammount:'',
              tvaammount:'',
              ttcammount:'',
              },
      operationlotissement:{
          type:'',
                  htammount:'',
                  tvaammount:'',
                  ttcammount:'',
                  },
      interetpercue:{
          type:'',
                      htammount:'',
                      tvaammount:'',
                      ttcammount:'',
                      },
      autretvaspecial:{
          type:'',
                          htammount:'',
                          tvaammount:'',
                          ttcammount:'',
                          taux:'',
                          }    }
                          decfiscmens.impottype3={ type:'',
                            basetfp:'',
                            tfpsalairebrut:'',
                            montanttfpmois:'',
                            reporttfpmoisprecedent:'',
                            montantavance:'',
                            tfppayer:'',
                            tfpreporter:'',
                            salairesnonsoumistfp:''}
                            decfiscmens.impottype4={ type:'',
                            foprolossalairebrut:'',
                            basefoprolos:'',
                            montantfoprolos:'',
                            salairesnonsoumisfoprolos:''}
                            decfiscmens.impottype5={ type:'',
                            nombrenotehonoraire:'',
                totaldroittimbre:'',}
                decfiscmens.impottype6={ type:'',
                chiffreaffairettc:'',
                tclpayer:'',}
                decfiscmens.impottype7={ type:'',
                chiffreaffaireht:'',
                montantcontribution:'',}
    decfiscmens.userId = this.currentUser.userId;
    decfiscmens.activite=this.activite;
    decfiscmens.sousactivite=this.sousactivite;
    decfiscmens.codepostal=this.user.codepostal;
    decfiscmens.adresse=this.user.adresseactivite
    decfiscmens.firstname=this.user.firstname
    decfiscmens.lastname=this.user.lastname
    decfiscmens.raisonsociale=this.user.raisonsociale
    decfiscmens.codegenre=this.user.codegenre
    decfiscmens.codetva=this.user.codetva
    decfiscmens.matriculefiscale=this.user.matriculefiscale
    decfiscmens.registrecommerce=this.user.registrecommerce
    decfiscmens.datearretactivite=this.user.datearretactivite
    decfiscmens.annee=this.option1Value
    decfiscmens.mois=this.option2Value
    decfiscmens.nature='Déclaration Mensuelle'
    if(this.option1Value==''||this.option2Value=='')
    {
      return (
        Swal.fire({
        title: 'veuillez indiquer le mois et l\'année de la déclaration',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
    }
   
    
    if (this.realsalairebrut6!=0) 
    {
     
     
decfiscmens.impottype1.type='Retenue à la source'
decfiscmens.impottype1.traitementetsalaire.salairebrut=this.realsalairebrut6.toString()
decfiscmens.impottype1.traitementetsalaire.salaireimposable=this.realsalaireimposable6.toString()
decfiscmens.impottype1.traitementetsalaire.retenuealasource=this.realretenue6.toString()
      

}
if(this.realsalairebrut6!=0)

{
  decfiscmens.impottype3.type='TFP'
  decfiscmens.impottype3.tfppayer=this.tfpapayer.toString()
  decfiscmens.impottype3.basetfp=this.realsalairebrut6.toString()
  decfiscmens.impottype3.montanttfpmois=this.tfpapayer.toString()
}
if(this.realsalairebrut6!=0)
{

  decfiscmens.impottype4.type='FOPROLOS'
  decfiscmens.impottype4.montantfoprolos=this.foprolosapayer.toString()
  decfiscmens.impottype4.basefoprolos=this.realsalairebrut6.toString()

}
if(this.realht1>0||this.realht2>0||this.realht119>0||this.realht219>0)

{
console.log(this.realht2)
decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.tvacollecter.type='TVA collecté'
decfiscmens.impottype2.tvacollecter.chiffreaffaireht=(Math.trunc(((this.realht1+this.realht2))*1000)/1000).toString()
decfiscmens.impottype2.tvacollecter19.chiffreaffaireht=(Math.trunc(((this.realht119+this.realht219))*1000)/1000).toString()
decfiscmens.impottype2.tvacollecter.tvaammount=(Math.trunc(((this.realht1+this.realht2)*+this.tauxtva)*1000)/1000).toString()
decfiscmens.impottype2.tvacollecter19.tvaammount=(Math.trunc(((this.realht119+this.realht219)*0.19)*1000)/1000).toString()
decfiscmens.impottype2.tvacollecter.ammountttc=(Math.trunc((((this.realht1+this.realht2)+((this.realht1+this.realht2)*+this.tauxtva)))*1000)/1000).toString()
decfiscmens.impottype2.tvacollecter19.ammountttc=(Math.trunc((((this.realht119+this.realht219)+((this.realht119+this.realht219)*0.19)))*1000)/1000).toString()

}
if (this.realht3>0)

{
decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.tvarecuperableautreachat.type='TVA récupérable pour les autres achats'
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht=this.realht3.toString()
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva=this.realtva3.toString()
}

if(this.realdt1>0||this.realdt2>0||this.realdt119>0||this.realdt219>0)
{
     
  decfiscmens.impottype5.type='Droit de timbre'
  decfiscmens.impottype5.nombrenotehonoraire=(Math.floor((this.realdt1+this.realdt2+this.realdt119+this.realdt219)/this.tauxdt)).toString();
  decfiscmens.impottype5.totaldroittimbre=(Math.round((this.realdt1+this.realdt2+this.realdt119+this.realdt219)*1000)/1000).toString()

}
if(this.realht1>0||this.realht2>0||this.realht119>0||this.realht219>0)
{

  decfiscmens.impottype6.type='TCL'
  decfiscmens.impottype6.chiffreaffairettc=(Math.trunc((((this.realht1+this.realht2+this.realht119+this.realht219)+((this.realht1+this.realht2)*+this.tauxtva+(this.realht119+this.realht219)*0.19)))*1000)/1000).toString()
  decfiscmens.impottype6.tclpayer=(Math.trunc((((Math.trunc((((this.realht1+this.realht2+this.realht119+this.realht219)+((this.realht1+this.realht2)*+this.tauxtva+(this.realht119+this.realht219)*+0.19)))*1000)/1000))*0.002)*1000)/1000).toString()

}
if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
||this.activite=='Sage-femmes')
{
  if(this.realht1>0||this.realht2>0||this.realht119>0||this.realht219>0)
  {
  decfiscmens.impottype7.type='FSSP'
  decfiscmens.impottype7.chiffreaffaireht=(Math.trunc(((this.realht1+this.realht2+this.realht119+this.realht219))*1000)/1000).toString()
  decfiscmens.impottype7.montantcontribution=(Math.trunc(((this.realht1+this.realht2+this.realht119+this.realht219)*0.01)*1000)/1000).toString()
} 
}
this.DecfiscmensService.create(decfiscmens).then(
  (data:any) => {
    this.token.saved=true;
    this.loading = false;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'déclaration sauvegardée avec succès! un email vous a été envoyer pour confirmer la réception de votre déclaration. vous pouvez désormais modifier/compléter votre déclaration à travers votre tableau de bord',
      showConfirmButton: false,
      timer: 6000 
    });
    this.router.navigate(['modify-decfiscmens/'+data.data._id])
  },
  (error) => {
    this.loading = false;
    
  }
)

}
  //datalistfunctions
  myFunction1() {
    var checkbox:any = document.getElementById("myCheck1");
    var text2 = document.getElementById("tabcontainer");
    if (checkbox.checked == true){
      text2.style.display = "block";
      this.showcatab=true;
      this.option3Value=true;
//verify user choice about method of declaring invoices
this.usersservice.getUserById(this.currentUser.userId).then(
  async (user: User) => {
    this.loading = false;
    this.user = user;
  //vérification du renseignement de la méthode de décalaration du chiffre d'affaire  
if (!user.choixfacture)
{
Swal.fire({
title: 'Veuillez choisir le mode de déclaration du chiffre d\'affaire. Notez que ce choix effectué ne peut être changé que suite à une demande au cabinet MaCompta',
icon: 'info',
showDenyButton: true,
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#555',
confirmButtonText: 'Edition des notes d\'honoraire',
cancelButtonText: 'Annuler',
denyButtonText: 'Saisie des recettes journalières',

}).then((result) => {
if (result.isConfirmed) {
  this.choixfacture='edition note'
  const newuser= new User
  newuser.choixfacture=this.choixfacture
  this.token.saved=true
<<<<<<< HEAD
  this.usersservice.modifyUserById(user._id,newuser).then(
=======
  this.usersservice.completeUserById(user._id,newuser).then(
>>>>>>> 3dbe58f379b76752bb388cea71d48bb133a1f7db
    () => {
      this.reloadPage();
    }
  )
}
else if (result.isDenied)
{
  this.choixfacture='saisie recette'
  const newuser= new User
  newuser.choixfacture=this.choixfacture
  this.token.saved=true
<<<<<<< HEAD
  this.usersservice.modifyUserById(user._id,newuser).then(
=======
  this.usersservice.completeUserById(user._id,newuser).then(
>>>>>>> 3dbe58f379b76752bb388cea71d48bb133a1f7db
    () => {
      this.reloadPage();
    }
  )
}
else if (result.isDismissed)
{
  this.showcatab=false;
  this.option3Value=false;
}
}).catch(() => {
Swal.fire('opération non aboutie!');
});
}
if (user.choixfacture=='edition note')
{
  if(!user.numeronote)
  {
const { value: numero } = await Swal.fire({
  title: 'Renseigner votre 1er numéro de note d\'honoraire',
  input: 'text',
  inputLabel: '1er numéro de note',
  inputValue: '',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'Vous devez renseigner une valeur!'
    }
  }
})

if (numero) 
{
  Swal.fire(`votre premier numéro est ${numero}`)
  const newuser= new User
  newuser.numeronote=numero
  this.token.saved=true
<<<<<<< HEAD
  this.usersservice.modifyUserById(user._id,newuser).then(
=======
  this.usersservice.completeUserById(user._id,newuser).then(
>>>>>>> 3dbe58f379b76752bb388cea71d48bb133a1f7db
    () => {
      this.reloadPage();
    }
  )
}

  }
  this.showinvoiceform=true
  this.showeditionnote=true
  this.showrecettejour=false
  let ammounts = this.editionnoteform.get('ammounts') as FormArray;
  ammounts.at(0).patchValue({
    montantdt:this.tauxdt
   })
let numerofactureverif:any
  this.DeccomptabiliteService.deccomptabilites.forEach(element => numerofactureverif=element.autre1.length)
  console.log(numerofactureverif)

  if (numerofactureverif<1||!numerofactureverif)
  {
    console.log('here')
    ammounts.at(0).patchValue({
      numeronote:user.numeronote
     })
  }
  else if (numerofactureverif>0)
  {
    console.log('here2')
    const c=Math.max(...(this.DeccomptabiliteService.deccomptabilites.map(a => Math.max(...a.autre1.map(b => +b.numeronote)))).map(b => b))+1
    console.log(JSON.stringify(c) )
    ammounts.at(0).patchValue({
      numeronote:JSON.stringify(c) 
  })
}
}
else if ((user.choixfacture=='saisie recette'))
{
  this.showinvoiceform=true
  this.showrecettejour=true
  this.showeditionnote=false
<<<<<<< HEAD
if(this.sousactivite!='Médecin spécialiste')
=======
if(this.sousactivite!='Médecin spécialiste'&&this.sousactivite!='Médecin'&&this.sousactivite!='Médecin dentiste')
>>>>>>> 3dbe58f379b76752bb388cea71d48bb133a1f7db
{
  for (let i = 1; i < 32; i++)
          {
            this.addammount2()
            let ammounts2 = this.recettejournaliereform.get('ammounts2') as FormArray;
            ammounts2.at(i).patchValue({
              jour:i
             })
             this.setdate2(i)
          }
          this.removeammount2(0)
          if(this.option2Value==='04'||this.option2Value==='06'||this.option2Value==='09'||this.option2Value==='11')
          {
            this.removeammount2(30)
          }
          if(this.option2Value=='02')
          {
            if(+this.option1Value % 4 ==0)
            {
            this.removeammount2(30)
            this.removeammount2(29)
            }
            else 
            {
            this.removeammount2(30)
            this.removeammount2(29)
            this.removeammount2(28)
            }

            
          }
}
  
}
  }
)
      
      

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au chiffre d\'affaires, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Réinitialiser',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          
          this.resetcaall();
          this.showcatab=false;
          this.option3Value=false;
          

        }
        else{
          checkbox.checked = true
          this.option3Value=true;

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  myFunction2() {
    var checkbox:any = document.getElementById("myCheck2");
    var text2 = document.getElementById("tabcontainer");
    
    if (checkbox.checked == true){
      text2.style.display = "block";
      this.showachattab=true;
      this.option4Value=true;
      

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs aux achats, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Réinitialiser',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          
          this.resetachatall();
          this.showachattab=false;
          this.option4Value=false;
          this.uploadFilesautre3=[]

        }
        else{
          checkbox.checked = true
          this.option4Value=true;

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  myFunction3() {
    var checkbox:any = document.getElementById("myCheck3");
    var text2 = document.getElementById("tabcontainer");
    
    if (checkbox.checked == true){
      text2.style.display = "block";
      this.showbanquetab=true;
      this.option5Value=true;
      //verify user choice about method of declaring sales
this.usersservice.getUserById(this.currentUser.userId).then(
  async (user: User) => {
    this.loading = false;
    this.user = user;
     //veirifcation of user choice about releve method
     Swal.fire({
      title: 'Veuillez choisir le mode de saisie des relevés bancaire!',
      
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#555',
      confirmButtonText: 'Saisie manuelle',
      cancelButtonText: 'Annuler',
      denyButtonText: 'Téléchargement de document',
      
      }).then((result) => {
      if (result.isConfirmed) {
        this.showrelevemanuel=true
        this.showrelevejoint=false
        //for (let i = 1; i < 32; i++)
         // {
           // this.addammount4()
           // let ammounts4 = this.relevemanuelform.get('ammounts4') as FormArray;
           // ammounts4.at(i).patchValue({
            //  jour:i
          //   })
         //    this.setdate4(i)
       //   }
       //   this.removeammount4(0)
      //    if(this.option2Value==='04'||this.option2Value==='06'||this.option2Value==='09'||this.option2Value==='11')
      //    {
      //      this.removeammount4(30)
       //   }
       //   if(this.option2Value=='02')
      //    {
         //   if(+this.option1Value % 4 ==0)
         //   {
         //   this.removeammount4(30)
         //   this.removeammount4(29)
         //   }
         //   else 
         //   {
         //   this.removeammount4(30)
         ////   this.removeammount4(29)
         //   this.removeammount4(28)
         //   }

            
          //}
      }
      else if (result.isDenied)
      {
        this.showrelevejoint=true
        this.showrelevemanuel=false
      }
      else if (result.isDismissed)
      {
        this.showrelevejoint=false
        this.showrelevemanuel=false
        this.showbanquetab=false;
        this.option5Value=false;
      }
      }).catch(() => {
      Swal.fire('opération non aboutie!');
      }); 
    })
    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs aux banques, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Réinitialiser',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          
          this.resetbanqueall();
          this.showbanquetab=false;
          this.option5Value=false;
          this.uploadFilesautre5=[]

        }
        else{
          checkbox.checked = true
          this.option5Value=true;

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  myFunction4() {
    var checkbox:any = document.getElementById("myCheck4");
    var text2 = document.getElementById("tabcontainer");
    
    if (checkbox.checked == true){
      text2.style.display = "block";
      this.showsalairetab=true;
      this.option6Value=true;
    //verify user choice about method of declaring salary
this.usersservice.getUserById(this.currentUser.userId).then(
  async (user: User) => {
    this.loading = false;
    this.user = user;
     //veirifcation of user choice about salary method
     Swal.fire({
      title: 'Veuillez choisir le mode de saisie des fiches de paie!',
      
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#555',
      confirmButtonText: 'Saisie manuelle',
      cancelButtonText: 'Annuler',
      denyButtonText: 'Redirection vers le module paie',
      
      }).then((result) => {
      if (result.isConfirmed) {
        this.showpaiemanuel=true
      
      }
      else if (result.isDenied)
      {
        this.showpaiemanuel=false
        this.router.navigate(['declare-paie'])
      }
      else if (result.isDismissed)
{
  this.showpaiemanuel=false

  this.showsalairetab=false;
  this.option6Value=false;
}
      }).catch(() => {
      Swal.fire('opération non aboutie!');
      }); 
    })  

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs aux salaires, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Réinitialiser',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) 
        {
          
          this.resetsalaireall();
          this.showsalairetab=false;
          this.option6Value=false;
          this.uploadFilesautre6=[]
        }
        else
        {
          checkbox.checked = true
          this.option6Value=true;
        }
      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  docjoint3(i:number) {
    let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
    
    var text2 = document.getElementById('achat'+`${i}`);
    var checkbox:any = document.getElementById('myCheck3'+`${i}`);
    if (ammounts3.controls[i].value.contientfiche == true)
    {
      if (ammounts3.value.at(i).montantht=='0'||ammounts3.value.at(i).montantht=='')
    {
      return (
        Swal.fire({
        title: 'veuillez saisir des données valides pour le type achat avant d\'insérer un fichier',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }),checkbox.checked = false)
    } 
      text2.style.display = "block";
      ammounts3.controls[i].patchValue({ contientfiche: true });
      console.log(ammounts3.controls[i].value.contientfiche)

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de supprimer le fichier joint, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'supprimer',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          text2.style.display = "none";
          this.uploadFilesautre3.splice(i,1)
          ammounts3.controls[i].patchValue({ contientfiche: false });
          console.log(ammounts3.controls[i].value.contientfiche)


        }
        else{
          text2.style.display = "block";
          ammounts3.controls[i].patchValue({ contientfiche: true });
          console.log(ammounts3.controls[i].value.contientfiche)

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  docjoint5(i:number) {
    let ammounts5 = this.relevejointform.get('ammounts5') as FormArray;

    var text2 = document.getElementById('releve'+`${i}`);
    var checkbox:any = document.getElementById('myCheck5'+`${i}`);

    if (ammounts5.controls[i].value.contientfiche == true)
    {
      if (ammounts5.value.at(i).mois=='0'||ammounts5.value.at(i).mois=='')
    {
      return (
        Swal.fire({
        title: 'veuillez saisir des données valides pour le type banque avant d\'insérer un fichier',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }),checkbox.checked = false)
    } 
      text2.style.display = "block";
      ammounts5.controls[i].patchValue({ contientfiche: true });
      console.log(ammounts5.controls[i].value.contientfiche)

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de supprimer le fichier joint, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'supprimer',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          text2.style.display = "none";
          this.uploadFilesautre5.splice(i,1)
          ammounts5.controls[i].patchValue({ contientfiche: false });
          console.log(ammounts5.controls[i].value.contientfiche)


        }
        else{
          text2.style.display = "block";
          ammounts5.controls[i].patchValue({ contientfiche: true });
          console.log(ammounts5.controls[i].value.contientfiche)

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  docjoint6(i:number) {
    let ammounts6 = this.salaireform.get('ammounts6') as FormArray;

    var text2 = document.getElementById('salaire'+`${i}`);
    var checkbox:any = document.getElementById('myCheck6'+`${i}`);

    if (ammounts6.controls[i].value.contientfiche == true)
    {
      if (ammounts6.value.at(i).salairebrut=='0'||ammounts6.value.at(i).salairebrut=='')
    {
      return (
        Swal.fire({
        title: 'veuillez saisir des données valides pour le type salaire avant d\'insérer un fichier',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }),checkbox.checked = false)
    } 
      text2.style.display = "block";
      ammounts6.controls[i].patchValue({ contientfiche: true });
      console.log(ammounts6.controls[i].value.contientfiche)

    } else {
      Swal.fire({
        title: 'Vous êtes sur le point de supprimer le fichier joint, voulez vous continuer?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'supprimer',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.value) {
          text2.style.display = "none";
          this.uploadFilesautre6.splice(i,1)
          ammounts6.controls[i].patchValue({ contientfiche: false });
          console.log(ammounts6.controls[i].value.contientfiche)


        }
        else{
          text2.style.display = "block";
          ammounts6.controls[i].patchValue({ contientfiche: true });
          console.log(ammounts6.controls[i].value.contientfiche)

        }

      }).catch(() => {
        Swal.fire('opération non aboutie!');
      });
      
    }
  }
  update(e)
  {}
  onImagePick(event: Event,i:number) {
    this.uploadFilesautre3.splice(i,1)
    let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
   // let fileName = (event.target as HTMLInputElement).files[0].name;
    //ammounts3.controls[i].patchValue({ image: fileName });  
    const file = (event.target as HTMLInputElement).files[0];
    if (file)
    {
      ammounts3.controls[i].patchValue({ image: file });  
      ammounts3.controls[i].updateValueAndValidity(); 
         
       if (ammounts3.value.at(i).montantht!=''&&ammounts3.value.at(i).montantht!='0')
{
  this.uploadFilesautre3.push(ammounts3.value.at(i).image);

}
    }
    
    console.log(this.uploadFilesautre3)
    const reader = new FileReader();
    reader.onload = () => {
      if (ammounts3.controls[i].valid) {
        this.fileUploaded = true;
      } else {
      }
    };
  }
  onImagePick2(event: Event,i:number) {
    this.uploadFilesautre5.splice(i,1)
    let ammounts5 = this.relevejointform.get('ammounts5') as FormArray;
    // let fileName = (event.target as HTMLInputElement).files[0].name;
     //ammounts3.controls[i].patchValue({ image: fileName });  
     const file = (event.target as HTMLInputElement).files[0];
     if (file)
{
  ammounts5.controls[i].patchValue({ image: file });  
  ammounts5.controls[i].updateValueAndValidity();
  if (ammounts5.value.at(i).mois=='0'||ammounts5.value.at(i).mois=='')
      {
        return (
          Swal.fire({
          title: 'veuillez saisir des données valides pour le type banque avant d\'insérer un fichier',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        }).then((result) => {this.loading=false
        }).catch(() => {
          Swal.fire('opération non aboutie!')
        }))
      }  
  if (ammounts5.value.at(i).mois!=''&&ammounts5.value.at(i).mois!='0')
  {
    this.uploadFilesautre5.push(ammounts5.value.at(i).image);
  
  }}
     
     console.log(this.uploadFilesautre5)
     const reader = new FileReader();
     reader.onload = () => {
       if (ammounts5.controls[i].valid) {
         this.fileUploaded = true;
       } else {
       }
     };
     reader.readAsDataURL(file);
    
  }
  onImagePick3(event: Event,i:number) {
    this.uploadFilesautre6.splice(i,1)
    let ammounts6 = this.salaireform.get('ammounts6') as FormArray;
    // let fileName = (event.target as HTMLInputElement).files[0].name;
     //ammounts3.controls[i].patchValue({ image: fileName });  
     const file = (event.target as HTMLInputElement).files[0];
     if (file)
     {
      ammounts6.controls[i].patchValue({ image: file });  
      ammounts6.controls[i].updateValueAndValidity();
      if (ammounts6.value.at(i).salairebrut=='0'||ammounts6.value.at(i).salairebrut=='')
      {
        return (
          Swal.fire({
          title: 'veuillez saisir des données valides pour le type salaire avant d\'insérer un fichier',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        }).then((result) => {this.loading=false
        }).catch(() => {
          Swal.fire('opération non aboutie!')
        }))
      }  
      if (ammounts6.value.at(i).salairebrut!=''&&ammounts6.value.at(i).salairebrut!='0')
      {
        this.uploadFilesautre6.push(ammounts6.value.at(i).image);
      
      }     }
    
     console.log(this.uploadFilesautre6)
     const reader = new FileReader();
     reader.onload = () => {
       if (ammounts6.controls[i].valid) {
         this.fileUploaded = true;
       } else {
       }
     };
     reader.readAsDataURL(file);
    
  }
  async verifyinvoice(i:number)
  {
    let ammounts3 = this.factureachatform.get('ammounts3') as FormArray;
    let invoice1:any
    let invoice2:any
    let invoice3:any
    let invoice4:any
    let invoice5:any
    let invoice6:any
    let fourexist:any
    let factexist:any
    let anneeexist:any
let fournisseurs=[]
let numerosfacture=[]
let annees=[]
    this.DeccomptabiliteService.deccomptabilites.forEach(element => element.autre3.forEach(e => (invoice1=e.fournisseur === ammounts3.value.at(i).fournisseur,fournisseurs.push({
      invoice1
    }))));
    fournisseurs.find(e => fourexist=e.invoice1===true);
    this.DeccomptabiliteService.deccomptabilites.forEach(element => (invoice2=element.annee===this.option1Value,annees.push({
      invoice2
    })))
    annees.find(e => anneeexist=e.invoice2===true);
    this.DeccomptabiliteService.deccomptabilites.forEach(element => element.autre3.forEach(e => (invoice3=e.numerofacture === ammounts3.value.at(i).numerofacture,console.log(invoice3),numerosfacture.push({
      invoice3
    }))));
    numerosfacture.find(e => factexist=e.invoice3===true);
    //console.log(annees)
    /*console.log(fournisseurs)
    console.log(numerosfacture)
    console.log(invoice2)
    console.log(this.DeccomptabiliteService.deccomptabilites)
    console.log(fourexist)
    console.log(factexist)*/
    if(ammounts3.length>1)
    {
      let ammounts3sliced=ammounts3.getRawValue().slice(0,-1)
      ammounts3sliced.find(e => invoice4=e.fournisseur === ammounts3.getRawValue()[i].fournisseur);
      ammounts3sliced.find(e => invoice5=e.autrefournisseur === ammounts3.value.at(i).autrefournisseur);
      ammounts3sliced.find(e => invoice6=e.numerofacture === ammounts3.getRawValue()[i].numerofacture);
      console.log(ammounts3sliced)
    }
    console.log(fournisseurs)
    console.log(numerosfacture)
if(ammounts3.value.at(i).fournisseur&&ammounts3.value.at(i).numerofacture)
{
  if(fourexist&&anneeexist&&factexist||invoice4&&invoice5&&invoice6)
  try {
    console.log('here')
      const result = await Swal.fire({
        title: 'numéro facture pour cette année dèjà utilisé',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      this.loading = false;
      ammounts3.controls[i].patchValue({ numerofacture: '',fournisseur:'' });  
    } catch {
      Swal.fire('opération non aboutie!');
    }
}
    

  }
  ngOnDestroy(){
    this.destroyed$.next();
   this.destroyed$.complete();
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 1000);
    
    
  }
}
