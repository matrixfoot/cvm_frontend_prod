import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { AlertService } from '../_helpers/alert.service';
import { User } from '../models/user.model';
import { Decfiscmens } from '../models/dec-fisc-mens';
import Swal from 'sweetalert2';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-declare-fiscality',
  templateUrl: './declare-fiscality.component.html',
  styleUrls: ['./declare-fiscality.component.scss']
})
export class DeclareFiscalityComponent implements OnInit,OnDestroy {
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
  
  decfiscmens:Decfiscmens;
  standardtraitementsalaireform: FormGroup;
  standardlocationresidentesphysiqueform: FormGroup;
  standardlocationresidentesmoraleform: FormGroup;
  standardlocationnonresidentesphysiquesform: FormGroup;
  standardlocationnonresidentesmoralesform:FormGroup;
  standardhonorairephysiquereelform:FormGroup;
  standardhonorairephysiquenonreelform: FormGroup;
  standardhonorairegroupementsform:FormGroup;
  standardmontant15form: FormGroup;
  standardmontant10form: FormGroup;
  standardmontantindividuelform: FormGroup;
  standardmontantautreform: FormGroup;
  optionValue:any;
  option2Value:any;
  option3Value:any;
  option4Value:any;
  option5Value:any;
  option6Value:any;
  option7Value:any;
  option8Value:any;
  option9Value:any;
  option10Value:any;
  option11Value:any;
  option12Value:any;
  option13Value:any;
  option14Value:any;
  option15Value:any;
  option16Value:any;
  option17Value:any;
  option18Value:any;
  option19Value:any;
  option20Value:any;
  option21Value:any;
  option22Value:any;
  option23Value:any;
  option24Value:any;
  option25Value:any;
  option26Value:any;
  option27Value:any;
  option28Value:any;
  option29Value:any;
  option30Value:any;
  option31Value:any;
  option32Value:any;
  option33Value:any;
  option34Value:any;
  option35Value:any;
  option36Value:any;
  option37Value:any;
  option38Value:any;
  option39Value:any;
  option40Value:any;
  option41Value:any;
  option42Value:any;
  option43Value:any;
  option44Value:any;
  option45Value:any;
  option46Value:any;
  option47Value:any;
  option48Value:any;
  option49Value:any;
  option50Value:any;
  option51Value:any;
  option52Value:any;
  option53Value:any;
  option54Value:any;
  option55Value:any;
  option56Value:any;
  message: string;
  sub1:Subscription;
  sub2:Subscription;
  sub3:Subscription;
  sub4:Subscription;
  sub5:Subscription;
  sub6:Subscription;
  sub7:Subscription;
  sub8:Subscription;
  sub9:Subscription;
  sub10:Subscription;
  sub11:Subscription;
  sub12:Subscription;
  sub13:Subscription;
  sub14:Subscription;
  sub15:Subscription;
  sub16:Subscription;
  sub17:Subscription;
  sub18:Subscription;
  sub19:Subscription;
  sub20:Subscription;
  sub21:Subscription;
  sub22:Subscription;
  selectedTab: number = 0;
  retenues: Array<string> = ['location, commission, courtage et vacation', 'traitement et salaires', 'honoraire', 'montant supérieur à 1000 dt', 'Autre'];
  selected = "----"
  showretenuetab=false;
  showtfptab=false;
  showfoprolostab=false;
  showtvatab=false;
  showtimbretab=false;
  showtcltab=false;
  autreform: FormGroup;
  public ammounts: FormArray;
  
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private DecfiscmensService :DecfiscmensService,private fb: FormBuilder) {
      this.autreform = this.fb.group({
        ammounts: this.fb.array([ this.createammount() ])
     });
    }
  ngOnInit() {
    
    this.standardtraitementsalaireform =this.fb.group({
      brutsalary: '',
      imposalary: '',
      retenuesalary: '',
      solidaritycontribution: '',
      
      
    });
    this.standardlocationresidentesphysiqueform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.1",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    
    this.standardlocationresidentesmoraleform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.1",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardlocationnonresidentesphysiquesform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.15",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardlocationnonresidentesmoralesform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.15",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardhonorairephysiquereelform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.03",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardhonorairephysiquenonreelform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.1",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardhonorairegroupementsform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.03",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardmontant15form =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.01",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardmontant10form =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.005",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardmontantindividuelform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.005",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    this.standardmontantautreform =this.fb.group({
      brutammount: '',
      quotion: [{value:"0.015",disabled:true}],
      retenueammount: [{value:"",disabled:true}],
      netammount: '',
      
    });
    
    this.sub1=merge(
      this.standardlocationresidentesphysiqueform.get('brutammount').valueChanges,
      this.standardlocationresidentesphysiqueform.get('quotion').valueChanges,
      
    ).subscribe((res:any)=>{
      this.calculateResultForm1()
   })
   this.sub2=merge(
    this.standardlocationresidentesphysiqueform.get('netammount').valueChanges,
    this.standardlocationresidentesphysiqueform.get('quotion').valueChanges,
    
  ).subscribe((res:any)=>{
    this.calculateResultForm2()
 })
 this.sub3=merge(
  this.standardlocationresidentesmoraleform.get('brutammount').valueChanges,
  this.standardlocationresidentesmoraleform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm3()
})
this.sub4=merge(
  this.standardlocationresidentesmoraleform.get('netammount').valueChanges,
  this.standardlocationresidentesmoraleform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm4()
})
this.sub5=merge(
  this.standardlocationnonresidentesphysiquesform.get('brutammount').valueChanges,
  this.standardlocationnonresidentesphysiquesform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm5()
})
this.sub6=merge(
  this.standardlocationnonresidentesphysiquesform.get('netammount').valueChanges,
  this.standardlocationnonresidentesphysiquesform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm6()
})
this.sub7=merge(
  this.standardlocationnonresidentesmoralesform.get('brutammount').valueChanges,
  this.standardlocationnonresidentesmoralesform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm7()
})
this.sub8=merge(
  this.standardlocationnonresidentesmoralesform.get('netammount').valueChanges,
  this.standardlocationnonresidentesmoralesform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm8()
})
this.sub9=merge(
  this.standardhonorairephysiquereelform.get('brutammount').valueChanges,
  this.standardhonorairephysiquereelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm9()
})
this.sub10=merge(
  this.standardhonorairephysiquereelform.get('netammount').valueChanges,
  this.standardhonorairephysiquereelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm10()
})
this.sub11=merge(
  this.standardhonorairephysiquenonreelform.get('brutammount').valueChanges,
  this.standardhonorairephysiquenonreelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm11()
})
this.sub12=merge(
  this.standardhonorairephysiquenonreelform.get('netammount').valueChanges,
  this.standardhonorairephysiquenonreelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm12()
})
this.sub13=merge(
  this.standardhonorairegroupementsform.get('brutammount').valueChanges,
  this.standardhonorairegroupementsform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm13()
})
this.sub14=merge(
  this.standardhonorairegroupementsform.get('netammount').valueChanges,
  this.standardhonorairegroupementsform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm14()
})
this.sub15=merge(
  this.standardmontant15form.get('brutammount').valueChanges,
  this.standardmontant15form.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm15()
})
this.sub16=merge(
  this.standardmontant15form.get('netammount').valueChanges,
  this.standardmontant15form.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm16()
})
this.sub17=merge(
  this.standardmontant10form.get('brutammount').valueChanges,
  this.standardmontant10form.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm17()
})
this.sub18=merge(
  this.standardmontant10form.get('netammount').valueChanges,
  this.standardmontant10form.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm18()
})
this.sub19=merge(
  this.standardmontantindividuelform.get('brutammount').valueChanges,
  this.standardmontantindividuelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm19()
})
this.sub20=merge(
  this.standardmontantindividuelform.get('netammount').valueChanges,
  this.standardmontantindividuelform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm20()
})
this.sub21=merge(
  this.standardmontantautreform.get('brutammount').valueChanges,
  this.standardmontantautreform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm21()
})
this.sub22=merge(
  this.standardmontantautreform.get('netammount').valueChanges,
  this.standardmontantautreform.get('quotion').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm22()
})
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

  get ammountControls() {
    return this.autreform.get('ammounts')['controls'];
  }
