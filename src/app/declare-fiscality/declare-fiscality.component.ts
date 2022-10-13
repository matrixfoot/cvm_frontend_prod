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
  standardtvacollecteform: FormGroup;
  standardtvarecuperableimmobilierform: FormGroup;
  standardtvarecuperableequipementform: FormGroup;
  standardtvarecuperableautreachatform: FormGroup;

  standardlocationusagehabitationmeubleform: FormGroup;
  standardlocationusagecommercialform: FormGroup;
 
  standardoperationlotissementform: FormGroup;
  standardinteretpercueform: FormGroup;
  standardautretvaspecialform: FormGroup;
  standardtfpform:FormGroup;
  standardfoprolosform: FormGroup;
  standarddroittimbreform: FormGroup;
  standardtclform: FormGroup;
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
  option48Value=false;
  option49Value=false;
  option50Value=false;
  option51Value=false;
  option52Value=false;
  option53Value=false;
  option54Value:any;
  option55Value:any;
  option56Value:any;
  option57Value:any;
  option58Value:any;
  option59Value:any;
  option60Value:any;
  option61Value:any;
  option62Value:any;
  option63Value:any;
  option64Value:any;
  option65Value:any;
  option66Value:any;
  option67Value:any;
  option68Value:any;
  option69Value:any;
  option70Value:any;
  option71Value:any;
  option72Value:any;
  option73Value:any;
  option74Value:any;
  option75Value:any;
  option76Value:any;
  option77Value:any;
  option78Value:any;
  option79Value:any;
  option80Value:any;
  option81Value:any;
  option82Value:any;
  option83Value:any;
  option84Value:any;
  option85Value:any;
  option86Value:any;
  option87Value:any;
  option88Value:any;
  option89Value:any;
  option90Value:any;
  option91Value:any;
  option92Value:any;
  option93Value:any;
  option94Value:any;
  option95Value:any;
  option96Value:any;
  option97Value:any;
  option98Value:any;
  option99Value:any;
  option100Value:any;
  option101Value:any;
  option102Value:any;
  option103Value:any;
  option104Value:any;
  option105Value:any;
  option106Value:any;
  option107Value:any;
  option108Value:any;
  option109Value:any;
  option110Value:any;
  option111Value:any;
  option112Value:any;
  option113Value:any;
  option114Value:any;
  option115Value:any;
  option116Value:any;
  option117Value:any;
  option118Value:any;
  option119Value:any;
  option120Value:any;
  option121Value:any;
  option122Value:any;
  option123Value:any;
  option124Value:any;
  option125Value:any;
  option126Value:any;
  option127Value:any;
  option128Value:any;
  option129Value:any;
  option130Value:any;
  option131Value:any;
  option132Value:any;
  option133Value:any;
  option134Value:any;
  option135Value:any;
  option136Value:any;
  option137Value:any;
  option138Value:any;
  option139Value:any;
  option140Value:any;
  option141Value:any;
  option142Value:any;
  option143Value:any;
  option144Value:any;
  option145Value:any;
  option146Value:any;
  option147Value:any;
  option148Value:any;
  option149Value:any;
  option150Value:any;
  option151Value:any;
  option152Value:any;
  option153Value:any;
  option154Value:any;
  option155Value:any;
  option156Value:any;
  option157Value:any;
  option158Value:any;
  option159Value:any;
  option160Value:any;
  option161Value:any;
  option162Value:any;
  option163Value:any;
  option164Value:any;
  option165Value:any;
  option166Value:any;
  option167Value:any;
  option168Value:any;
  option169Value:any;
  option170Value:any;
  option171Value:any;
  option172Value:any;
  option173Value:any;
  option174Value:any;
  option175Value:any;
  option176Value:any;
  option177Value:any;
  option178Value:any;
  option179Value:any;
  option180Value:any;
  option181Value:any;
  option182Value:any;
  option183Value:any;
  option184Value:any;
  option185Value:any;
  option186Value:any;
  option187Value:any;
  option188Value:any;
  option189Value:any;
  option190Value:any;
  option191Value:any;
  option192Value:any;
  option193Value:any;
  option194Value:any;
  option195Value:any;
  option196Value:any;
  option197Value:any;
  option198Value:any;
  option199Value:any;
  option200Value:any;
  option201Value:any;
  option202Value:any;
  option203Value:any;
  
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
  sub23:Subscription;
  sub24:Subscription;
  sub25:Subscription;
  sub26:Subscription;
  sub27:Subscription;
  sub28:Subscription;
  sub29:Subscription;
  sub30:Subscription;
  sub31:Subscription;
  sub32:Subscription;
  sub33:Subscription;
  sub34:Subscription;
  sub35:Subscription;
  sub36:Subscription;
  selectedTab: number = 0;
  autretva: Array<string> = ['location à usage d\'habitation meublé', 'location à usage commercial', 'location à usage industriel', 'location à usage professionnel',
'location à usage artisanal','opérations de lotissement','intérêts perçus'];
  retenues: Array<string> = ['location, commission, courtage et vacation', 'traitement et salaires', 'honoraire', 'montant supérieur à 1000 dt', 'Autre'];
  choices: Array<string> = ['servis aux personnes non résidentes',  'servis aux personnes résidentes'];
  selected = "----"
  showretenuetab=false;
  showtfptab=false;
  showfoprolostab=false;
  showtvatab=false;
  showtimbretab=false;
  showtcltab=false;
  autreform: FormGroup;
  totalretenueammount:number;
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
    this.standardtvacollecteform =this.fb.group({
      chiffreaffaireht: '',
      taux: [{value:"0.13",disabled:true}],
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    this.standardtvarecuperableautreachatform =this.fb.group({
      achatlocauxht: '',
      achatlocauxtva: '',
      achatimporteht: '',
      achatimportetva: '',
    });
    this.standardtvarecuperableequipementform =this.fb.group({
      achatlocauxht: '',
      achatlocauxtva: '',
      achatimporteht: '',
      achatimportetva: '',
    });
    this.standardtvarecuperableimmobilierform =this.fb.group({
      achatlocauxht: '',
      achatlocauxtva: '',
      
    });
    this.standardlocationusagehabitationmeubleform =this.fb.group({
      ammountht: '',
      taux: [{value:"0.19",disabled:true}],
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    this.standardlocationusagecommercialform =this.fb.group({
      ammountht: '',
      taux: [{value:"0.19",disabled:true}],
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    
    this.standardoperationlotissementform =this.fb.group({
      ammountht: '',
      taux: [{value:"0.19",disabled:true}],
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    this.standardinteretpercueform =this.fb.group({
      ammountht: '',
      taux: [{value:"0.19",disabled:true}],
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    this.standardautretvaspecialform =this.fb.group({
      ammountht: '',
      tauxpercent: '',
      taux: '',
      tvaammount: [{value:"",disabled:true}],
      ammountttc: [{value:"",disabled:true}],
    });
    this.standardtfpform =this.fb.group({
      basetfp: [{value:"",disabled:true}],
      taux: [{value:"0.02",disabled:true}],
      avanceammount: '',
      tfpapayer: [{value:"",disabled:true}],
      salairesnonsoumistfp: '',
      tfpammountmoisactuel: [{value:"",disabled:true}],
      tfpammountreportmoisprecedent: '',
      tfpareporter: [{value:"",disabled:true}],
    });
    this.standardfoprolosform =this.fb.group({
      basefoprolos: [{value:'',disabled:true}],
      taux: [{value:"0.01",disabled:true}],
      salairesnonsoumisfoprolos: '',
      foprolosammount: '',
    });
    this.standarddroittimbreform =this.fb.group({
      nombrenotehonoraire: '',
      taux: [{value:"0.6",disabled:true}],
      totaldroittimbre: '',
    });
    this.standardtclform =this.fb.group({
      chiffreaffairettc: '',
      taux: [{value:"0.002",disabled:true}],
      tclapayer: [{value:'',disabled:true}],
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
this.sub23=merge(
  this.standardtraitementsalaireform.get('brutsalary').valueChanges,
  this.standardtraitementsalaireform.get('retenuesalary').valueChanges,
  this.standardtraitementsalaireform.get('imposalary').valueChanges,
  this.standardtraitementsalaireform.get('solidaritycontribution').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm23()
})
this.sub24=merge(
  
  this.standardtvacollecteform.get('chiffreaffaireht').valueChanges,
  this.standardtvacollecteform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm24()
})
this.sub25=merge(
  
  this.standardlocationusagehabitationmeubleform.get('ammountht').valueChanges,
  this.standardlocationusagehabitationmeubleform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm25()
})
this.sub26=merge(
  
  this.standardlocationusagecommercialform.get('ammountht').valueChanges,
  this.standardlocationusagecommercialform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm26()
})

this.sub30=merge(
  
  this.standardoperationlotissementform.get('ammountht').valueChanges,
  this.standardoperationlotissementform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm30()
})
this.sub31=merge(
  
  this.standardinteretpercueform.get('ammountht').valueChanges,
  this.standardinteretpercueform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm31()
})
this.sub32=merge(
  
  this.standardautretvaspecialform.get('ammountht').valueChanges,
  this.standardautretvaspecialform.get('tauxpercent').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm32()
})
this.sub33=merge(
  
  this.standarddroittimbreform.get('nombrenotehonoraire').valueChanges,
  this.standarddroittimbreform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm33()
})
this.sub34=merge(
  
  this.standardtclform.get('chiffreaffairettc').valueChanges,
  this.standardtclform.get('taux').valueChanges,
  
  
).subscribe((res:any)=>{
  this.calculateResultForm34()
})
this.sub35=merge(
  
  this.standardtfpform.get('salairesnonsoumistfp').valueChanges,
  this.standardtfpform.get('taux').valueChanges,
  this.standardtfpform.get('basetfp').valueChanges,
  this.standardtfpform.get('tfpammountreportmoisprecedent').valueChanges,
  this.standardtfpform.get('tfpammountmoisactuel').valueChanges,
).subscribe((res:any)=>{
  this.calculateResultForm35()
})
this.sub36=merge(
  
  this.standardfoprolosform.get('salairesnonsoumisfoprolos').valueChanges,
  this.standardfoprolosform.get('taux').valueChanges,
  this.standardfoprolosform.get('basefoprolos').valueChanges,
  
).subscribe((res:any)=>{
  this.calculateResultForm36()
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
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.totalretenueammount=+this.standardtraitementsalaireform.get('retenuesalary').value+ +this.standardtraitementsalaireform.get('solidaritycontribution').value
    + +this.standardlocationresidentesphysiqueform.get('retenueammount').value+ +this.standardlocationresidentesmoraleform.get('retenueammount').value
    + +this.standardlocationnonresidentesphysiquesform.get('retenueammount').value+ +this.standardlocationnonresidentesmoralesform.get('retenueammount').value
    + +this.standardhonorairephysiquereelform.get('retenueammount').value+ +this.standardhonorairephysiquenonreelform.get('retenueammount').value
    + +this.standardhonorairegroupementsform.get('retenueammount').value+ +this.standardmontant15form.get('retenueammount').value+
    this.standardmontant10form.get('retenueammount').value+ +this.standardmontantindividuelform.get('retenueammount').value+ +
    this.standardmontantautreform.get('retenueammount').value
  }
  closePopup() {
    this.displayStyle = "none";
  }

  get ammountControls() {
    return this.autreform.get('ammounts')['controls'];
  }
calculateResultForm1()
  {
    
    const brutammount=+this.standardlocationresidentesphysiqueform.get('brutammount').value
    const quotion=+this.standardlocationresidentesphysiqueform.get('quotion').value
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
    const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
    const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
    const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
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
    const retenueammount=+ ((brutammount*quotion).toFixed(3));
  const netammount=+ ((brutammount-retenueammount).toFixed(3));
  
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
      const retenueammount=+ (((+netammount*+quotion)/(1-+quotion)).toFixed(3));
      const brutammount=+ ((+netammount+ +retenueammount).toFixed(3))
      this.standardmontantautreform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardmontantautreform.updateValueAndValidity();
    
    
  }
  calculateResultForm23()
  {
  
    const brutsalary=+this.standardtraitementsalaireform.get('brutsalary').value
    const salairesnonsoumistfp=+this.standardtfpform.get('salairesnonsoumistfp').value
    const salairesnonsoumisfoprolos=+this.standardfoprolosform.get('salairesnonsoumisfoprolos').value
    const retenuesalary=+this.standardtraitementsalaireform.get('retenuesalary').value
    const imposalary=+this.standardtraitementsalaireform.get('imposalary').value
    const solidaritycontribution=+this.standardtraitementsalaireform.get('solidaritycontribution').value
    const basetfp=+ ((+brutsalary-+salairesnonsoumistfp).toFixed(3));
    const basefoprolos=+ ((+brutsalary-+salairesnonsoumisfoprolos).toFixed(3));
    if (retenuesalary>brutsalary||imposalary>brutsalary||solidaritycontribution>brutsalary)
    {this.standardtraitementsalaireform.patchValue({
      retenuesalary: '', 
        imposalary: '',
      solidaritycontribution:''},{emitEvent: false} 
      );}  
      this.standardtfpform.patchValue({basetfp:basetfp},{emitEvent: false})
      this.standardfoprolosform.patchValue({basefoprolos:basefoprolos},{emitEvent: false})
      this.standardtfpform.updateValueAndValidity();
      this.standardfoprolosform.updateValueAndValidity();
      this.standardtraitementsalaireform.updateValueAndValidity();
    
    
  }
  calculateResultForm24()
  {
  
    const chiffreaffaireht=+this.standardtvacollecteform.get('chiffreaffaireht').value
    const taux=+this.standardtvacollecteform.get('taux').value
    const taux2=+this.standardtclform.get('taux').value
    
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      const tclapayer=+ ((+ammountttc*+taux2).toFixed(3));
      this.standardtvacollecteform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc
        },{emitEvent: false} 
        );
      this.standardtvacollecteform.updateValueAndValidity();
      this.standardtclform.patchValue({
        
        chiffreaffairettc:ammountttc,tclapayer:tclapayer},{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
  }
  calculateResultForm25()
  {
  
    const chiffreaffaireht=+this.standardlocationusagehabitationmeubleform.get('ammountht').value
    const taux=+this.standardlocationusagehabitationmeubleform.get('taux').value
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      this.standardlocationusagehabitationmeubleform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardlocationusagehabitationmeubleform.updateValueAndValidity();
    
    
  }
  calculateResultForm26()
  {
  
    const chiffreaffaireht=+this.standardlocationusagecommercialform.get('ammountht').value
    const taux=+this.standardlocationusagecommercialform.get('taux').value
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      this.standardlocationusagecommercialform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardlocationusagecommercialform.updateValueAndValidity();
    
    
  }
  
  calculateResultForm30()
  {
  
    const chiffreaffaireht=+this.standardoperationlotissementform.get('ammountht').value
    const taux=+this.standardoperationlotissementform.get('taux').value
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      this.standardoperationlotissementform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardoperationlotissementform.updateValueAndValidity();
    
    
  }
  calculateResultForm31()
  {
  
    const chiffreaffaireht=+this.standardinteretpercueform.get('ammountht').value
    const taux=+this.standardinteretpercueform.get('taux').value
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      this.standardinteretpercueform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardinteretpercueform.updateValueAndValidity();
    
    
  }
  calculateResultForm32()
  {
  
    const chiffreaffaireht=+this.standardautretvaspecialform.get('ammountht').value
    const tauxpercent=+this.standardautretvaspecialform.get('tauxpercent').value
    
    if (tauxpercent>100)
    return (
      this.standardautretvaspecialform.patchValue({
     tauxpercent:'',
     tvaammount: '', 
     ammountttc:''},{emitEvent: false} 
      )) 
    const taux=+tauxpercent/100
    const tvaammount=+ ((+chiffreaffaireht*+taux).toFixed(3));
      const ammountttc=+ ((+tvaammount+ +chiffreaffaireht).toFixed(3))
      this.standardautretvaspecialform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc,taux: taux},{emitEvent: false} 
        );
      this.standardautretvaspecialform.updateValueAndValidity();
    
    
  }
  calculateResultForm33()
  {
  
    const nombrenotehonoraire=+this.standarddroittimbreform.get('nombrenotehonoraire').value
    const taux=+this.standarddroittimbreform.get('taux').value
    const totaldroittimbre=+ ((+nombrenotehonoraire* +taux).toFixed(3));
      this.standarddroittimbreform.patchValue({
        totaldroittimbre: totaldroittimbre,},{emitEvent: false} 
        );
      this.standarddroittimbreform.updateValueAndValidity();
    
    
  }
  calculateResultForm34()
  {
  
    const chiffreaffairettc=+this.standardtvacollecteform.get('ammountttc').value
    const chiffreaffairettcbis=+this.standardtclform.get('chiffreaffairettc').value
    const taux=+this.standardtclform.get('taux').value
    if (chiffreaffairettc)
    {
    const tclapayer=+ ((+chiffreaffairettc*+taux).toFixed(3));
  
      this.standardtclform.patchValue({
        tclapayer: tclapayer,
        },{emitEvent: false} 
        );
      }
    if (chiffreaffairettcbis)
      {
        const tclapayer=+ ((+chiffreaffairettcbis*+taux).toFixed(3));
  
      this.standardtclform.patchValue({
        tclapayer: tclapayer,
        },{emitEvent: false} 
        );
      }
      this.standardtclform.updateValueAndValidity();
    
    
  }
  calculateResultForm35()
  {
  
    const salairesbrutsrs=+this.standardtraitementsalaireform.get('brutsalary').value
    const taux=+this.standardtfpform.get('taux').value
    const salairesnonsoumistfp=+this.standardtfpform.get('salairesnonsoumistfp').value
    const reporttfpmoisprecedent=+this.standardtfpform.get('tfpammountreportmoisprecedent').value
    const basetfp=+ ((+salairesbrutsrs-+salairesnonsoumistfp).toFixed(3));
    const montanttfpmois=+ (+basetfp* +taux);
    const tfpapayer=+ ((+montanttfpmois-+reporttfpmoisprecedent).toFixed(3));
    const tfpareporter=+ ((+reporttfpmoisprecedent-+montanttfpmois).toFixed(3));
      this.standardtfpform.patchValue({
        basetfp: basetfp,
        tfpammountmoisactuel: montanttfpmois,
        tfpapayer: tfpapayer,
        tfpareporter:tfpareporter,
        },{emitEvent: false} 
        );
      this.standardtfpform.updateValueAndValidity();
    
    
  }
  calculateResultForm36()
  {
  
    const salairesbrutsrs=+this.standardtraitementsalaireform.get('brutsalary').value
    const taux=+this.standardfoprolosform.get('taux').value
    const salairesnonsoumisfoprolos=+this.standardfoprolosform.get('salairesnonsoumisfoprolos').value
    
    const basefoprolos=+ ((+salairesbrutsrs-+salairesnonsoumisfoprolos).toFixed(3));
    const montantfoprolos=+ (+basefoprolos* +taux);
    
      this.standardfoprolosform.patchValue({
        basefoprolos: basefoprolos,
        foprolosammount: montantfoprolos,
        
        },{emitEvent: false} 
        );
      this.standardfoprolosform.updateValueAndValidity();
    
    
  }
  restartform()
  {
    this.loading = true;
    this.standardlocationresidentesphysiqueform.controls['brutammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['netammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['retenueammount'].reset()
    this.standardlocationresidentesmoraleform.controls['brutammount'].reset()
    this.standardlocationresidentesmoraleform.controls['netammount'].reset()
    this.standardlocationresidentesmoraleform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['netammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['netammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['retenueammount'].reset()
    this.standardhonorairephysiquereelform.controls['brutammount'].reset()
    this.standardhonorairephysiquereelform.controls['netammount'].reset()
    this.standardhonorairephysiquereelform.controls['retenueammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['brutammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['netammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['retenueammount'].reset()
    this.standardhonorairegroupementsform.controls['brutammount'].reset()
    this.standardhonorairegroupementsform.controls['netammount'].reset()
    this.standardhonorairegroupementsform.controls['retenueammount'].reset()
    this.standardmontant15form.controls['brutammount'].reset()
    this.standardmontant15form.controls['netammount'].reset()
    this.standardmontant15form.controls['retenueammount'].reset()
    this.standardmontant10form.controls['brutammount'].reset()
    this.standardmontant10form.controls['netammount'].reset()
    this.standardmontant10form.controls['retenueammount'].reset()
    this.standardmontantindividuelform.controls['brutammount'].reset()
    this.standardmontantindividuelform.controls['netammount'].reset()
    this.standardmontantindividuelform.controls['retenueammount'].reset()
    this.standardmontantautreform.controls['brutammount'].reset()
    this.standardmontantautreform.controls['netammount'].reset()
    this.standardmontantautreform.controls['retenueammount'].reset()
    this.standardtraitementsalaireform.controls['brutsalary'].reset()
    this.standardtraitementsalaireform.controls['imposalary'].reset()
    this.standardtraitementsalaireform.controls['retenuesalary'].reset()
    this.standardtraitementsalaireform.controls['solidaritycontribution'].reset()
    this.resetfoprolosall()
    this.resettclall()
    this.resettfpall()
    this.resettimbreall()
    this.resettvaall()
    
  }
  onSubmit() {
    this.loading = true;
    
    const decfiscmens:Decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: '', traitementetsalaire: { salairebrut:'', salaireimposable: '', retenuealasource: '',contributionsociale: '', }, 
    location1: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },location2: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },
    location3: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },location4: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', },
     honoraire1: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, honoraire2: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},
     honoraire3: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},montant10001: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},
     montant10002: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',},montant10003: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, 
    montant10004: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, autre: { titre:'',montant:'',description:''}}
    decfiscmens.impottype2={ type: '',reporttvamoisprecedent:'',tvacollecter:{
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
                          }    }
                          decfiscmens.impottype3={ type:'',
                            basetfp:'',
                            montanttfpmois:'',
                            reporttfpmoisprecedent:'',
                            montantavance:'',
                            tfppayer:'',
                            tfpreporter:'',}
                            decfiscmens.impottype4={ type:'',
                            basefoprolos:'',
                            montantfoprolos:'',}
                            decfiscmens.impottype5={ type:'',
                            nombrenotehonoraire:'',
                totaldroittimbre:'',}
                decfiscmens.impottype6={ type:'',
                chiffreaffairettc:'',
                tclpayer:'',}
    decfiscmens.userId = this.currentUser.userId;
    decfiscmens.activite=this.user.activite;
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
    decfiscmens.annee=this.option54Value
    decfiscmens.mois=this.option171Value
    if (this.option48Value) 
    {
decfiscmens.impottype1.type='Retenue à la source'
decfiscmens.impottype1.traitementetsalaire.salairebrut=this.standardtraitementsalaireform.get('brutsalary').value
decfiscmens.impottype1.traitementetsalaire.salaireimposable=this.standardtraitementsalaireform.get('imposalary').value
decfiscmens.impottype1.traitementetsalaire.retenuealasource=this.standardtraitementsalaireform.get('retenuesalary').value
decfiscmens.impottype1.traitementetsalaire.contributionsociale=this.standardtraitementsalaireform.get('solidaritycontribution').value
if (this.standardlocationresidentesphysiqueform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location1.type='location, commission, courtage et vacation servis aux personnes résidentes personnes physiques'
decfiscmens.impottype1.location1.montantbrut=this.standardlocationresidentesphysiqueform.get('brutammount').value
decfiscmens.impottype1.location1.montantnet=this.standardlocationresidentesphysiqueform.get('netammount').value
decfiscmens.impottype1.location1.montantretenue=this.standardlocationresidentesphysiqueform.get('retenueammount').value
}
if (this.standardlocationresidentesmoraleform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location2.type='location, commission, courtage et vacation servis aux personnes résidentes personnes morales'
decfiscmens.impottype1.location2.montantbrut=this.standardlocationresidentesmoraleform.get('brutammount').value
decfiscmens.impottype1.location2.montantnet=this.standardlocationresidentesmoraleform.get('netammount').value
decfiscmens.impottype1.location2.montantretenue=this.standardlocationresidentesmoraleform.get('retenueammount').value
}
if (this.standardlocationnonresidentesphysiquesform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location3.type='location, commission, courtage et vacation servis aux personnes non résidentes personnes physiques'
decfiscmens.impottype1.location3.montantbrut=this.standardlocationnonresidentesphysiquesform.get('brutammount').value
decfiscmens.impottype1.location3.montantnet=this.standardlocationnonresidentesphysiquesform.get('netammount').value
decfiscmens.impottype1.location3.montantretenue=this.standardlocationnonresidentesphysiquesform.get('retenueammount').value
}
if (this.standardlocationnonresidentesmoralesform.get('brutammount').value!=='')
{
decfiscmens.impottype1.location4.type='location, commission, courtage et vacation servis aux personnes non résidentes personnes morales'
decfiscmens.impottype1.location4.montantbrut=this.standardlocationnonresidentesmoralesform.get('brutammount').value
decfiscmens.impottype1.location4.montantnet=this.standardlocationnonresidentesmoralesform.get('netammount').value
decfiscmens.impottype1.location4.montantretenue=this.standardlocationnonresidentesmoralesform.get('retenueammount').value
}
if (this.standardhonorairephysiquereelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire1.type='honoraire servis aux personnes physiques soumises au régime réel'
  decfiscmens.impottype1.honoraire1.montantbrut=this.standardhonorairephysiquereelform.get('brutammount').value
  decfiscmens.impottype1.honoraire1.montantnet=this.standardhonorairephysiquereelform.get('netammount').value
  decfiscmens.impottype1.honoraire1.montantretenue=this.standardhonorairephysiquereelform.get('retenueammount').value  
}
if (this.standardhonorairephysiquenonreelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire2.type='honoraire servis aux personnes physiques non soumises au régime réel'
  decfiscmens.impottype1.honoraire2.montantbrut=this.standardhonorairephysiquenonreelform.get('brutammount').value
  decfiscmens.impottype1.honoraire2.montantnet=this.standardhonorairephysiquenonreelform.get('netammount').value
  decfiscmens.impottype1.honoraire2.montantretenue=this.standardhonorairephysiquenonreelform.get('retenueammount').value  
}
if (this.standardhonorairegroupementsform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.honoraire3.type='honoraire servis aux sociétés et aux groupements'
  decfiscmens.impottype1.honoraire3.montantbrut=this.standardhonorairegroupementsform.get('brutammount').value
  decfiscmens.impottype1.honoraire3.montantnet=this.standardhonorairegroupementsform.get('netammount').value
  decfiscmens.impottype1.honoraire3.montantretenue=this.standardhonorairegroupementsform.get('retenueammount').value  
}
if (this.standardmontant15form.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant10001.type='Montants supérieurs à 1000dt établissements soumis à l\'i/s au taux de 15%'
  decfiscmens.impottype1.montant10001.montantbrut=this.standardmontant15form.get('brutammount').value
  decfiscmens.impottype1.montant10001.montantnet=this.standardmontant15form.get('netammount').value
  decfiscmens.impottype1.montant10001.montantretenue=this.standardmontant15form.get('retenueammount').value  
}
if (this.standardmontant10form.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant10002.type='Montants supérieurs à 1000dt établissements soumis à l\i/s au taux de 10%'
  decfiscmens.impottype1.montant10002.montantbrut=this.standardmontant10form.get('brutammount').value
  decfiscmens.impottype1.montant10002.montantnet=this.standardmontant10form.get('netammount').value
  decfiscmens.impottype1.montant10002.montantretenue=this.standardmontant10form.get('retenueammount').value  
}
if (this.standardmontantindividuelform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant10003.type='Montants supérieurs à 1000dt établissements individuels et éligible à la réduction des 2/3 des revenus'
  decfiscmens.impottype1.montant10003.montantbrut=this.standardmontantindividuelform.get('brutammount').value
  decfiscmens.impottype1.montant10003.montantnet=this.standardmontantindividuelform.get('netammount').value
  decfiscmens.impottype1.montant10003.montantretenue=this.standardmontantindividuelform.get('retenueammount').value  
}
if (this.standardmontantautreform.get('brutammount').value!=='')
{
  decfiscmens.impottype1.montant10004.type='Montants supérieurs à 1000dt autre établissements'
  decfiscmens.impottype1.montant10004.montantbrut=this.standardmontantautreform.get('brutammount').value
  decfiscmens.impottype1.montant10004.montantnet=this.standardmontantautreform.get('netammount').value
  decfiscmens.impottype1.montant10004.montantretenue=this.standardmontantautreform.get('retenueammount').value  
}
}
if(this.option51Value)
{
  decfiscmens.impottype2.type='TVA'
  decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
if (this.standardtvacollecteform.get('chiffreaffaireht').value!=='')
{
decfiscmens.impottype2.tvacollecter.type='TVA collecté'
decfiscmens.impottype2.tvacollecter.chiffreaffaireht=this.standardtvacollecteform.get('chiffreaffaireht').value
decfiscmens.impottype2.tvacollecter.tvaammount=this.standardtvacollecteform.get('tvaammount').value
decfiscmens.impottype2.tvacollecter.ammountttc=this.standardtvacollecteform.get('ammountttc').value
}
if (this.standardtvarecuperableautreachatform.get('achatlocauxht').value!=='')
{
decfiscmens.impottype2.tvarecuperableautreachat.type='TVA récupérable pour les autres achats'
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht=this.standardtvarecuperableautreachatform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva=this.standardtvarecuperableautreachatform.get('achatlocauxtva').value
decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht=this.standardtvarecuperableautreachatform.get('achatimporteht').value
decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva=this.standardtvarecuperableautreachatform.get('achatimportetva').value
}
if (this.standardtvarecuperableequipementform.get('achatlocauxht').value!=='')
{
decfiscmens.impottype2.tvarecuperableequipement.type='TVA récupérable pour les achats d\'équipements'
decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht=this.standardtvarecuperableequipementform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva=this.standardtvarecuperableequipementform.get('achatlocauxtva').value
decfiscmens.impottype2.tvarecuperableequipement.achatimporteht=this.standardtvarecuperableequipementform.get('achatimporteht').value
decfiscmens.impottype2.tvarecuperableequipement.achatimportetva=this.standardtvarecuperableequipementform.get('achatimportetva').value
}
if (this.standardtvarecuperableimmobilierform.get('achatlocauxht').value!=='')
{
decfiscmens.impottype2.tvarecuperableimmobilier.type='TVA récupérable pour les achats immobiliers'
decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht=this.standardtvarecuperableimmobilierform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva=this.standardtvarecuperableimmobilierform.get('achatlocauxtva').value
}
if (this.standardlocationusagehabitationmeubleform.get('ammountht').value!=='')
{
decfiscmens.impottype2.locationhabitationmeuble.type='TVA sur location à usage d\'habitation meublé'
decfiscmens.impottype2.locationhabitationmeuble.htammount=this.standardlocationusagehabitationmeubleform.get('ammountht').value
decfiscmens.impottype2.locationhabitationmeuble.tvaammount=this.standardlocationusagehabitationmeubleform.get('tvaammount').value
decfiscmens.impottype2.locationhabitationmeuble.ttcammount=this.standardlocationusagehabitationmeubleform.get('ammountttc').value
}
if (this.standardlocationusagecommercialform.get('ammountht').value!=='')
{
decfiscmens.impottype2.locationusagecommercial.type='TVA sur location à usage commercial, industriel, professionnel et artisanal'
decfiscmens.impottype2.locationusagecommercial.htammount=this.standardlocationusagecommercialform.get('ammountht').value
decfiscmens.impottype2.locationusagecommercial.tvaammount=this.standardlocationusagecommercialform.get('tvaammount').value
decfiscmens.impottype2.locationusagecommercial.ttcammount=this.standardlocationusagecommercialform.get('ammountttc').value
}
if (this.standardoperationlotissementform.get('ammountht').value!=='')
{
decfiscmens.impottype2.operationlotissement.type='TVA sur opérations de lotissement'
decfiscmens.impottype2.operationlotissement.htammount=this.standardoperationlotissementform.get('ammountht').value
decfiscmens.impottype2.operationlotissement.tvaammount=this.standardoperationlotissementform.get('tvaammount').value
decfiscmens.impottype2.operationlotissement.ttcammount=this.standardoperationlotissementform.get('ammountttc').value
}
if (this.standardinteretpercueform.get('ammountht').value!=='')
{
decfiscmens.impottype2.interetpercue.type='TVA sur intêrets percus'
decfiscmens.impottype2.interetpercue.htammount=this.standardinteretpercueform.get('ammountht').value
decfiscmens.impottype2.interetpercue.tvaammount=this.standardinteretpercueform.get('tvaammount').value
decfiscmens.impottype2.interetpercue.ttcammount=this.standardinteretpercueform.get('ammountttc').value
}
if (this.standardautretvaspecialform.get('ammountht').value!=='')
{
decfiscmens.impottype2.autretvaspecial.type='TVA sur autres revenus'
decfiscmens.impottype2.autretvaspecial.htammount=this.standardautretvaspecialform.get('ammountht').value
decfiscmens.impottype2.autretvaspecial.tvaammount=this.standardautretvaspecialform.get('tvaammount').value
decfiscmens.impottype2.autretvaspecial.ttcammount=this.standardautretvaspecialform.get('ammountttc').value
decfiscmens.impottype2.autretvaspecial.ttcammount=this.standardautretvaspecialform.get('ammountttc').value
}
}
if(this.option49Value)

{
  decfiscmens.impottype3.type='TFP'
  decfiscmens.impottype3.basetfp=this.standardtfpform.get('basetfp').value
  decfiscmens.impottype3.montantavance=this.standardtfpform.get('avanceammount').value
  decfiscmens.impottype3.montanttfpmois=this.standardtfpform.get('tfpammountmoisactuel').value
  decfiscmens.impottype3.reporttfpmoisprecedent=this.standardtfpform.get('tfpammountreportmoisprecedent').value
  decfiscmens.impottype3.tfppayer=this.standardtfpform.get('tfpapayer').value
  decfiscmens.impottype3.tfpreporter=this.standardtfpform.get('tfpareporter').value
}
if(this.option50Value)
{
  decfiscmens.impottype4.type='FOPROLOS'
  decfiscmens.impottype4.basefoprolos=this.standardfoprolosform.get('basefoprolos').value
  decfiscmens.impottype4.montantfoprolos=this.standardfoprolosform.get('foprolosammount').value
}

if(this.option52Value)
{
  decfiscmens.impottype5.type='Droit de timbre'
  decfiscmens.impottype5.nombrenotehonoraire=this.standarddroittimbreform.get('nombrenotehonoraire').value
  decfiscmens.impottype5.totaldroittimbre=this.standarddroittimbreform.get('totaldroittimbre').value
}
if(this.option53Value)
{
  decfiscmens.impottype6.type='TCL'
  decfiscmens.impottype6.chiffreaffairettc=this.standardtclform.get('chiffreaffairettc').value
  decfiscmens.impottype6.tclpayer=this.standardtclform.get('tclapayer').value
}

this.DecfiscmensService.create(decfiscmens).then(
  (data:any) => {
    
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
  update(e){
    this.selected = e.target.value
    if(this.selected=='location, commission, courtage et vacation')
    {this.standardlocationresidentesphysiqueform.controls['brutammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['netammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['retenueammount'].reset()
    this.standardlocationresidentesmoraleform.controls['brutammount'].reset()
    this.standardlocationresidentesmoraleform.controls['netammount'].reset()
    this.standardlocationresidentesmoraleform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['netammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['netammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['retenueammount'].reset()}
    else if(this.selected=='traitement et salaires')
    {this.standardtraitementsalaireform.controls['brutsalary'].reset()
    this.standardtraitementsalaireform.controls['imposalary'].reset()
    this.standardtraitementsalaireform.controls['retenuesalary'].reset()
    this.standardtraitementsalaireform.controls['solidaritycontribution'].reset()

    }
    else if (this.selected=='honoraire')
    {this.standardhonorairephysiquereelform.controls['brutammount'].reset()
    this.standardhonorairephysiquereelform.controls['netammount'].reset()
    this.standardhonorairephysiquereelform.controls['retenueammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['brutammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['netammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['retenueammount'].reset()
    this.standardhonorairegroupementsform.controls['brutammount'].reset()
    this.standardhonorairegroupementsform.controls['netammount'].reset()
    this.standardhonorairegroupementsform.controls['retenueammount'].reset()}
    else if (this.selected=='TVA collecté')
    {this.resettvaall()}
    else
    {this.standardmontant15form.controls['brutammount'].reset()
    this.standardmontant15form.controls['netammount'].reset()
    this.standardmontant15form.controls['retenueammount'].reset()
    this.standardmontant10form.controls['brutammount'].reset()
    this.standardmontant10form.controls['netammount'].reset()
    this.standardmontant10form.controls['retenueammount'].reset()
    this.standardmontantindividuelform.controls['brutammount'].reset()
    this.standardmontantindividuelform.controls['netammount'].reset()
    this.standardmontantindividuelform.controls['retenueammount'].reset()
    this.standardmontantautreform.controls['brutammount'].reset()
    this.standardmontantautreform.controls['netammount'].reset()
    this.standardmontantautreform.controls['retenueammount'].reset()}
    
    
    
  }
  resetretenuealasourceall(){
    
    this.standardlocationresidentesphysiqueform.controls['brutammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['netammount'].reset()
    this.standardlocationresidentesphysiqueform.controls['retenueammount'].reset()
    this.standardlocationresidentesmoraleform.controls['brutammount'].reset()
    this.standardlocationresidentesmoraleform.controls['netammount'].reset()
    this.standardlocationresidentesmoraleform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['netammount'].reset()
    this.standardlocationnonresidentesmoralesform.controls['retenueammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['brutammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['netammount'].reset()
    this.standardlocationnonresidentesphysiquesform.controls['retenueammount'].reset()
    
    this.standardtraitementsalaireform.controls['brutsalary'].reset()
    this.standardtraitementsalaireform.controls['imposalary'].reset()
    this.standardtraitementsalaireform.controls['retenuesalary'].reset()
    this.standardtraitementsalaireform.controls['solidaritycontribution'].reset()

    this.standardhonorairephysiquereelform.controls['brutammount'].reset()
    this.standardhonorairephysiquereelform.controls['netammount'].reset()
    this.standardhonorairephysiquereelform.controls['retenueammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['brutammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['netammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['retenueammount'].reset()
    this.standardhonorairegroupementsform.controls['brutammount'].reset()
    this.standardhonorairegroupementsform.controls['netammount'].reset()
    this.standardhonorairegroupementsform.controls['retenueammount'].reset()
    this.standardmontant15form.controls['brutammount'].reset()
    this.standardmontant15form.controls['netammount'].reset()
    this.standardmontant15form.controls['retenueammount'].reset()
    this.standardmontant10form.controls['brutammount'].reset()
    this.standardmontant10form.controls['netammount'].reset()
    this.standardmontant10form.controls['retenueammount'].reset()
    this.standardmontantindividuelform.controls['brutammount'].reset()
    this.standardmontantindividuelform.controls['netammount'].reset()
    this.standardmontantindividuelform.controls['retenueammount'].reset()
    this.standardmontantautreform.controls['brutammount'].reset()
    this.standardmontantautreform.controls['netammount'].reset()
    this.standardmontantautreform.controls['retenueammount'].reset()
  }
  resettfpall(){
    this.standardtfpform.controls['basetfp'].reset()
    this.standardtfpform.controls['avanceammount'].reset()
    this.standardtfpform.controls['tfpapayer'].reset()
    this.standardtfpform.controls['salairesnonsoumistfp'].reset()
    this.standardtfpform.controls['tfpammountmoisactuel'].reset()
    this.standardtfpform.controls['tfpammountreportmoisprecedent'].reset()
    this.standardtfpform.controls['tfpareporter'].reset()
  }
  resetfoprolosall(){
    this.standardfoprolosform.controls['basefoprolos'].reset()
    this.standardfoprolosform.controls['salairesnonsoumisfoprolos'].reset()
    this.standardfoprolosform.controls['foprolosammount'].reset()
    
  }
  resettimbreall(){

  }
  resettclall(){

  }
  resettvaall(){
    this.standardtvacollecteform.controls['chiffreaffaireht'].reset()
    this.standardtvacollecteform.controls['tvaammount'].reset()
    this.standardtvacollecteform.controls['ammountttc'].reset()
    this.standardlocationusagehabitationmeubleform.controls['ammountht'].reset()
    this.standardlocationusagehabitationmeubleform.controls['tvaammount'].reset()
    this.standardlocationusagehabitationmeubleform.controls['ammountttc'].reset()
    this.standardlocationusagecommercialform.controls['ammountht'].reset()
    this.standardlocationusagecommercialform.controls['tvaammount'].reset()
    this.standardlocationusagecommercialform.controls['ammountttc'].reset()
    this.standardoperationlotissementform.controls['ammountht'].reset()
    this.standardoperationlotissementform.controls['tvaammount'].reset()
    this.standardoperationlotissementform.controls['ammountttc'].reset()
    this.standardinteretpercueform.controls['ammountht'].reset()
    this.standardinteretpercueform.controls['tvaammount'].reset()
    this.standardinteretpercueform.controls['ammountttc'].reset()
    this.standardautretvaspecialform.controls['ammountht'].reset()
    this.standardautretvaspecialform.controls['tvaammount'].reset()
    this.standardautretvaspecialform.controls['ammountttc'].reset()
    this.standardtvarecuperableimmobilierform.controls['achatlocauxht'].reset()
    this.standardtvarecuperableimmobilierform.controls['achatlocauxtva'].reset()
    this.standardtvarecuperableequipementform.controls['achatlocauxht'].reset()
    this.standardtvarecuperableequipementform.controls['achatlocauxtva'].reset()
    this.standardtvarecuperableequipementform.controls['achatimporteht'].reset()
    this.standardtvarecuperableequipementform.controls['achatimportetva'].reset()
    this.standardtvarecuperableautreachatform.controls['achatlocauxht'].reset()
    this.standardtvarecuperableautreachatform.controls['achatlocauxtva'].reset()
    this.standardtvarecuperableautreachatform.controls['achatimporteht'].reset()
    this.standardtvarecuperableautreachatform.controls['achatimportetva'].reset()
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
  findfiltredchoices(choices: any[]): any[] {
    if ((this.option5Value==this.option58Value)||(this.option5Value==this.option61Value)){
    return choices.filter(p => p!==this.option5Value)}
    else if (this.option61Value==this.option58Value)
    {
      return choices.filter(p => p!==this.option61Value)};
  }
  findfiltredchoices2(choices: any[]): any[] {
    if ((this.option12Value==this.option76Value)||(this.option12Value==this.option80Value)){
    return choices.filter(p => p!==this.option12Value)}
    else if (this.option76Value==this.option80Value)
    {
      return choices.filter(p => p!==this.option76Value)};
  }
  findfiltredchoices3(choices: any[]): any[] {
    if ((this.option20Value==this.option88Value)||(this.option20Value==this.option92Value)){
    return choices.filter(p => p!==this.option20Value)}
    else if (this.option88Value==this.option92Value)
    {
      return choices.filter(p => p!==this.option88Value)};
  }
  findfiltredchoices4(choices: any[]): any[] {
    if ((this.option31Value==this.option100Value)||(this.option31Value==this.option104Value)){
    return choices.filter(p => p!==this.option31Value)}
    else if (this.option100Value==this.option104Value)
    {
      return choices.filter(p => p!==this.option100Value)};
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
        this.option48Value=true;
      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt retenue à la source, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetretenuealasourceall();
            this.showretenuetab=false;
            this.option48Value=false
          }
          else{
            checkbox.checked = true
            this.option48Value=true
          }
  
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
         
      }
    }
    myFunction9() {
      var checkbox:any = document.getElementById("myCheck9");
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        text2.style.display = "block";
        
        this.showtfptab=true;
        this.option49Value=true;
      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt TFP, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resettfpall();
            this.showtfptab=false;
            this.option49Value=false;

          }
          else{
            checkbox.checked = true
            this.option49Value=true;

          }
  
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
        
      }
    }
    myFunction10() {
      var checkbox:any = document.getElementById("myCheck10");
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        text2.style.display = "block";
        
        this.showfoprolostab=true;
        this.option50Value=true;

      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt FOPROLOS, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetfoprolosall();
            this.showfoprolostab=false;
            this.option50Value=false;

          }
          else{
            checkbox.checked = true
            this.option50Value=true;

          }
  
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
         
      }
    }
    myFunction11() {
      var checkbox:any = document.getElementById("myCheck11");
      var text2 = document.getElementById("tabcontainer");
     
      if (checkbox.checked == true){
        text2.style.display = "block";
        
        this.showtvatab=true;
        this.option51Value=true;

      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt TVA, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resettvaall();
            this.showtvatab=false;
            this.option51Value=false;

          }
          else{
            checkbox.checked = true
            this.option51Value=true;

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
      
      }
    }
    myFunction12() {
      var checkbox:any = document.getElementById("myCheck12");
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        text2.style.display = "block";
        
        this.showtimbretab=true;
        this.option52Value=true;

      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt droit de timbre, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resettimbreall();
            this.showtimbretab=false;
            this.option52Value=false;

          }
          else{
            checkbox.checked = true
            this.option52Value=true;

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
         
      }
    }
    myFunction13() {
      var checkbox:any = document.getElementById("myCheck13");
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        text2.style.display = "block";
        
        this.showtcltab=true;
        this.option53Value=true;

      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt TCL, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resettclall();
            this.showtcltab=false;
            this.option53Value=false;

          }
          else{
            checkbox.checked = true
            this.option53Value=true
          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
        
         

      }
    }
    myFunction14() {
      var checkbox:any = document.getElementById("choice");
      var text2 = document.getElementById("block2");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt Retenue à la source, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            

            this.resetretenuealasourceall()
            text2.style.display = "block";
          }
          else{
            checkbox.checked = true
            this.option4Value=true

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
      }
    }
    myFunction15() {
      var checkbox:any = document.getElementById("choice1");
      var text2 = document.getElementById("block1");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        text2.style.display = "block";
      }
    }
    myFunction16() {
      var checkbox:any = document.getElementById("choice2");
      var text2 = document.getElementById("block4");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt Retenue à la source, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetretenuealasourceall()
            text2.style.display = "block";
          }
          else{
            checkbox.checked = true
            this.option18Value=true

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });

      }
    }
    myFunction17() {
      var checkbox:any = document.getElementById("choice3");
      var text2 = document.getElementById("block3");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        text2.style.display = "block";
      }
    }
    myFunction18() {
      var checkbox:any = document.getElementById("choice4");
      var text2 = document.getElementById("block6");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt Retenue à la source, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetretenuealasourceall()
            text2.style.display = "block";
          }
          else{
            checkbox.checked = true
            this.option27Value=true

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });

      }
    }
    myFunction19() {
      var checkbox:any = document.getElementById("choice5");
      var text2 = document.getElementById("block5");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        text2.style.display = "block";
      }
    }
    myFunction20() {
      var checkbox:any = document.getElementById("choice6");
      var text2 = document.getElementById("block8");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt Retenue à la source, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetretenuealasourceall()
            text2.style.display = "block";
          }
          else{
            checkbox.checked = true
            this.option38Value=true

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });

      }
    }
    myFunction21() {
      var checkbox:any = document.getElementById("choice7");
      var text2 = document.getElementById("block7");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        text2.style.display = "block";
      }
    }
    myFunction22() {
      var checkbox:any = document.getElementById("choice8");
      var text2 = document.getElementById("block10");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt TVA, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resettvaall()
            text2.style.display = "block";
          }
          else{
            checkbox.checked = true
            this.option170Value=true

          }
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });

      }
    }
    myFunction23() {
      var checkbox:any = document.getElementById("choice9");
      var text2 = document.getElementById("block9");
     
      if (checkbox.checked == true){
        text2.style.display = "none";
        
        
      } else {
         
        text2.style.display = "block";
      }
    }
}


  