calculateResultForm1()
  {
    console.log(this.option48Value)
    const brutammount=+this.standardlocationresidentesphysiqueform.get('brutammount').value
    const quotion=+this.standardlocationresidentesphysiqueform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardlocationresidentesphysiqueform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardlocationresidentesphysiqueform.updateValueAndValidity();
    
    
  }
  calculateResultForm2()
  {
  
    const netammount=+this.standardlocationresidentesphysiqueform.get('netammount').value
      const quotion=+this.standardlocationresidentesphysiqueform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardlocationresidentesphysiqueform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardlocationresidentesphysiqueform.updateValueAndValidity();
    
    
  }
  calculateResultForm3()
  {
  
    const brutammount=+this.standardlocationresidentesmoraleform.get('brutammount').value
    const quotion=+this.standardlocationresidentesmoraleform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardlocationresidentesmoraleform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardlocationresidentesmoraleform.updateValueAndValidity();
    
    
  }
  calculateResultForm4()
  {
  
    const netammount=+this.standardlocationresidentesmoraleform.get('netammount').value
      const quotion=+this.standardlocationresidentesmoraleform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardlocationresidentesmoraleform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardlocationresidentesmoraleform.updateValueAndValidity();
    
    
  }
  calculateResultForm5()
  {
  
    const brutammount=+this.standardlocationnonresidentesphysiquesform.get('brutammount').value
    const quotion=+this.standardlocationnonresidentesphysiquesform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardlocationnonresidentesphysiquesform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardlocationnonresidentesphysiquesform.updateValueAndValidity();
    
    
  }
  calculateResultForm6()
  {
  
    const netammount=+this.standardlocationnonresidentesphysiquesform.get('netammount').value
      const quotion=+this.standardlocationnonresidentesphysiquesform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardlocationnonresidentesphysiquesform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardlocationnonresidentesphysiquesform.updateValueAndValidity();
    
    
  }
  calculateResultForm7()
  {
  
    const brutammount=+this.standardlocationnonresidentesmoralesform.get('brutammount').value
    const quotion=+this.standardlocationnonresidentesmoralesform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardlocationnonresidentesmoralesform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardlocationnonresidentesmoralesform.updateValueAndValidity();
    
    
  }
  calculateResultForm8()
  {
  
    const netammount=+this.standardlocationnonresidentesmoralesform.get('netammount').value
      const quotion=+this.standardlocationnonresidentesmoralesform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardlocationnonresidentesmoralesform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardlocationnonresidentesmoralesform.updateValueAndValidity();
    
    
  }
  calculateResultForm9()
  {
  
    const brutammount=+this.standardhonorairephysiquereelform.get('brutammount').value
    const quotion=+this.standardhonorairephysiquereelform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardhonorairephysiquereelform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardhonorairephysiquereelform.updateValueAndValidity();
    
    
  }
  calculateResultForm10()
  {
  
    const netammount=+this.standardhonorairephysiquereelform.get('netammount').value
      const quotion=+this.standardhonorairephysiquereelform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardhonorairephysiquereelform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardhonorairephysiquereelform.updateValueAndValidity();
    
    
  }
  calculateResultForm11()
  {
  
    const brutammount=+this.standardhonorairephysiquenonreelform.get('brutammount').value
    const quotion=+this.standardhonorairephysiquenonreelform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardhonorairephysiquenonreelform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardhonorairephysiquenonreelform.updateValueAndValidity();
    
    
  }
  calculateResultForm12()
  {
  
    const netammount=+this.standardhonorairephysiquenonreelform.get('netammount').value
      const quotion=+this.standardhonorairephysiquenonreelform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardhonorairephysiquenonreelform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardhonorairephysiquenonreelform.updateValueAndValidity();
    
    
  }
  calculateResultForm13()
  {
  
    const brutammount=+this.standardhonorairegroupementsform.get('brutammount').value
    const quotion=+this.standardhonorairegroupementsform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardhonorairegroupementsform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardhonorairegroupementsform.updateValueAndValidity();
    
    
  }
  calculateResultForm14()
  {
  
    const netammount=+this.standardhonorairegroupementsform.get('netammount').value
      const quotion=+this.standardhonorairegroupementsform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardhonorairegroupementsform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardhonorairegroupementsform.updateValueAndValidity();
    
    
  }
  calculateResultForm15()
  {
  
    const brutammount=+this.standardmontant15form.get('brutammount').value
    const quotion=+this.standardmontant15form.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardmontant15form.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardmontant15form.updateValueAndValidity();
    
    
  }
  calculateResultForm16()
  {
  
    const netammount=+this.standardmontant15form.get('netammount').value
      const quotion=+this.standardmontant15form.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardmontant15form.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardmontant15form.updateValueAndValidity();
    
    
  }
  calculateResultForm17()
  {
  
    const brutammount=+this.standardmontant10form.get('brutammount').value
    const quotion=+this.standardmontant10form.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardmontant10form.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardmontant10form.updateValueAndValidity();
    
    
  }
  calculateResultForm18()
  {
  
    const netammount=+this.standardmontant10form.get('netammount').value
      const quotion=+this.standardmontant10form.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardmontant10form.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardmontant10form.updateValueAndValidity();
    
    
  }
  calculateResultForm19()
  {
  
    const brutammount=+this.standardmontantindividuelform.get('brutammount').value
    const quotion=+this.standardmontantindividuelform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardmontantindividuelform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardmontantindividuelform.updateValueAndValidity();
    
    
  }
  calculateResultForm20()
  {
  
    const netammount=+this.standardmontantindividuelform.get('netammount').value
      const quotion=+this.standardmontantindividuelform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardmontantindividuelform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardmontantindividuelform.updateValueAndValidity();
    
    
  }
  calculateResultForm21()
  {
  
    const brutammount=+this.standardmontantautreform.get('brutammount').value
    const quotion=+this.standardmontantautreform.get('quotion').value
    const retenueammount=+ Math.floor((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.floor((brutammount-retenueammount)*1000)/1000;
  
    this.standardmontantautreform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
      );
    this.standardmontantautreform.updateValueAndValidity();
    
    
  }
  calculateResultForm22()
  {
  
    const netammount=+this.standardmontantautreform.get('netammount').value
      const quotion=+this.standardmontantautreform.get('quotion').value
      const retenueammount=+ Math.floor(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.floor((+netammount+ +retenueammount)*1000)/1000
      this.standardmontantautreform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardmontantautreform.updateValueAndValidity();
    
    
  }
  onSubmit() {
    this.loading = true;
    
    const decfiscmens:Decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: '',statut: '',motif: '', traitementetsalaire: { salairebrut:'', salaireimposable: '', retenuealasource: '',contributionsociale: '', }, 
    location: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', }, honoraire: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, 
    montant1000: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, autre: { titre:'',montant:'',description:''}}
    decfiscmens.userId = this.currentUser.userId;
    decfiscmens.activite=this.currentUser.activite;
    decfiscmens.codepostal=this.currentUser.codepostal;
    decfiscmens.adresse=this.currentUser.adresse
    decfiscmens.firstname=this.currentUser.Firstname
    decfiscmens.lastname=this.currentUser.Lastname
    decfiscmens.raisonsociale=this.currentUser.raisonsociale
    decfiscmens.codegenre=this.currentUser.codegenre
    decfiscmens.codetva=this.currentUser.codetva
    decfiscmens.matriculefiscale=this.currentUser.matriculefiscale
    decfiscmens.registrecommerce=this.currentUser.registrecommerce
    decfiscmens.datearretactivite=this.currentUser.datearretactivite
    decfiscmens.annee=this.option54Value
    decfiscmens.mois=this.option55Value
    if (this.option48Value) 
    {
decfiscmens.impottype1.type='Retenue à la source'
decfiscmens.impottype1.traitementetsalaire.salairebrut=this.standardtraitementsalaireform.get('brutsalary').value
decfiscmens.impottype1.traitementetsalaire.salaireimposable=this.standardtraitementsalaireform.get('imposalary').value
decfiscmens.impottype1.traitementetsalaire.retenuealasource=this.standardtraitementsalaireform.get('retenuesalary').value
decfiscmens.impottype1.traitementetsalaire.contributionsociale=this.standardtraitementsalaireform.get('solidaritycontribution').value
if (this.standardlocationresidentesphysiqueform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location.type='location, commission, courtage et vacation servis aux personnes résidentes personnes physiques'
decfiscmens.impottype1.location.montantbrut=this.standardlocationresidentesphysiqueform.get('brutammount').value
decfiscmens.impottype1.location.montantnet=this.standardlocationresidentesphysiqueform.get('netammount').value
decfiscmens.impottype1.location.montantretenue=this.standardlocationresidentesphysiqueform.get('retenueammount').value
}
if (this.standardlocationresidentesmoraleform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location.type='location, commission, courtage et vacation servis aux personnes résidentes personnes morales'
decfiscmens.impottype1.location.montantbrut=this.standardlocationresidentesmoraleform.get('brutammount').value
decfiscmens.impottype1.location.montantnet=this.standardlocationresidentesmoraleform.get('netammount').value
decfiscmens.impottype1.location.montantretenue=this.standardlocationresidentesmoraleform.get('retenueammount').value
}
if (this.standardlocationnonresidentesphysiquesform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location.type='location, commission, courtage et vacation servis aux personnes non résidentes personnes physiques'
decfiscmens.impottype1.location.montantbrut=this.standardlocationnonresidentesphysiquesform.get('brutammount').value
decfiscmens.impottype1.location.montantnet=this.standardlocationnonresidentesphysiquesform.get('netammount').value
decfiscmens.impottype1.location.montantretenue=this.standardlocationnonresidentesphysiquesform.get('retenueammount').value
}
if (this.standardlocationnonresidentesmoralesform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location.type='location, commission, courtage et vacation servis aux personnes non résidentes personnes morales'
decfiscmens.impottype1.location.montantbrut=this.standardlocationnonresidentesmoralesform.get('brutammount').value
decfiscmens.impottype1.location.montantnet=this.standardlocationnonresidentesmoralesform.get('netammount').value
decfiscmens.impottype1.location.montantretenue=this.standardlocationnonresidentesmoralesform.get('retenueammount').value
}
if (this.standardhonorairephysiquereelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire.type='honoraire servis aux personnes physiques soumises au régime réel'
  decfiscmens.impottype1.honoraire.montantbrut=this.standardhonorairephysiquereelform.get('brutammount').value
  decfiscmens.impottype1.honoraire.montantnet=this.standardhonorairephysiquereelform.get('netammount').value
  decfiscmens.impottype1.honoraire.montantretenue=this.standardhonorairephysiquereelform.get('retenueammount').value  
}
if (this.standardhonorairephysiquenonreelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire.type='honoraire servis aux personnes physiques non soumises au régime réel'
  decfiscmens.impottype1.honoraire.montantbrut=this.standardhonorairephysiquenonreelform.get('brutammount').value
  decfiscmens.impottype1.honoraire.montantnet=this.standardhonorairephysiquenonreelform.get('netammount').value
  decfiscmens.impottype1.honoraire.montantretenue=this.standardhonorairephysiquenonreelform.get('retenueammount').value  
}
if (this.standardhonorairegroupementsform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire.type='honoraire servis aux sociétés et aux groupements'
  decfiscmens.impottype1.honoraire.montantbrut=this.standardhonorairegroupementsform.get('brutammount').value
  decfiscmens.impottype1.honoraire.montantnet=this.standardhonorairegroupementsform.get('netammount').value
  decfiscmens.impottype1.honoraire.montantretenue=this.standardhonorairegroupementsform.get('retenueammount').value  
}
if (this.standardmontant15form.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant1000.type='Montants supérieurs à 1000dt établissements soumis à l\'i/s au taux de 15%'
  decfiscmens.impottype1.montant1000.montantbrut=this.standardmontant15form.get('brutammount').value
  decfiscmens.impottype1.montant1000.montantnet=this.standardmontant15form.get('netammount').value
  decfiscmens.impottype1.montant1000.montantretenue=this.standardmontant15form.get('retenueammount').value  
}
if (this.standardmontant10form.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant1000.type='Montants supérieurs à 1000dt établissements soumis à l\i/s au taux de 10%'
  decfiscmens.impottype1.montant1000.montantbrut=this.standardmontant10form.get('brutammount').value
  decfiscmens.impottype1.montant1000.montantnet=this.standardmontant10form.get('netammount').value
  decfiscmens.impottype1.montant1000.montantretenue=this.standardmontant10form.get('retenueammount').value  
}
if (this.standardmontantindividuelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant1000.type='Montants supérieurs à 1000dt établissements individuels et éligible à la réduction des 2/3 des revenus'
  decfiscmens.impottype1.montant1000.montantbrut=this.standardmontantindividuelform.get('brutammount').value
  decfiscmens.impottype1.montant1000.montantnet=this.standardmontantindividuelform.get('netammount').value
  decfiscmens.impottype1.montant1000.montantretenue=this.standardmontantindividuelform.get('retenueammount').value  
}
if (this.standardmontantautreform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant1000.type='Montants supérieurs à 1000dt autre établissements'
  decfiscmens.impottype1.montant1000.montantbrut=this.standardmontantautreform.get('brutammount').value
  decfiscmens.impottype1.montant1000.montantnet=this.standardmontantautreform.get('netammount').value
  decfiscmens.impottype1.montant1000.montantretenue=this.standardmontantautreform.get('retenueammount').value  
}
this.DecfiscmensService.create(decfiscmens).then(
  (data:any) => {
    
    this.loading = false;
    this.alertService.success('Votre requête a été envoyé avec succès!');
    window.scrollTo(0, 0);
  },
  (error) => {
    this.loading = false;
    this.alertService.error(error.error.error);
    window.scrollTo(0, 0);
  }
)
    }
        
        
        
      
  }
  ngOnDestroy(){
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
    this.sub3.unsubscribe()
    this.sub4.unsubscribe()
    this.sub5.unsubscribe()
    this.sub6.unsubscribe()
    this.sub7.unsubscribe()
    this.sub8.unsubscribe()
    this.sub9.unsubscribe()
    this.sub10.unsubscribe()
    this.sub11.unsubscribe()
    this.sub12.unsubscribe()
    this.sub13.unsubscribe()
    this.sub14.unsubscribe()
    this.sub15.unsubscribe()
    this.sub16.unsubscribe()
    this.sub17.unsubscribe()
    this.sub18.unsubscribe()
    this.sub19.unsubscribe()
    this.sub20.unsubscribe()
    this.sub21.unsubscribe()
    this.sub22.unsubscribe()
//    this.sub2.unsubscribe()
  }
  onReset() {
    
    this.standardlocationresidentesphysiqueform.controls['brutammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['netammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['retenueammount'].reset()
    
}
  createammount(): FormGroup {
    return this.fb.group({
      title: '',
      ammount: '',
      description: ''
    });
  }

  addammount(): void {
    this.ammounts = this.autreform.get('ammounts') as FormArray;
    this.ammounts.push(this.createammount());
  }

  removeammount(i: number) {
    this.ammounts.removeAt(i);
  }
  logValue() {
    console.log(this.ammounts.value);
  }
  
  onTabClick(event) {
   
  }
  update(e){
    this.selected = e.target.value
  }
  findfiltredretenue(retenues: any[]): any[] {
    
    return retenues.filter(p => p!==this.optionValue);
  }
  findfiltredretenue2(retenues: any[]): any[] {
    
    return retenues.filter(p => p!==this.optionValue&& p!==this.option3Value);
  }
  findfiltredretenue3(retenues: any[]): any[] {
    
    return retenues.filter(p => p!==this.optionValue&& p!==this.option3Value&&p!==this.option19Value);
  }
  findfiltredretenue4(retenues: any[]): any[] {
    
    return retenues.filter(p => p!==this.optionValue&& p!==this.option3Value&&p!==this.option19Value&&p!==this.option29Value);
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


  