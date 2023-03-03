import { Component, OnInit, OnDestroy, HostListener, Injectable } from '@angular/core';
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
import { ComponentCanDeactivate  } from '../services/component-can-deactivate';
@Component({
  selector: 'app-declare-fiscality',
  templateUrl: './declare-fiscality.component.html',
  styleUrls: ['./declare-fiscality.component.scss']
})

export class DeclareFiscalityComponent extends ComponentCanDeactivate implements OnInit,OnDestroy  {
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
  tauxtva:any;
  decfiscmens:Decfiscmens;
  decfiscmens1:Decfiscmens[];
  chosenmois:any
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
  standardfspform: FormGroup;
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
  option48Value=true;
  option49Value=true;
  option50Value=true;
  option51Value=true;
  option52Value=true;
  option53Value=true;
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
  option64Value='';
  option65Value=false;
  option66Value=false;
  option67Value=false;
  option68Value=false;
  option69Value=false;
  option70Value=false;
  option71Value=0.000;
  option72Value=0.000;
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
  option172Value=false;
  option173Value=false;
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
  sub37:Subscription;
  sub38:Subscription;
  sub39:Subscription;
  sub40:Subscription;
  sub41:Subscription;
  sub42:Subscription;
  sub43:Subscription;
  sub44:Subscription;
  selectedTab: number = 0;
  autretva: Array<string> = ['location à usage d\'habitation meublé', 'location à usage commercial', 'location à usage industriel', 'location à usage professionnel',
'location à usage artisanal','opérations de lotissement','intérêts perçus'];
  retenues: Array<string> = ['traitements et salaires','loyers, commissions, courtages et vacations',  'honoraires', 'montants supérieurs à 1000 dt', 'Autre'];
  choices: Array<string> = ['servis aux personnes non résidentes',  'servis aux personnes résidentes'];
  selected = "----"
  showretenuetab=false;
  showtfptab=false;
  showfoprolostab=false;
  showtvatab=false;
  showtimbretab=false;
  showtcltab=false;
  showfsptab=false;
  showretenueverif=false;
  showtfpverif=false;
  showfoprolosverif=false;
  showtvaverif=false;
  showtimbreverif=false;
  showtclverif=false;
  showfspverif=false;
  showtfpsalairebrut=false;
  showfoprolossalairebrut=false;

  autreform: FormGroup;
  foprolosapayer=0.000
  tfpapayer=0.000
  tfpareporter=0.000
  totalretenueammount=0;
  totaltfpammount=0;
  totalfoprolosammount=0;
  totalreporttvaammount=0;
  preptotaltvaammount=0;
  totaltvaammount=0;
  totaltimbreammount=0;
  totaltclammount=0;
  totalfspammount=0;
  totaldeclaration=0;
  minimumperceptionammount=0;
  preptotaldeclaration=0;
  prepminimumperceptionammount=0.000;
  tvacollecte=0.000
  tvacollecte1=0.000
  tvacollecte2=0.000
  tvacollecte3=0.000
  tvacollecte4=0.000
  tvacollecte5=0.000
  tvacollecte6=0.000
  tvarecuperable=0.000

  public ammounts: FormArray;
  tauxdt: number;
  specialite: string;
  standardtvacollecte19form: FormGroup;
  sub45: Subscription;
  ammountttc=0.000;
  fspammount=0.000;
  tclammount= 0.000;
  ammounttc19=0.000;
  fspammount19=0.000;
  tvacollecte119=0.000;
  chiffreaffaireht=0.000;
  tclammount19= 0.000;
  chiffreaffaireht19=0.000;
  currentdate=new Date()
  date1=new Date('04.01.2023')
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,
    private alertService: AlertService,private usersservice: UserService,private DecfiscmensService :DecfiscmensService,private fb: FormBuilder) {
    super();
      this.autreform = this.fb.group({
        ammounts: this.fb.array([ this.createammount() ])
     });
    }
  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();      
    }
    else return (
      this.token.saved=true,
      this.router.navigate(['login']));  
    this.tauxdt=0.600        
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
              if(this.activite=='Avocat'||this.activite=='Architectes'||this.activite=='Syndic des copropriétaires'||this.activite=='Ingénieurs-conseil'||this.activite=='Dessinateurs'||this.activite=='Géomètres'||
              this.activite=='Topographes'||this.activite=='Notaire'||this.activite=='Huissiers notaire'||this.activite=='Interprètes'||this.activite=='Expert')
              {
                this.tauxtva='0.13'
                this.option172Value==false
              }
              if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
              this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
              ||this.activite=='Sage-femmes')
              {
                this.tauxtva='0.07'
                this.option172Value=true
              }
              if(this.activite=='Consultant')
              {
                this.tauxtva='0.19'
                this.option172Value==false
              }
            
              console.log(this.tauxtva)
      
              
      
         if (user.regimefiscalimpot==='Réel')  
         {
          this.prepminimumperceptionammount=10.000
         }  
         else if (user.regimefiscalimpot==='Forfait D\'assiette') 
         {
          this.prepminimumperceptionammount=5.000
  
         }
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
          taux: [{value:this.tauxtva,disabled:true}],
          tvaammount: [{value:"",disabled:true}],
          ammountttc: '',
        });
        this.standardtvacollecte19form =this.fb.group({
          chiffreaffaireht: '',
          taux: [{value:"0.19",disabled:true}],
          tvaammount: [{value:"",disabled:true}],
          ammountttc: '',
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
          ammountttc: '',
        });
        this.standardlocationusagecommercialform =this.fb.group({
          ammountht: '',
          taux: [{value:"0.19",disabled:true}],
          tvaammount: [{value:"",disabled:true}],
          ammountttc: '',
        });
        
        this.standardoperationlotissementform =this.fb.group({
          ammountht: '',
          taux: [{value:"0.19",disabled:true}],
          tvaammount: [{value:"",disabled:true}],
          ammountttc:'',
        });
        this.standardinteretpercueform =this.fb.group({
          ammountht: '',
          taux: [{value:"0.19",disabled:true}],
          tvaammount: [{value:"",disabled:true}],
          ammountttc: '',
        });
        this.standardautretvaspecialform =this.fb.group({
          ammountht: '',
          tauxpercent: '',
          taux: '',
          tvaammount: [{value:"",disabled:true}],
          ammountttc: '',
        });
        this.standardtfpform =this.fb.group({
          basetfp: [{value:"",disabled:true}],
          taux: [{value:"0.02",disabled:true}],
          avanceammount: '',
          tfpsalairebrut: '',
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
          foprolossalairebrut: '',
    
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
        this.standardfspform =this.fb.group({
          chiffreaffaireht: [{value:"",disabled:true}],
          taux: [{value:"0.01",disabled:true}],
          montantcontribution: [{value:"",disabled:true}],
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
    this.sub38=merge(
      
      this.standardtvacollecteform.get('ammountttc').valueChanges,
      this.standardtvacollecteform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm38()
    })
    this.sub44=merge(
      
      this.standardtvacollecte19form.get('chiffreaffaireht').valueChanges,
      this.standardtvacollecte19form.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm44()
    })
    this.sub45=merge(
      
      this.standardtvacollecte19form.get('ammountttc').valueChanges,
      this.standardtvacollecte19form.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm45()
    })
    this.sub25=merge(
      
      this.standardlocationusagehabitationmeubleform.get('ammountht').valueChanges,
      this.standardlocationusagehabitationmeubleform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm25()
    })
    this.sub39=merge(
      
      this.standardlocationusagehabitationmeubleform.get('ammountttc').valueChanges,
      this.standardlocationusagehabitationmeubleform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm39()
    })
    this.sub26=merge(
      
      this.standardlocationusagecommercialform.get('ammountht').valueChanges,
      this.standardlocationusagecommercialform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm26()
    })
    this.sub40=merge(
      
      this.standardlocationusagecommercialform.get('ammountttc').valueChanges,
      this.standardlocationusagecommercialform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm40()
    })
    this.sub30=merge(
      
      this.standardoperationlotissementform.get('ammountht').valueChanges,
      this.standardoperationlotissementform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm30()
    })
    this.sub41=merge(
      
      this.standardoperationlotissementform.get('ammountttc').valueChanges,
      this.standardoperationlotissementform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm41()
    })
    this.sub31=merge(
      
      this.standardinteretpercueform.get('ammountht').valueChanges,
      this.standardinteretpercueform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm31()
    })
    this.sub42=merge(
      
      this.standardinteretpercueform.get('ammountttc').valueChanges,
      this.standardinteretpercueform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm42()
    })
    this.sub32=merge(
      
      this.standardautretvaspecialform.get('ammountht').valueChanges,
      this.standardautretvaspecialform.get('tauxpercent').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm32()
    })
    this.sub43=merge(
      
      this.standardautretvaspecialform.get('ammountttc').valueChanges,
      this.standardautretvaspecialform.get('tauxpercent').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm43()
    })
    this.sub33=merge(
      
      this.standarddroittimbreform.get('nombrenotehonoraire').valueChanges,
      this.standarddroittimbreform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm33()
    })
    this.sub37=merge(
      
      this.standarddroittimbreform.get('totaldroittimbre').valueChanges,
      this.standarddroittimbreform.get('taux').valueChanges,
      
      
    ).subscribe((res:any)=>{
      this.calculateResultForm37()
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
      this.standardtfpform.get('tfpsalairebrut').valueChanges,
      this.standardtfpform.get('tfpammountmoisactuel').valueChanges,
    ).subscribe((res:any)=>{
      this.calculateResultForm35()
    })
    this.sub36=merge(
      
      this.standardfoprolosform.get('salairesnonsoumisfoprolos').valueChanges,
      this.standardfoprolosform.get('foprolossalairebrut').valueChanges,
      this.standardfoprolosform.get('taux').valueChanges,
      this.standardfoprolosform.get('basefoprolos').valueChanges,
      
    ).subscribe((res:any)=>{
      this.calculateResultForm36()
    })
    if (user.usertype !='Client') 
    return (this.token.saved=true,Swal.fire({
      title: 'fonctionnalité non disponible pour ce type d\'utilisateur',
      icon: 'info',
      confirmButtonColor: '#3085d6',
    }),this.router.navigate(['home']))
      if (!user.natureactivite || user.natureactivite=='Autre/null' || !user.activite || user.activite=='Autre/null'
      || user.regimefiscalimpot=='Autre/null'|| !user.dateeffet
      || !user.regimefiscalimpot || user.matriculefiscale.length<17) 
      return (console.log(this.token.saved=true,this.token.saved),this.router.navigate(['complete-profil/'+this.currentUser.userId]))
      if ( !user.ficheUrl) 
      return (console.log(this.token.saved=true,this.token.saved),this.router.navigate(['modify-user/'+this.currentUser.userId]))
      /*if (user.regimefiscalimpot=='Réel')
      {
        Swal.fire({
          title: 'Votre régime fiscale en matière d\'impôts directs est le régime réel. Voulez vous établir votre déclaration à travers le module comptabilité?',
          
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmer',
          cancelButtonText: 'continuer avec ce module',
        }).then((result) => {
          if (result.value) {
            
            this.router.navigate(['declare-comptabilite']);
          }
  
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        });
      }*/
     
      this.DecfiscmensService.getdecfiscmens(this.currentUser.userId).then(
        (decfiscmens: Decfiscmens[]) => {
        }
      )
      
            }
          )
    
   
  
            
   
  }
  displayStyle = "none";
  
canDeactivate():boolean {  
    
  if(this.token.saved)
  {
    return true;
  }
  return false;
} 
  
  setThreeNumberDecimal($event) {
    $event.target.value = $event.target.value ? $event.target.value : 0;
    $event.target.value = parseFloat($event.target.value).toFixed(3);
  }
  
  openPopup() {
    this.displayStyle = "block";
    console.log(this.tauxtva)
if (this.option48Value)
{
  this.totalretenueammount=+this.standardtraitementsalaireform.get('retenuesalary').value+ +this.standardtraitementsalaireform.get('solidaritycontribution').value
  + +this.standardlocationresidentesphysiqueform.get('retenueammount').value+ +this.standardlocationresidentesmoraleform.get('retenueammount').value
  + +this.standardlocationnonresidentesphysiquesform.get('retenueammount').value+ +this.standardlocationnonresidentesmoralesform.get('retenueammount').value
  +  +this.standardhonorairephysiquenonreelform.get('retenueammount').value
  +Math.trunc(( ((+this.standardhonorairegroupementsform.get('brutammount').value+ +this.standardhonorairephysiquereelform.get('brutammount').value) *0.03))*1000)/1000 +this.standardmontant15form.get('retenueammount').value+
  this.standardmontant10form.get('retenueammount').value+ +this.standardmontantindividuelform.get('retenueammount').value+ +
  this.standardmontantautreform.get('retenueammount').value
  console.log(this.totalretenueammount)
}
else if (!this.option48Value)
{
  this.totalretenueammount=0
}    
if (this.option51Value)
{
  this.tvarecuperable=+this.standardtvarecuperableautreachatform.get('achatlocauxtva').value+ +this.standardtvarecuperableautreachatform.get('achatimportetva').value+ 
  +this.standardtvarecuperableequipementform.get('achatlocauxtva').value+ +this.standardtvarecuperableequipementform.get('achatimportetva').value+ 
  +this.standardtvarecuperableimmobilierform.get('achatlocauxtva').value
  this.tvacollecte=this.tvacollecte1+this.tvacollecte119+this.option72Value
  this.preptotaltvaammount=this.tvacollecte-this.tvarecuperable
  console.log(this.tvacollecte)
  console.log(this.preptotaltvaammount)
  console.log(this.option64Value)

  if (this.preptotaltvaammount >= 0 && this.preptotaltvaammount-+this.option64Value>=0)
  {
    this.totaltvaammount=this.preptotaltvaammount-+this.option64Value
    this.totalreporttvaammount=0.000

  }
  else 
  {
  this.totaltvaammount=0
  this.totalreporttvaammount=+this.option64Value-this.preptotaltvaammount
  console.log('2')

  }
}   
else if (!this.option51Value)
{
  this.totaltvaammount=0
  this.totalreporttvaammount=0
}
if (this.option50Value)
{
  this.totalfoprolosammount=this.foprolosapayer
}
else if (!this.option50Value)
{
  this.totalfoprolosammount=0
}
    if (this.option49Value)
    {
      if (this.tfpapayer >= 0)
      {
      this.totaltfpammount= this.tfpapayer
      } 
      else 
      {
        this.totaltfpammount= 0
      }
    }
    else if (!this.option49Value)
    {
      this.totaltfpammount=0
    }
    if (!this.option52Value)
    {
    this.totaltimbreammount=0
    }
    if (!this.option53Value)
    {
    this.totaltclammount=0
    } 
    if (!this.option172Value)
    {
    this.totalfspammount=0
    }     
this.preptotaldeclaration=+this.totalretenueammount+ +this.totaltfpammount+ +this.totalfoprolosammount+ +this.totaltvaammount+ +this.totaltimbreammount+ +this.totaltclammount
+ +this.totalfspammount
if(this.totalreporttvaammount!=0&&+this.totalretenueammount==0&&+this.totaltfpammount==0&&+this.totalfoprolosammount==0
  &&+this.totaltimbreammount==0&&+this.totaltclammount==0&&+this.totalfspammount==0)
{
  console.log('here')
  this.prepminimumperceptionammount=0.000
}
else
{
  if (this.user.regimefiscalimpot==='Réel'&&this.currentdate>=this.date1)  
  {
   console.log(this.date1,this.currentdate) 
   this.prepminimumperceptionammount=20.000
  }  
  else if (this.user.regimefiscalimpot==='Forfait D\'assiette'&&this.currentdate>=this.date1) 
  {
    console.log(this.date1,this.currentdate) 
   this.prepminimumperceptionammount=10.000

  }
  else if (this.user.regimefiscalimpot==='Réel'&&this.date1>=this.currentdate)  
  {
    console.log(this.date1,this.currentdate) 
   this.prepminimumperceptionammount=10.000
  }  
  else if (this.user.regimefiscalimpot==='Forfait D\'assiette'&&this.date1>=this.currentdate) 
  {
    console.log(this.date1,this.currentdate) 
   this.prepminimumperceptionammount=5.000

  }
}
if (this.preptotaldeclaration- this.prepminimumperceptionammount <= 0)

{
  this.totaldeclaration=this.prepminimumperceptionammount
  this.minimumperceptionammount=this.prepminimumperceptionammount-this.preptotaldeclaration

} 
else 
{
  this.totaldeclaration=this.preptotaldeclaration
  this.minimumperceptionammount=0.000

}
console.log(this.ammounts);
console.log(this.standardtraitementsalaireform.get('brutsalary').value);


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
    const retenueammount=+Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
      this.standardlocationnonresidentesmoralesform.patchValue({
        retenueammount: retenueammount, 
          brutammount: brutammount},{emitEvent: false} 
        );
      this.standardlocationnonresidentesmoralesform.updateValueAndValidity();
    
    
  }
  calculateResultForm9()
  {
    console.log(this.standardhonorairephysiquereelform.get('brutammount').value)
    console.log(this.standardhonorairephysiquereelform.get('netammount').value)
    const brutammount= +this.standardhonorairephysiquereelform.get('brutammount').value
    const quotion= +this.standardhonorairephysiquereelform.get('quotion').value
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
    this.standardhonorairephysiquereelform.patchValue({
      retenueammount: retenueammount, 
        netammount: netammount},{emitEvent: false} 
        );
      this.standardhonorairephysiquereelform.updateValueAndValidity();
    
  }
  calculateResultForm10()
  {
    console.log(this.standardhonorairephysiquereelform.get('brutammount').value)
    console.log(this.standardhonorairephysiquereelform.get('netammount').value)
    const netammount= +this.standardhonorairephysiquereelform.get('netammount').value
      const quotion= +this.standardhonorairephysiquereelform.get('quotion').value
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
    const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const retenueammount=+ Math.trunc((brutammount*quotion)*1000)/1000;
  const netammount=+ Math.trunc((brutammount-retenueammount)*1000)/1000;
  
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
      const retenueammount=+ Math.trunc(((+netammount*+quotion)/(1-+quotion))*1000)/1000;
      const brutammount=+ Math.trunc((+netammount+ +retenueammount)*1000)/1000
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
    const tauxtfp=+this.standardtfpform.get('taux').value
    const tauxfoprolos=+this.standardfoprolosform.get('taux').value
    const reporttfpmoisprecedent=+this.standardtfpform.get('tfpammountreportmoisprecedent').value

    const salairesnonsoumisfoprolos=+this.standardfoprolosform.get('salairesnonsoumisfoprolos').value
    const retenuesalary=+this.standardtraitementsalaireform.get('retenuesalary').value
    const imposalary=+this.standardtraitementsalaireform.get('imposalary').value
    const solidaritycontribution=+this.standardtraitementsalaireform.get('solidaritycontribution').value
    const basetfp=+ Math.trunc((+brutsalary-+salairesnonsoumistfp)*1000)/1000;
    const basefoprolos=+ Math.trunc((+brutsalary-+salairesnonsoumisfoprolos)*1000)/1000;
    this.foprolosapayer=+ Math.trunc((+basefoprolos * +tauxfoprolos)*1000)/1000;
    const tfpammountmoisactuel=+ Math.trunc((+basetfp*+tauxtfp)*1000)/1000;
    this.tfpapayer=+ Math.trunc((+tfpammountmoisactuel-+reporttfpmoisprecedent)*1000)/1000;
    this.tfpareporter=+ Math.trunc((+reporttfpmoisprecedent-+tfpammountmoisactuel)*1000)/1000;
    
    if (imposalary>brutsalary)
    {
      Swal.fire({
      title: 'une incohorence a été détectée. veuillez vérifier les montants introduits',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => 
    {this.standardtraitementsalaireform.patchValue({

      brutsalary: '',
      imposalary: '',},{emitEvent: false} 
      );
      this.standardtraitementsalaireform.updateValueAndValidity();
      this.resettfpall()
      this.resetfoprolosall()
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    })
      }
      if(imposalary!==0)
      {
      if (retenuesalary+solidaritycontribution > imposalary || retenuesalary+solidaritycontribution == imposalary)
    {
      Swal.fire({
      title: 'une incohorence a été détectée. veuillez vérifier les montants introduits',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => 
    {this.standardtraitementsalaireform.patchValue({

      retenuesalary: '', 
        imposalary: '',
      solidaritycontribution:''},{emitEvent: false} 
      );
      this.standardtraitementsalaireform.updateValueAndValidity();
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    })
      }
    }
      if (this.foprolosapayer>0)
      {
      this.standardfoprolosform.patchValue({basefoprolos:basefoprolos,foprolosammount:this.foprolosapayer},{emitEvent: false})

      this.standardfoprolosform.updateValueAndValidity();
      }  
      if (this.tfpapayer<0)
      {
        this.standardtfpform.patchValue({
          basetfp: basetfp,
          tfpammountmoisactuel: tfpammountmoisactuel,
          tfpapayer:'',
          tfpareporter:this.tfpareporter,
          },{emitEvent: false} 
          );
        this.standardtfpform.updateValueAndValidity();
      }
    if (this.tfpapayer>0)
      {
        this.standardtfpform.patchValue({
          basetfp: basetfp,
          tfpammountmoisactuel: tfpammountmoisactuel,
          tfpapayer: this.tfpapayer,
          tfpareporter:'',
          },{emitEvent: false} 
          );
        this.standardtfpform.updateValueAndValidity();
      }
      
      this.standardtraitementsalaireform.updateValueAndValidity();

    
  }
  calculateResultForm24()
  {
  
    const chiffreaffaireht=+this.standardtvacollecteform.get('chiffreaffaireht').value
    const chiffreaffaireht19=+this.standardtvacollecte19form.get('chiffreaffaireht').value
    const taux=+this.tauxtva
    const taux2=+this.standardtclform.get('taux').value
    const taux3=+this.standardfspform.get('taux').value
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
    const tvaammount19=+ Math.trunc((+chiffreaffaireht19*0.19)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      const ammountttc19=+ Math.trunc((+tvaammount19+ +chiffreaffaireht19)*1000)/1000
      const montantcontribution=+ Math.trunc((+chiffreaffaireht*+taux3)*1000)/1000;
      const montantcontribution19=+ Math.trunc((+chiffreaffaireht19*+taux3)*1000)/1000;
      this.chiffreaffaireht=chiffreaffaireht
      this.chiffreaffaireht19=chiffreaffaireht19
      this.ammountttc=ammountttc
      this.ammounttc19=ammountttc19
      this.fspammount=montantcontribution
      this.fspammount19=montantcontribution19
      this.totalfspammount=+this.fspammount+ +this.fspammount19
      this.tclammount=+ (Math.trunc((+ammountttc*+taux2)*1000)/1000);
      this.tclammount19=+ (Math.trunc((+ammountttc19*+taux2)*1000)/1000);
      this.totaltclammount= Math.trunc((+this.tclammount+ +this.tclammount19)*1000)/1000
      this.tvacollecte1=tvaammount
      this.standardtvacollecteform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc
        },{emitEvent: false} 
        );
      this.standardtvacollecteform.updateValueAndValidity();
      this.standardtclform.patchValue({
        
        chiffreaffairettc:+this.ammountttc+ +this.ammounttc19,tclapayer:+this.totaltclammount},{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
        this.standardfspform.patchValue({
        
          chiffreaffaireht:+this.chiffreaffaireht+ +this.chiffreaffaireht19,
          montantcontribution:this.totalfspammount
        });
        this.standardfspform.updateValueAndValidity();
  }
  calculateResultForm38()
  {
  
    const ammountttc=+this.standardtvacollecteform.get('ammountttc').value
    const ammountttc19=+this.standardtvacollecte19form.get('ammountttc').value
    const taux=+this.tauxtva
    const taux2=+this.standardtclform.get('taux').value
    const taux3=+this.standardfspform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount19=+ Math.trunc(((+ammountttc19*+0.19)/(1+ +0.19))*1000)/1000;
      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht19=+ Math.trunc((+ammountttc19- +tvaammount19)*1000)/1000
      this.ammountttc=ammountttc
      this.ammounttc19=ammountttc19
      this.chiffreaffaireht=ammountht
      this.chiffreaffaireht19=ammountht19
      this.tclammount=+ Math.trunc((ammountttc*taux2)*1000)/1000;
      this.tclammount19=+ Math.trunc((ammountttc19*taux2)*1000)/1000;
      this.totaltclammount= Math.trunc((+this.tclammount+ +this.tclammount19)*1000)/1000
      const montantcontribution=+ Math.trunc((+ammountht*+taux3)*1000)/1000;
      const montantcontribution19=+ Math.trunc((+ammountht19*+taux3)*1000)/1000;
      this.fspammount=montantcontribution
      this.fspammount19=montantcontribution19
      this.totalfspammount=+this.fspammount+ +this.fspammount19
      this.tvacollecte1=tvaammount
      this.standardtvacollecteform.patchValue({
        tvaammount: tvaammount, 
          chiffreaffaireht: ammountht
        },{emitEvent: false} 
        );
      this.standardtvacollecteform.updateValueAndValidity();
      this.standardtclform.patchValue({
        
        chiffreaffairettc:+this.ammountttc+ +this.ammounttc19,tclapayer:this.totaltclammount},{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
        this.standardfspform.patchValue({
        
          chiffreaffaireht:+this.chiffreaffaireht+ +this.chiffreaffaireht19,
          montantcontribution:+this.totalfspammount
        });
        this.standardfspform.updateValueAndValidity();

  }
  calculateResultForm44()
  {
    const chiffreaffaireht=+this.standardtvacollecte19form.get('chiffreaffaireht').value
    const chiffreaffaireht07=+this.standardtvacollecteform.get('chiffreaffaireht').value
    const taux=0.19
    const taux4=this.tauxtva
    const taux2=+this.standardtclform.get('taux').value
    const taux3=+this.standardfspform.get('taux').value
    
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
    const tvaammount07=+ Math.trunc((+chiffreaffaireht*+taux4)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      const ammountttc07=+ Math.trunc((+tvaammount07+ +chiffreaffaireht07)*1000)/1000
      const montantcontribution=+ Math.trunc((+chiffreaffaireht*+taux3)*1000)/1000;
      const montantcontribution07=+ Math.trunc((+chiffreaffaireht07*+taux3)*1000)/1000;
      this.chiffreaffaireht19=chiffreaffaireht
      this.chiffreaffaireht=chiffreaffaireht07
      this.fspammount=montantcontribution07
      this.fspammount19=montantcontribution
      this.ammounttc19=ammountttc
      this.ammountttc=ammountttc07
      this.totalfspammount=+this.fspammount+ +this.fspammount19
      this.tclammount19=+ Math.trunc((+ammountttc*+taux2)*1000)/1000;
      this.tclammount=+ Math.trunc((+ammountttc07*+taux2)*1000)/1000;
      this.totaltclammount= Math.trunc((+this.tclammount+ +this.tclammount19)*1000)/1000
      this.tvacollecte119=tvaammount
      this.standardtvacollecte19form.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc
        },{emitEvent: false} 
        );
      this.standardtvacollecte19form.updateValueAndValidity();
      this.standardtclform.patchValue({
        
        chiffreaffairettc:this.ammountttc+ +this.ammounttc19,tclapayer:this.totaltclammount},{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
        this.standardfspform.patchValue({
        
          chiffreaffaireht:+this.chiffreaffaireht+ +this.chiffreaffaireht19,
          montantcontribution:this.totalfspammount
        });
  }
  calculateResultForm45()
  {
  
    const ammountttc=+this.standardtvacollecte19form.get('ammountttc').value
    const ammountttc07=+this.standardtvacollecteform.get('ammountttc').value
    const taux=0.19
    const taux4=this.tauxtva
    const taux2=+this.standardtclform.get('taux').value
    const taux3=+this.standardfspform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount07=+ Math.trunc(((+ammountttc07*+taux4)/(1+ +taux4))*1000)/1000;
      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht07=+ Math.trunc((+ammountttc07- +tvaammount07)*1000)/1000

      this.chiffreaffaireht19=ammountht
      this.chiffreaffaireht=ammountht07
      this.tclammount=+ Math.trunc((ammountttc07*taux2)*1000)/1000;
      this.tclammount19=+ Math.trunc((ammountttc*taux2)*1000)/1000;
      this.totaltclammount= Math.trunc((+this.tclammount+ +this.tclammount19)*1000)/1000
      const montantcontribution=+ Math.trunc((+ammountht*+taux3)*1000)/1000;
      const montantcontribution07=+ Math.trunc((+ammountht07*+taux3)*1000)/1000;
      this.ammounttc19=ammountttc
      this.ammountttc=ammountttc07
      this.fspammount19=montantcontribution
      this.fspammount=montantcontribution07
      this.totalfspammount=+this.fspammount+ +this.fspammount19
      this.tvacollecte119=tvaammount
      this.standardtvacollecte19form.patchValue({
        tvaammount: tvaammount, 
          chiffreaffaireht: ammountht
        },{emitEvent: false} 
        );
      this.standardtvacollecte19form.updateValueAndValidity();
      this.standardtclform.patchValue({
        
        chiffreaffairettc:+this.ammountttc+ +this.ammounttc19,tclapayer:this.totaltclammount},{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
        this.standardfspform.patchValue({
        
          chiffreaffaireht:+this.chiffreaffaireht+ +this.chiffreaffaireht19,
          montantcontribution:this.totalfspammount
        });
  }
  calculateResultForm25()
  {
  
    const chiffreaffaireht=+this.standardlocationusagehabitationmeubleform.get('ammountht').value
    const taux=+this.standardlocationusagehabitationmeubleform.get('taux').value
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      
      this.tvacollecte2=chiffreaffaireht //c'est la somme des chiffes d'affaire HT
      this.standardlocationusagehabitationmeubleform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardlocationusagehabitationmeubleform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)

  }
  calculateResultForm39()
  {
  
    const ammountttc=+this.standardlocationusagehabitationmeubleform.get('ammountttc').value
    const taux=+this.standardlocationusagehabitationmeubleform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount2=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux)));
      const ammountht=+ Math.trunc((+ammountttc- +tvaammount )*1000)/1000
      const ammountht2=+ ((+ammountttc- +tvaammount2 ))

      this.tvacollecte2=ammountht2
      this.standardlocationusagehabitationmeubleform.patchValue({
        tvaammount: tvaammount, 
        ammountht: ammountht},{emitEvent: false} 
        );
      this.standardlocationusagehabitationmeubleform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)

  }
  calculateResultForm26()
  {
  
    const chiffreaffaireht=+this.standardlocationusagecommercialform.get('ammountht').value
    const taux=+this.standardlocationusagecommercialform.get('taux').value
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
      const ammountttc=+Math.trunc ((+tvaammount+ +chiffreaffaireht)*1000)/1000
      this.tvacollecte3=chiffreaffaireht
      this.standardlocationusagecommercialform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardlocationusagecommercialform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)   
  }
  calculateResultForm40()
  {
  
    const ammountttc=+this.standardlocationusagecommercialform.get('ammountttc').value
    const taux=+this.standardlocationusagecommercialform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;    
    const tvaammount2=+ (((+ammountttc*+taux)/(1+ +taux)));

      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht2=+ ((+ammountttc- +tvaammount2))

      this.tvacollecte3=ammountht2
      this.standardlocationusagecommercialform.patchValue({
        tvaammount: tvaammount, 
        ammountht: ammountht},{emitEvent: false} 
        );
      this.standardlocationusagecommercialform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)   
  }
  calculateResultForm30()
  {
  
    const chiffreaffaireht=+this.standardoperationlotissementform.get('ammountht').value
    const taux=+this.standardoperationlotissementform.get('taux').value
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      this.tvacollecte4=chiffreaffaireht
      this.standardoperationlotissementform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardoperationlotissementform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)    
  }
  calculateResultForm41()
  {
  
    const ammountttc=+this.standardoperationlotissementform.get('ammountttc').value
    const taux=+this.standardoperationlotissementform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount2=+ (((+ammountttc*+taux)/(1+ +taux)));

      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht2=+ ((+ammountttc- +tvaammount2))

      this.tvacollecte4=ammountht2
      this.standardoperationlotissementform.patchValue({
        tvaammount: tvaammount, 
        ammountht: ammountht},{emitEvent: false} 
        );
      this.standardoperationlotissementform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)    
  }
  calculateResultForm31()
  {
  
    const chiffreaffaireht=+this.standardinteretpercueform.get('ammountht').value
    const taux=+this.standardinteretpercueform.get('taux').value
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      this.tvacollecte5=chiffreaffaireht
      this.standardinteretpercueform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc},{emitEvent: false} 
        );
      this.standardinteretpercueform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)   
  }
  calculateResultForm42()
  {
  
    const ammountttc=+this.standardinteretpercueform.get('ammountttc').value
    const taux=+this.standardinteretpercueform.get('taux').value
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount2=+ (((+ammountttc*+taux)/(1+ +taux)));

      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht2=+ ((+ammountttc- +tvaammount2))

      this.tvacollecte5=ammountht2
      this.standardinteretpercueform.patchValue({
        tvaammount: tvaammount, 
        ammountht: ammountht},{emitEvent: false} 
        );
      this.standardinteretpercueform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)   
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
    const tvaammount=+ Math.trunc((+chiffreaffaireht*+taux)*1000)/1000;
      const ammountttc=+ Math.trunc((+tvaammount+ +chiffreaffaireht)*1000)/1000
      this.tvacollecte6=chiffreaffaireht
      this.standardautretvaspecialform.patchValue({
        tvaammount: tvaammount, 
          ammountttc: ammountttc,taux: taux},{emitEvent: false} 
        );
      this.standardautretvaspecialform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)  
  }
  calculateResultForm43()
  {
  
    const ammountttc=+this.standardautretvaspecialform.get('ammountttc').value
    const tauxpercent=+this.standardautretvaspecialform.get('tauxpercent').value
    
    if (tauxpercent>100)
    return (
      this.standardautretvaspecialform.patchValue({
     tauxpercent:'',
     tvaammount: '', 
     ammountttc:'',
    chiffreaffaireht:''},{emitEvent: false} 
      )) 
    const taux=+tauxpercent/100
    const tvaammount=+ Math.trunc(((+ammountttc*+taux)/(1+ +taux))*1000)/1000;
    const tvaammount2=+ (((+ammountttc*+taux)/(1+ +taux)));
      const ammountht=+ Math.trunc((+ammountttc- +tvaammount)*1000)/1000
      const ammountht2=+ ((+ammountttc- +tvaammount2))

      this.tvacollecte6=ammountht2
      this.standardautretvaspecialform.patchValue({
        tvaammount: tvaammount, 
        ammountht: ammountht,taux: taux},{emitEvent: false} 
        );
      this.standardautretvaspecialform.updateValueAndValidity();
      this.option71Value=+(this.tvacollecte2+this.tvacollecte3+this.tvacollecte4+this.tvacollecte5+this.tvacollecte6)
      this.option72Value=+(this.option71Value *0.19)  
  }
  calculateResultForm33()
  {
  
    const nombrenotehonoraire=+this.standarddroittimbreform.get('nombrenotehonoraire').value
    const taux=+this.standarddroittimbreform.get('taux').value
    this.totaltimbreammount=+Math.round((+nombrenotehonoraire* +taux)*1000)/1000;
      this.standarddroittimbreform.patchValue({
        totaldroittimbre: this.totaltimbreammount,},{emitEvent: false} 
        );
      this.standarddroittimbreform.updateValueAndValidity();
    
    
  }
  calculateResultForm37()
  {
  
    const totaldroittimbre=+this.standarddroittimbreform.get('totaldroittimbre').value
    const taux=+this.standarddroittimbreform.get('taux').value
    const nombrenotehonoraire=Math.trunc(+totaldroittimbre/+taux);
    this.totaltimbreammount=+ Math.trunc((+totaldroittimbre)*1000)/1000;
      this.standarddroittimbreform.patchValue({
        nombrenotehonoraire: nombrenotehonoraire,},{emitEvent: false} 
        );
      this.standarddroittimbreform.updateValueAndValidity();
    
    
  }
  calculateResultForm34()
  {
  
    const chiffreaffairettcbis=+this.standardtclform.get('chiffreaffairettc').value
    const taux=+this.standardtclform.get('taux').value
    
    
        this.totaltclammount=+ Math.trunc((+chiffreaffairettcbis*+taux)*1000)/1000;
  
      this.standardtclform.patchValue({
        tclapayer: this.totaltclammount,
        },{emitEvent: false} 
        );
        this.standardtclform.updateValueAndValidity();
    
    
  }
  calculateResultForm35()
  {
  
    const salairesbrutsrs=+this.standardtraitementsalaireform.get('brutsalary').value
    const salairesbrutstfp=+this.standardtfpform.get('tfpsalairebrut').value
    const taux=+this.standardtfpform.get('taux').value
    const salairesnonsoumistfp=+this.standardtfpform.get('salairesnonsoumistfp').value
    const reporttfpmoisprecedent=+this.standardtfpform.get('tfpammountreportmoisprecedent').value
    const tfpavanceammount=+this.standardtfpform.get('avanceammount').value
    if (tfpavanceammount<reporttfpmoisprecedent)
    {Swal.fire({
      title: 'une incohorence a été détectée. veuillez vérifier les montants introduits',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => 
    { this.standardtfpform.patchValue({
      tfpammountreportmoisprecedent: '0',
      avanceammount: '0',
      } 
      );
   
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    })
    }
    else if (salairesbrutstfp)
    {
      if (salairesnonsoumistfp>salairesbrutstfp)
{
  Swal.fire({
    title: 'le champ des salaires non soumises ne doit pas dépasser le total des salaires bruts',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => 
  { this.resettfpall()
 
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  })
}
    const basetfp=+ Math.trunc((+salairesbrutstfp-+salairesnonsoumistfp)*1000)/1000;
    const montanttfpmois=+ Math.trunc((+basetfp* +taux)*1000)/1000;
    this.tfpapayer=+ Math.trunc((+montanttfpmois-+reporttfpmoisprecedent)*1000)/1000;
    this.tfpareporter=+ Math.trunc((+reporttfpmoisprecedent-+montanttfpmois)*1000)/1000;
   
    if (this.tfpapayer<0)
    {
      this.standardtfpform.patchValue({
        basetfp: basetfp,
        tfpammountmoisactuel: montanttfpmois,
        tfpapayer:'',
        tfpareporter:this.tfpareporter,
        },{emitEvent: false} 
        );
      this.standardtfpform.updateValueAndValidity();
    }
    if (this.tfpapayer>0)
    {
      this.standardtfpform.patchValue({
        basetfp: basetfp,
        tfpammountmoisactuel: montanttfpmois,
        tfpapayer: this.tfpapayer,
        tfpareporter:'',
        },{emitEvent: false} 
        );
      this.standardtfpform.updateValueAndValidity();
    }
    }
    else 
    {
if (salairesnonsoumistfp>salairesbrutsrs)
{
  Swal.fire({
    title: 'le champ des salaires non soumises ne doit pas dépasser le total des salaires bruts',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => 
  { this.resettfpall()
 
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  })
}
      const basetfp=+ Math.trunc((+salairesbrutsrs-+salairesnonsoumistfp)*1000)/1000;
      const montanttfpmois=+ Math.trunc((+basetfp* +taux)*1000)/1000;
      this.tfpapayer=+ Math.trunc((+montanttfpmois-+reporttfpmoisprecedent)*1000)/1000;
      this.tfpareporter=+ Math.trunc((+reporttfpmoisprecedent-+montanttfpmois)*1000)/1000;
      
      if (this.tfpapayer<0)
    {
      this.standardtfpform.patchValue({
        basetfp: basetfp,
        tfpammountmoisactuel: montanttfpmois,
        tfpapayer:'',
        tfpareporter:this.tfpareporter,
        },{emitEvent: false} 
        );
      this.standardtfpform.updateValueAndValidity();
    }
    if (this.tfpapayer>=0)
    {
      this.standardtfpform.patchValue({
        basetfp: basetfp,
        tfpammountmoisactuel: montanttfpmois,
        tfpapayer: this.tfpapayer,
        tfpareporter:'',
        },{emitEvent: false} 
        );
      this.standardtfpform.updateValueAndValidity();
    }
    }
    
    
    
      
    
    
  }
  calculateResultForm36()
  {
  
    const salairesbrutsrs=+this.standardtraitementsalaireform.get('brutsalary').value
    const foprolossalairebrut=+this.standardfoprolosform.get('foprolossalairebrut').value
    const taux=+this.standardfoprolosform.get('taux').value
    const salairesnonsoumisfoprolos=+this.standardfoprolosform.get('salairesnonsoumisfoprolos').value
    if (foprolossalairebrut!==0)
    {
      if (salairesnonsoumisfoprolos>foprolossalairebrut)
{
  Swal.fire({
    title: 'le champ des salaires non soumises ne doit pas dépasser le total des salaires bruts',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => 
  { this.resetfoprolosall()
 
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  })
}
      const basefoprolos=+ Math.trunc((+foprolossalairebrut-+salairesnonsoumisfoprolos)*1000)/1000;
      this.foprolosapayer=+ Math.trunc((+basefoprolos* +taux)*1000)/1000;
      
        this.standardfoprolosform.patchValue({
          basefoprolos: basefoprolos,
          foprolosammount: this.foprolosapayer,
          
          },{emitEvent: false} 
          );
        this.standardfoprolosform.updateValueAndValidity();
    }
    else
    {
      if (salairesnonsoumisfoprolos>salairesbrutsrs)
{
  Swal.fire({
    title: 'le champ des salaires non soumises ne doit pas dépasser le total des salaires bruts',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => 
  { this.resetfoprolosall()
 
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  })
}
      const basefoprolos=+ Math.trunc((+salairesbrutsrs-+salairesnonsoumisfoprolos)*1000)/1000;
      this.foprolosapayer=+ Math.trunc((+basefoprolos* +taux)*1000)/1000;
      
        this.standardfoprolosform.patchValue({
          basefoprolos: basefoprolos,
          foprolosammount: this.foprolosapayer,
          
          },{emitEvent: false} 
          );
        this.standardfoprolosform.updateValueAndValidity();
    }
    
    
    
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
    this.standardtraitementsalaireform.patchValue({

      brutsalary: '',
      retenuesalary: '', 
        imposalary: '',
      solidaritycontribution:''},{emitEvent: false} 
      );
    this.resetfoprolosall()
    this.resettclall()
    this.resetfspall()
    this.resettfpall()
    this.resettimbreall()
    this.resettvaall()
    this.loading = false;

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
    montant10004: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, autre: []}
    decfiscmens.impottype2={ type: '',reporttvamoisprecedent:'',
    tvacollecter:{
      type:'',
      chiffreaffaireht:'',
      tvaammount:'',
      ammountttc:'',
      
      },
      tvacollecter19:{
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
    decfiscmens.activite=this.user.activite;
    decfiscmens.regimefiscalimpot=this.user.regimefiscalimpot;
    decfiscmens.sousactivite=this.user.sousactivite;
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
    if(this.option54Value==''||this.option171Value=='')
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
    if (this.option55Value)
    {
    decfiscmens.nature='Déclaration Mensuelle'
    }
    if (this.option48Value) 
    {
      if (this.option48Value&&!this.option65Value)
      return (
        Swal.fire({
        title: 'veuillez confirmer l\'impot retenue à la source',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
      if (this.standardtraitementsalaireform.get('brutsalary').value!==null)
      {
decfiscmens.impottype1.type='Retenue à la source'
decfiscmens.impottype1.traitementetsalaire.salairebrut=this.standardtraitementsalaireform.get('brutsalary').value
decfiscmens.impottype1.traitementetsalaire.salaireimposable=this.standardtraitementsalaireform.get('imposalary').value
decfiscmens.impottype1.traitementetsalaire.retenuealasource=this.standardtraitementsalaireform.get('retenuesalary').value
decfiscmens.impottype1.traitementetsalaire.contributionsociale=this.standardtraitementsalaireform.get('solidaritycontribution').value
      }
if (this.standardlocationresidentesphysiqueform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

decfiscmens.impottype1.location1.type='loyers, commissions, courtages et vacations servis aux personnes résidentes personnes physiques'
decfiscmens.impottype1.location1.montantbrut=this.standardlocationresidentesphysiqueform.get('brutammount').value
decfiscmens.impottype1.location1.montantnet=this.standardlocationresidentesphysiqueform.get('netammount').value
decfiscmens.impottype1.location1.montantretenue=this.standardlocationresidentesphysiqueform.get('retenueammount').value
}
if (this.standardlocationresidentesmoraleform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

decfiscmens.impottype1.location2.type='loyers, commissions, courtages et vacations servis aux personnes résidentes personnes morales'
decfiscmens.impottype1.location2.montantbrut=this.standardlocationresidentesmoraleform.get('brutammount').value
decfiscmens.impottype1.location2.montantnet=this.standardlocationresidentesmoraleform.get('netammount').value
decfiscmens.impottype1.location2.montantretenue=this.standardlocationresidentesmoraleform.get('retenueammount').value
}
if (this.standardlocationnonresidentesphysiquesform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

decfiscmens.impottype1.location3.type='loyers, commissions, courtages et vacations servis aux personnes non résidentes personnes physiques'
decfiscmens.impottype1.location3.montantbrut=this.standardlocationnonresidentesphysiquesform.get('brutammount').value
decfiscmens.impottype1.location3.montantnet=this.standardlocationnonresidentesphysiquesform.get('netammount').value
decfiscmens.impottype1.location3.montantretenue=this.standardlocationnonresidentesphysiquesform.get('retenueammount').value
}
if (this.standardlocationnonresidentesmoralesform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

decfiscmens.impottype1.location4.type='loyers, commissions, courtages et vacations servis aux personnes non résidentes personnes morales'
decfiscmens.impottype1.location4.montantbrut=this.standardlocationnonresidentesmoralesform.get('brutammount').value
decfiscmens.impottype1.location4.montantnet=this.standardlocationnonresidentesmoralesform.get('netammount').value
decfiscmens.impottype1.location4.montantretenue=this.standardlocationnonresidentesmoralesform.get('retenueammount').value
}
if (this.standardhonorairephysiquereelform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.honoraire1.type='honoraire servis aux personnes physiques soumises au régime réel'
  decfiscmens.impottype1.honoraire1.montantbrut=this.standardhonorairephysiquereelform.get('brutammount').value
  decfiscmens.impottype1.honoraire1.montantnet=this.standardhonorairephysiquereelform.get('netammount').value
  decfiscmens.impottype1.honoraire1.montantretenue=this.standardhonorairephysiquereelform.get('retenueammount').value  
}
if (this.standardhonorairephysiquenonreelform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.honoraire2.type='honoraire servis aux personnes physiques non soumises au régime réel'
  decfiscmens.impottype1.honoraire2.montantbrut=this.standardhonorairephysiquenonreelform.get('brutammount').value
  decfiscmens.impottype1.honoraire2.montantnet=this.standardhonorairephysiquenonreelform.get('netammount').value
  decfiscmens.impottype1.honoraire2.montantretenue=this.standardhonorairephysiquenonreelform.get('retenueammount').value  
}
if (this.standardhonorairegroupementsform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.honoraire3.type='honoraire servis aux sociétés et aux groupements'
  decfiscmens.impottype1.honoraire3.montantbrut=this.standardhonorairegroupementsform.get('brutammount').value
  decfiscmens.impottype1.honoraire3.montantnet=this.standardhonorairegroupementsform.get('netammount').value
  decfiscmens.impottype1.honoraire3.montantretenue=this.standardhonorairegroupementsform.get('retenueammount').value  
}
if (this.standardmontant15form.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.montant10001.type='Montants supérieurs à 1000dt établissements soumis à l\'i/s au taux de 15%'
  decfiscmens.impottype1.montant10001.montantbrut=this.standardmontant15form.get('brutammount').value
  decfiscmens.impottype1.montant10001.montantnet=this.standardmontant15form.get('netammount').value
  decfiscmens.impottype1.montant10001.montantretenue=this.standardmontant15form.get('retenueammount').value  
}
if (this.standardmontant10form.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.montant10002.type='Montants supérieurs à 1000dt établissements soumis à l\i/s au taux de 10%'
  decfiscmens.impottype1.montant10002.montantbrut=this.standardmontant10form.get('brutammount').value
  decfiscmens.impottype1.montant10002.montantnet=this.standardmontant10form.get('netammount').value
  decfiscmens.impottype1.montant10002.montantretenue=this.standardmontant10form.get('retenueammount').value  
}
if (this.standardmontantindividuelform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.montant10003.type='Montants supérieurs à 1000dt établissements individuels et éligible à la réduction des 2/3 des revenus'
  decfiscmens.impottype1.montant10003.montantbrut=this.standardmontantindividuelform.get('brutammount').value
  decfiscmens.impottype1.montant10003.montantnet=this.standardmontantindividuelform.get('netammount').value
  decfiscmens.impottype1.montant10003.montantretenue=this.standardmontantindividuelform.get('retenueammount').value  
}
if (this.standardmontantautreform.get('netammount').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.montant10004.type='Montants supérieurs à 1000dt autre établissements'
  decfiscmens.impottype1.montant10004.montantbrut=this.standardmontantautreform.get('brutammount').value
  decfiscmens.impottype1.montant10004.montantnet=this.standardmontantautreform.get('netammount').value
  decfiscmens.impottype1.montant10004.montantretenue=this.standardmontantautreform.get('retenueammount').value  
}
if (this.autreform.get('ammounts').value!==null)
{
  decfiscmens.impottype1.type='Retenue à la source'

  decfiscmens.impottype1.autre=this.autreform.get('ammounts').value
 

}
}
if(this.option49Value)

{
  if (this.option49Value&&!this.option66Value)
      return (
        Swal.fire({
        title: 'veuillez confirmer l\'impot TFP ',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
      if (this.standardtfpform.get('basetfp').value!==null)
      {
  decfiscmens.impottype3.type='TFP'
  decfiscmens.impottype3.tfpsalairebrut=this.standardtfpform.get('tfpsalairebrut').value
  decfiscmens.impottype3.basetfp=this.standardtfpform.get('basetfp').value
  decfiscmens.impottype3.montantavance=this.standardtfpform.get('avanceammount').value
  decfiscmens.impottype3.montanttfpmois=this.standardtfpform.get('tfpammountmoisactuel').value
  decfiscmens.impottype3.reporttfpmoisprecedent=this.standardtfpform.get('tfpammountreportmoisprecedent').value
  decfiscmens.impottype3.tfppayer=this.standardtfpform.get('tfpapayer').value
  decfiscmens.impottype3.tfpreporter=this.standardtfpform.get('tfpareporter').value
  decfiscmens.impottype3.salairesnonsoumistfp=this.standardtfpform.get('salairesnonsoumistfp').value
}
}
if(this.option50Value)
{
  if (this.option50Value&&!this.option67Value)
      return (
        Swal.fire({
        title: 'veuillez confirmer l\'impot FOPROLOS ',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
      if (this.standardfoprolosform.get('basefoprolos').value!==null)
      {
  decfiscmens.impottype4.type='FOPROLOS'
  decfiscmens.impottype4.foprolossalairebrut=this.standardfoprolosform.get('foprolossalairebrut').value
  decfiscmens.impottype4.basefoprolos=this.standardfoprolosform.get('basefoprolos').value
  decfiscmens.impottype4.montantfoprolos=this.standardfoprolosform.get('foprolosammount').value
  decfiscmens.impottype4.salairesnonsoumisfoprolos=this.standardfoprolosform.get('salairesnonsoumisfoprolos').value

}
}
if(this.option51Value)
{
  if (this.option51Value&&!this.option68Value)
      return (
        Swal.fire({
        title: 'veuillez confirmer l\'impot TVA ',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
  
if (this.standardtvacollecteform.get('chiffreaffaireht').value!==null)
{
  decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.tvacollecter.type='TVA collecté'
decfiscmens.impottype2.tvacollecter.chiffreaffaireht=this.standardtvacollecteform.get('chiffreaffaireht').value
decfiscmens.impottype2.tvacollecter.tvaammount=this.standardtvacollecteform.get('tvaammount').value
decfiscmens.impottype2.tvacollecter.ammountttc=this.standardtvacollecteform.get('ammountttc').value
}
if (this.standardtvacollecte19form.get('chiffreaffaireht').value!==null)
{
decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.tvacollecter19.type='TVA collecté'
decfiscmens.impottype2.tvacollecter19.chiffreaffaireht=this.standardtvacollecte19form.get('chiffreaffaireht').value
decfiscmens.impottype2.tvacollecter19.tvaammount=this.standardtvacollecte19form.get('tvaammount').value
decfiscmens.impottype2.tvacollecter19.ammountttc=this.standardtvacollecte19form.get('ammountttc').value
}
if (this.standardtvarecuperableautreachatform.get('achatlocauxht').value!==null||this.standardtvarecuperableautreachatform.get('achatlocauxtva').value!==null||
this.standardtvarecuperableautreachatform.get('achatimporteht').value!==null||this.standardtvarecuperableautreachatform.get('achatimportetva').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.tvarecuperableautreachat.type='TVA récupérable pour les autres achats'
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht=this.standardtvarecuperableautreachatform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva=this.standardtvarecuperableautreachatform.get('achatlocauxtva').value
decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht=this.standardtvarecuperableautreachatform.get('achatimporteht').value
decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva=this.standardtvarecuperableautreachatform.get('achatimportetva').value
}
if (this.standardtvarecuperableequipementform.get('achatlocauxht').value!==null||this.standardtvarecuperableequipementform.get('achatlocauxtva').value!==null||
this.standardtvarecuperableequipementform.get('achatimporteht').value!==null||this.standardtvarecuperableequipementform.get('achatimportetva').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.tvarecuperableequipement.type='TVA récupérable pour les achats d\'équipements'
decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht=this.standardtvarecuperableequipementform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva=this.standardtvarecuperableequipementform.get('achatlocauxtva').value
decfiscmens.impottype2.tvarecuperableequipement.achatimporteht=this.standardtvarecuperableequipementform.get('achatimporteht').value
decfiscmens.impottype2.tvarecuperableequipement.achatimportetva=this.standardtvarecuperableequipementform.get('achatimportetva').value
}
if (this.standardtvarecuperableimmobilierform.get('achatlocauxht').value!==null||this.standardtvarecuperableimmobilierform.get('achatlocauxtva').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.tvarecuperableimmobilier.type='TVA récupérable pour les achats immobiliers'
decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht=this.standardtvarecuperableimmobilierform.get('achatlocauxht').value
decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva=this.standardtvarecuperableimmobilierform.get('achatlocauxtva').value
}
if (this.standardlocationusagehabitationmeubleform.get('ammountht').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.locationhabitationmeuble.type='TVA sur location à usage d\'habitation meublé'
decfiscmens.impottype2.locationhabitationmeuble.htammount=this.standardlocationusagehabitationmeubleform.get('ammountht').value
decfiscmens.impottype2.locationhabitationmeuble.tvaammount=this.standardlocationusagehabitationmeubleform.get('tvaammount').value
decfiscmens.impottype2.locationhabitationmeuble.ttcammount=this.standardlocationusagehabitationmeubleform.get('ammountttc').value
}
if (this.standardlocationusagecommercialform.get('ammountht').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.locationusagecommercial.type='TVA sur location à usage commercial, industriel, professionnel et artisanal'
decfiscmens.impottype2.locationusagecommercial.htammount=this.standardlocationusagecommercialform.get('ammountht').value
decfiscmens.impottype2.locationusagecommercial.tvaammount=this.standardlocationusagecommercialform.get('tvaammount').value
decfiscmens.impottype2.locationusagecommercial.ttcammount=this.standardlocationusagecommercialform.get('ammountttc').value
}
if (this.standardoperationlotissementform.get('ammountht').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.operationlotissement.type='TVA sur opérations de lotissement'
decfiscmens.impottype2.operationlotissement.htammount=this.standardoperationlotissementform.get('ammountht').value
decfiscmens.impottype2.operationlotissement.tvaammount=this.standardoperationlotissementform.get('tvaammount').value
decfiscmens.impottype2.operationlotissement.ttcammount=this.standardoperationlotissementform.get('ammountttc').value
}
if (this.standardinteretpercueform.get('ammountht').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.interetpercue.type='TVA sur intêrets percus'
decfiscmens.impottype2.interetpercue.htammount=this.standardinteretpercueform.get('ammountht').value
decfiscmens.impottype2.interetpercue.tvaammount=this.standardinteretpercueform.get('tvaammount').value
decfiscmens.impottype2.interetpercue.ttcammount=this.standardinteretpercueform.get('ammountttc').value
}
if (this.standardautretvaspecialform.get('ammountht').value!==null)
{decfiscmens.impottype2.type='TVA'
decfiscmens.impottype2.reporttvamoisprecedent=this.option64Value
decfiscmens.impottype2.autretvaspecial.type='TVA sur autres revenus'
decfiscmens.impottype2.autretvaspecial.htammount=this.standardautretvaspecialform.get('ammountht').value
decfiscmens.impottype2.autretvaspecial.tvaammount=this.standardautretvaspecialform.get('tvaammount').value
decfiscmens.impottype2.autretvaspecial.ttcammount=this.standardautretvaspecialform.get('ammountttc').value

decfiscmens.impottype2.autretvaspecial.taux=this.standardautretvaspecialform.get('taux').value
}
}
if(this.option172Value)
{
  if (this.option172Value&&!this.option173Value)
  return (
    Swal.fire({
    title: 'veuillez confirmer l\'impot FSSP ',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {this.loading=false
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  }))
  if(this.standardfspform.get('chiffreaffaireht').value!==null)
  {
  decfiscmens.impottype7.type='FSSP'
  decfiscmens.impottype7.chiffreaffaireht=this.standardfspform.get('chiffreaffaireht').value
  decfiscmens.impottype7.montantcontribution=this.standardfspform.get('montantcontribution').value
} 
}

if(this.option52Value)
{
  if (this.option52Value&&!this.option69Value)
      return (
        Swal.fire({
        title: 'veuillez confirmer l\'impot Droit De Timbre ',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      }).then((result) => {this.loading=false
      }).catch(() => {
        Swal.fire('opération non aboutie!')
      }))
      if(this.standarddroittimbreform.get('nombrenotehonoraire').value!==null)
      {
  decfiscmens.impottype5.type='Droit de timbre'
  decfiscmens.impottype5.nombrenotehonoraire=this.standarddroittimbreform.get('nombrenotehonoraire').value
  decfiscmens.impottype5.totaldroittimbre=this.standarddroittimbreform.get('totaldroittimbre').value
}
}
if(this.option53Value)
{
  if (this.option53Value&&!this.option70Value)
  return (
    Swal.fire({
    title: 'veuillez confirmer l\'impot TCL ',
    icon: 'error',
    confirmButtonColor: '#3085d6',
  }).then((result) => {this.loading=false
  }).catch(() => {
    Swal.fire('opération non aboutie!')
  }))
  if(this.standardtclform.get('chiffreaffairettc').value!==null)
  {
  decfiscmens.impottype6.type='TCL'
  decfiscmens.impottype6.chiffreaffairettc=this.standardtclform.get('chiffreaffairettc').value
  decfiscmens.impottype6.tclpayer=this.standardtclform.get('tclapayer').value
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
  ngOnDestroy(){
    if(this.isLoggedIn)
    {
      console.log(this.sub1)
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
    console.log(this.ammounts);

    console.log(this.autreform.get('ammounts').value);
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
  verify(e)
  {
    console.log(this.currentUser.userId,this.option54Value,this.option171Value)
    if(this.option54Value=='2023'&&this.activite=='Architectes'||this.option54Value=='2023'&&this.activite=='Syndic des copropriétaires'||this.option54Value=='2023'&&this.activite=='Ingénieurs-conseil'
    ||this.option54Value=='2023'&&this.activite=='Dessinateurs'||this.option54Value=='2023'&&this.activite=='Géomètres'
    ||this.option54Value=='2023'&&this.activite=='Topographes'||this.option54Value=='2023'&&this.activite=='Notaire'||
    this.option54Value=='2023'&&this.activite=='Huissiers notaire'||this.option54Value=='2023'&&this.activite=='Interprètes'||
    this.option54Value=='2023'&&this.activite=='Expert'||this.option54Value=='2023'&&this.activite=='Avocat')
    {
      this.tauxtva='0.19'
    }
    if(this.option54Value=='2023')
    {
      this.tauxdt=1.000
      this.standarddroittimbreform.patchValue({
        taux:this.tauxdt
      })
    }
    if (this.user.regimefiscalimpot==='Réel'&&this.currentdate>=this.date1)  
    {
     this.prepminimumperceptionammount=20.000
    }  
    else if (this.user.regimefiscalimpot==='Forfait D\'assiette'&&this.currentdate>=this.date1) 
    {
     this.prepminimumperceptionammount=10.000

    }
    let date=new Date()
    let anneactuel=date.getFullYear()
    let moisactuel=date.getMonth()+1
    console.log(anneactuel,moisactuel)
    console.log(anneactuel,moisactuel)
    if (this.option54Value>anneactuel||this.option54Value==anneactuel&&this.option171Value>=moisactuel)
    return (
      Swal.fire({
      title: 'vous ne pouvez pas déposer une déclaration au futur',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {this.option54Value='',this.option171Value=''
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    }))
    this.DecfiscmensService.geexistenttdecfiscmens(this.currentUser.userId,this.option54Value,this.option171Value).then(
      (data:Decfiscmens[]) => {
        if (data.length>0)
        {
          Swal.fire({
            title: 'vous avez déjà une déclaration qui existe avec ce mois et cette année, veuillez choisir entre les alternatives suivantes:',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Modifier la déclaration existente',
            cancelButtonText: 'actualiser déclaration',
          }).then((result) => 
          {
            if (result.value) {
            
              this.router.navigate(['modify-decfiscmens/'+data[0]._id])

  
            }
            else{
              this.token.saved=true
             this.reloadPage()

            }
          }).catch(() => {
            Swal.fire('opération non aboutie!')
          })
        }
        else{
          var text3 = document.getElementById("impotlist");
          var text4 = document.getElementById("Year");
          var text5 = document.getElementById("Month");
          var text2 = document.getElementById("tabcontainer");
          Swal.fire({
            title: 'Ce module ne concerne que les déclarations initiales et ne tient pas compte des pénalités de retard. Après votre validation des données saisies, nous pouvons vous calculer les pénalités et vous les envoyer',
            icon: 'info',
            confirmButtonColor: '#3085d6',
          }).then((result) => {
            Swal.fire({
              title: 'Tous les impôts dont vous êtes normalement redevables sont cochés. Vous pouvez décochez l\'impôt que vous ne désirez pas déclarer pour le moment',
              icon: 'info',
              confirmButtonColor: '#3085d6',
            }).then((result) => {this.myFunction11(),this.myFunction9()})
          }).catch(() => {
            Swal.fire('opération non aboutie!')
          })
         
          this.resetretenuealasourceall()    
          this.showretenuetab=true;
          this.showtfptab=true;
          this.showfoprolostab=true;
          this.showtvatab=true;
          this.showtimbretab=true;
          this.showtcltab=true;
          this.showretenueverif=true;
  this.showtfpverif=true;
  this.showfoprolosverif=true;
  this.showtvaverif=true;
  this.showtimbreverif=true;
  this.showtclverif=true;
          if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
              this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
              ||this.activite=='Sage-femmes')
              {
                this.showfsptab=true;
                this.showfspverif=true;

              }
              if(this.activite=='Syndic des copropriétaires')
              {
                this.option49Value=false;
                this.option51Value=false;
                this.option52Value=false;
                this.option53Value=false;
                this.option172Value=false;
          this.showtfptab=false;
          this.showtvatab=false;
          this.showtimbretab=false;
          this.showtcltab=false;
  this.showtfpverif=false;
  this.showtvaverif=false;
  this.showtimbreverif=false;
  this.showtclverif=false;
              }
          text2.style.display="block"
          text3.style.display = "flex";
          text4.style.display = 'none';
          text5.style.display = 'none';

        }
      }
      
    )
  }
  verifyfutur(e)
  {
    let date=new Date()
    let anneactuel=date.getFullYear()
    let moisactuel=date.getMonth()+1
    console.log(anneactuel,moisactuel)
    if (this.option54Value>anneactuel||this.option54Value==anneactuel&&this.option171Value>=moisactuel)
    return (
      Swal.fire({
      title: 'vous ne pouvez pas déposer une déclaration non encore échue',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {this.option54Value='',this.option171Value=''
    }).catch(() => {
      Swal.fire('opération non aboutie!')
    }))
   
  }
  update(e){
    this.selected = e.target.value
    
    if(this.selected=='loyers, commissions, courtages et vacations')
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
    else if(this.selected=='traitements et salaires')
    {this.standardtraitementsalaireform.controls['brutsalary'].reset()
    this.standardtraitementsalaireform.controls['imposalary'].reset()
    this.standardtraitementsalaireform.controls['retenuesalary'].reset()
    this.standardtraitementsalaireform.controls['solidaritycontribution'].reset()

    }
    else if (this.selected=='honoraires')
    {this.standardhonorairephysiquereelform.controls['brutammount'].reset()
    this.standardhonorairephysiquereelform.controls['netammount'].reset()
    this.standardhonorairephysiquereelform.controls['retenueammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['brutammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['netammount'].reset()
    this.standardhonorairephysiquenonreelform.controls['retenueammount'].reset()
    this.standardhonorairegroupementsform.controls['brutammount'].reset()
    this.standardhonorairegroupementsform.controls['netammount'].reset()
    this.standardhonorairegroupementsform.controls['retenueammount'].reset()}
    else if (this.selected=='Autre')
    {this.autreform.reset()}
    
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
    this.autreform.reset()
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
    
    this.standardtraitementsalaireform.controls['retenuesalary'].reset()
    this.standardtraitementsalaireform.controls['solidaritycontribution'].reset()
    this.standardtraitementsalaireform.controls['brutsalary'].reset()
    this.standardtraitementsalaireform.controls['imposalary'].reset()

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
    this.standardtfpform.controls['tfpsalairebrut'].reset()
    this.standardtfpform.controls['basetfp'].reset()
    this.standardtfpform.controls['tfpammountreportmoisprecedent'].reset()
    this.standardtfpform.controls['avanceammount'].reset()
    this.standardtfpform.controls['salairesnonsoumistfp'].reset()
    this.standardtfpform.controls['tfpammountmoisactuel'].reset()

  }
  resetfoprolosall(){
    this.standardfoprolosform.controls['foprolossalairebrut'].reset()
    this.standardfoprolosform.controls['basefoprolos'].reset()
    this.standardfoprolosform.controls['salairesnonsoumisfoprolos'].reset()

    
  }
  resettimbreall(){
    this.standarddroittimbreform.controls['nombrenotehonoraire'].reset()
    this.standarddroittimbreform.controls['totaldroittimbre'].reset()
  }
  resettclall(){
    this.standardtclform.controls['chiffreaffairettc'].reset()
  }
  resetfspall(){
    this.standardfspform.controls['chiffreaffaireht'].reset()
    this.standardfspform.controls['montantcontribution'].reset()
  }
  resettvaall(){
    this.standardtvacollecteform.controls['chiffreaffaireht'].reset()
    this.standardtvacollecteform.controls['tvaammount'].reset()
    this.standardtvacollecteform.controls['ammountttc'].reset()
    this.standardtvacollecte19form.controls['chiffreaffaireht'].reset()
    this.standardtvacollecte19form.controls['tvaammount'].reset()
    this.standardtvacollecte19form.controls['ammountttc'].reset()
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
    this.option64Value='';
    this.tvacollecte=0.000
    this.tvarecuperable=0.000
    this.totalreporttvaammount=0;
    this.preptotaltvaammount=0;
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
  declareneantretenue()
  {
    this.standardmontantautreform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardmontantautreform.updateValueAndValidity();
    this.standardmontantindividuelform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardmontantindividuelform.updateValueAndValidity();
    this.standardmontant10form.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardmontant10form.updateValueAndValidity();
    this.standardmontant15form.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardmontant15form.updateValueAndValidity();
    this.standardhonorairegroupementsform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardhonorairegroupementsform.updateValueAndValidity();
    this.standardhonorairephysiquenonreelform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardhonorairephysiquenonreelform.updateValueAndValidity();
    this.standardhonorairephysiquereelform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardhonorairephysiquereelform.updateValueAndValidity();
    this.standardlocationnonresidentesmoralesform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardlocationnonresidentesmoralesform.updateValueAndValidity();
    this.standardlocationnonresidentesphysiquesform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardlocationnonresidentesphysiquesform.updateValueAndValidity();
    this.standardlocationresidentesmoraleform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardlocationresidentesmoraleform.updateValueAndValidity();
    this.standardlocationresidentesphysiqueform.patchValue({
      brutammount: 0, 
        retenueammount: 0,netammount:0},{emitEvent: false} 
      );
    this.standardlocationresidentesphysiqueform.updateValueAndValidity();
    this.standardtraitementsalaireform.patchValue({
      brutsalary: 0, 
        imposalary: 0,retenuesalary:0,solidaritycontribution:0},{emitEvent: false} 
      );
      this.standardtraitementsalaireform.updateValueAndValidity();
  };
  declareneanttfp()
    {
      
this.standardtfpform.patchValue({
  basetfp: 0, 
  avanceammount: 0,tfpapayer:0,salairesnonsoumistfp:0,tfpammountmoisactuel:0,tfpammountreportmoisprecedent:0,tfpareporter:0,tfpsalairebrut:0},{emitEvent: false} 
);
this.standardtfpform.updateValueAndValidity();
    }
declareneantfoprolos()
{
  this.standardfoprolosform.patchValue({
    basefoprolos: 0, 
    salairesnonsoumisfoprolos: 0,foprolosammount:0,foprolossalairebrut:0},{emitEvent: false} 
  );
  this.standardfoprolosform.updateValueAndValidity();
}
declareneanttva()
{
  this.standardautretvaspecialform.patchValue({
    ammountht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardautretvaspecialform.updateValueAndValidity();
   this.standardinteretpercueform.patchValue({
    ammountht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardinteretpercueform.updateValueAndValidity();
   this.standardoperationlotissementform.patchValue({
    ammountht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardoperationlotissementform.updateValueAndValidity();
   this.standardlocationusagecommercialform.patchValue({
    ammountht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardlocationusagecommercialform.updateValueAndValidity();
   this.standardlocationusagehabitationmeubleform.patchValue({
    ammountht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardlocationusagehabitationmeubleform.updateValueAndValidity();
   this.standardtvarecuperableequipementform.patchValue({
    achatlocauxht: 0, 
    achatlocauxtva: 0,achatimporteht:0,achatimportetva:0},{emitEvent: false} 
   );
   this.standardtvarecuperableequipementform.updateValueAndValidity();
   this.standardtvarecuperableimmobilierform.patchValue({
    achatlocauxht: 0, 
    achatlocauxtva: 0,},{emitEvent: false} 
   );
   this.standardtvarecuperableimmobilierform.updateValueAndValidity();
   this.standardtvarecuperableautreachatform.patchValue({
    achatlocauxht: 0, 
    achatlocauxtva: 0,achatimporteht:0,achatimportetva:0},{emitEvent: false} 
   );
   this.standardtvarecuperableautreachatform.updateValueAndValidity();
   this.standardtvacollecteform.patchValue({
    chiffreaffaireht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardtvacollecteform.updateValueAndValidity();
   this.standardtvacollecte19form.patchValue({
    chiffreaffaireht: 0, 
    tvaammount: 0,ammountttc:0},{emitEvent: false} 
   );
   this.standardtvacollecte19form.updateValueAndValidity();
}
declareneanttimbre()
{
  this.standarddroittimbreform.patchValue({
    nombrenotehonoraire: 0, 
    totaldroittimbre: 0},{emitEvent: false} 
   );
   this.standarddroittimbreform.updateValueAndValidity();
}
declareneanttcl()
{
  this.standardtclform.patchValue({
    chiffreaffairettc: 0, 
    tclapayer: 0},{emitEvent: false} 
   );
   this.standardtclform.updateValueAndValidity();
}
declareneantfsp()
{
  this.standardfspform.patchValue({
    chiffreaffaireht: 0, 
    montantcontribution: 0}
   );
   this.standardfspform.updateValueAndValidity();
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
      } else {
         text2.style.display = "none";
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
        if (this.option49Value==true||this.option50Value==true)
        {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt TFP et FOPROLOS, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Accepter et Continuer',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            this.resetretenuealasourceall()
            this.resettfpall();
            this.resetfoprolosall();
            this.showtfpsalairebrut=false
            this.showfoprolossalairebrut=false
            text2.style.display = "block";
            this.showretenuetab=true;
            this.option48Value=true;
            this.showretenueverif=true;
            this.option65Value=false;

          }
          else{
            checkbox.checked = false
            this.option48Value=false
            this.showtfpsalairebrut=true
            this.showfoprolossalairebrut=true
          }
  
        })
      }
      else
      {
        this.resetretenuealasourceall()
        
        text2.style.display = "block";
        this.showretenuetab=true;
        this.option48Value=true;
        this.showretenueverif=true;
        this.option65Value=false;
        this.showtfpsalairebrut=false
        this.showfoprolossalairebrut=false
      }
      } else {
        this.showtfpsalairebrut=true
        this.showfoprolossalairebrut=true
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
            this.resettfpall()
            this.resetfoprolosall()
            this.showretenuetab=false;
            this.option48Value=false
            this.showretenueverif=false;
            this.option65Value=false

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
        this.showtfpverif=true;
        this.option66Value=false;
//verify report TFP mois précédent
let mois=['01','02','03','04','05','06','07','08','09','10','11','12'] 
let mois1:any
let desiredmois1:any
let verifymois1:any
let verifyannee1:any
let reporttfp:any
let avancetfp:any

let selected = (element) => element ===this.option171Value;
if(this.option171Value!='01')
{
  mois1=mois.findIndex(selected)
  desiredmois1=mois[+(mois1-1)]
  this.DecfiscmensService.decfiscmenss.find(e => verifymois1=(e.mois === desiredmois1&&e.annee === this.option54Value));
  console.log(verifymois1)
  if(verifymois1)
{ 
reporttfp=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype3.tfpreporter
avancetfp=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype3.montantavance

this.standardtfpform.patchValue({
  avanceammount:avancetfp,
  tfpammountreportmoisprecedent:reporttfp
})
}
else if(this.option171Value==='01')
{
  this.DecfiscmensService.decfiscmenss.find(e => verifymois1=(e.mois === '12'&&+e.annee === +this.option54Value-1));
  if(verifymois1)
{ 
reporttfp=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype3.tfpreporter
this.standardtfpform.patchValue({
  tfpammountreportmoisprecedent:reporttfp
})
}
}
}
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
            this.showtfpverif=false;
            this.option66Value=false;

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
        this.showfoprolosverif=true;
        this.option67Value=false;

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
            this.showfoprolosverif=false;
            this.option67Value=false;
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
        this.resettvaall()
        this.showtvatab=true;
        this.option51Value=true;
        this.showtvaverif=true;
        this.option68Value=false;
//verify report tva mois précédent
let mois=['01','02','03','04','05','06','07','08','09','10','11','12'] 
let mois1:any
let desiredmois1:any
let verifymois1:any
let verifyannee1:any
let reporttva:any
let selected = (element) => element ===this.option171Value;
if(this.option171Value!='01')
{
  mois1=mois.findIndex(selected)
  desiredmois1=mois[+(mois1-1)]
  this.DecfiscmensService.decfiscmenss.find(e => verifymois1=(e.mois === desiredmois1&&e.annee === this.option54Value));

  console.log(verifymois1)
  if(verifymois1)
{ 
  let tvarecuperable=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvarecuperableautreachat.achatlocauxtva+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvarecuperableautreachat.achatimportetva+ 
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvarecuperableequipement.achatlocauxtva+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvarecuperableequipement.achatimportetva+ 
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvarecuperableimmobilier.achatlocauxtva+
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.reporttvamoisprecedent
  let tvacollecte=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvacollecter19.tvaammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.tvacollecter.tvaammount+ Math.trunc(((+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.locationhabitationmeuble.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.locationusagecommercial.htammount
  + +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.operationlotissement.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.interetpercue.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois===desiredmois1&&p.annee===this.option54Value))[0].impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
   
reporttva=(tvarecuperable-tvacollecte).toFixed(3)
console.log(tvarecuperable,tvacollecte)
if(reporttva>0)
{
  this.option64Value=reporttva
}
}
}
else if(this.option171Value==='01')
{
  this.DecfiscmensService.decfiscmenss.find(e => verifymois1=(e.mois === '12'&&+e.annee === +this.option54Value-1));
  if(verifymois1)
{ 
  let tvarecuperable=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvarecuperableautreachat.achatlocauxtva+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvarecuperableautreachat.achatimportetva+ 
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvarecuperableequipement.achatlocauxtva+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvarecuperableequipement.achatimportetva+ 
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvarecuperableimmobilier.achatlocauxtva+
  +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.reporttvamoisprecedent
  let tvacollecte=+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvacollecter19.tvaammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.tvacollecter.tvaammount+ Math.trunc(((+(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.locationhabitationmeuble.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.locationusagecommercial.htammount
  + +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.operationlotissement.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.interetpercue.htammount+ +(this.DecfiscmensService.decfiscmenss.filter(p => p.mois==='12'&&+p.annee===+this.option54Value-1))[0].impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
   
reporttva=(tvarecuperable-tvacollecte).toFixed(3)
console.log(tvarecuperable,tvacollecte)
if(reporttva>0)
{
  this.option64Value=reporttva
}
}
}


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
            this.showtvaverif=false;
            this.option68Value=false;
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
        this.resettimbreall()
        this.showtimbretab=true;
        this.option52Value=true;
        this.showtimbreverif=true;
        this.option69Value=false;

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
            this.showtimbreverif=false;
            this.option69Value=false;
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
        if (this.option51Value)
        {
        const chiffreaffaireht=+this.standardtvacollecteform.get('chiffreaffaireht').value
        const chiffreaffaireht19=+this.standardtvacollecte19form.get('chiffreaffaireht').value
        const taux=+this.tauxtva
        const chiffreaffairettc=+(Math.trunc(((chiffreaffaireht*taux)+(chiffreaffaireht))*1000)/1000)+ +Math.trunc(((chiffreaffaireht19*0.19)+(chiffreaffaireht19))*1000)/1000
        this.standardtclform.patchValue({
          chiffreaffairettc:chiffreaffairettc
        })
      }
        text2.style.display = "block";
        this.showtcltab=true;
        this.option53Value=true;
        this.showtclverif=true;
        this.option70Value=false;

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
            this.showtclverif=false;
            this.option70Value=false;
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
    myFunction30() {
      var checkbox:any = document.getElementById("myCheck30");
      var text2 = document.getElementById("tabcontainer");
      
      if (checkbox.checked == true){
        if (this.option51Value)
        {
        const chiffreaffaireht=+this.standardtvacollecteform.get('chiffreaffaireht').value
        const chiffreaffaireht19=+this.standardtvacollecte19form.get('chiffreaffaireht').value
        const taux=+this.standardfspform.get('taux').value
        const montantcontribution=+ Math.trunc((+(chiffreaffaireht+ +chiffreaffaireht19)*+taux)*1000)/1000;
        this.standardfspform.patchValue({
          chiffreaffaireht:chiffreaffaireht+chiffreaffaireht19,
          montantcontribution:montantcontribution
        })
      }
        text2.style.display = "block";
        this.showfsptab=true;
        this.option172Value=true;
        this.showfspverif=true;
        this.option173Value=false;

      } else {
        Swal.fire({
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au type d\'impôt FSSP, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
            this.resetfspall();
            this.showfsptab=false;
            this.option172Value=false;
            this.showfspverif=false;
            this.option173Value=false;
          }
          else{
            checkbox.checked = true
            this.option172Value=true
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
          title: 'Vous êtes sur le point de réinitialiser tous les donnés relatifs au autres revenus soumis à la TVA, voulez vous continuer?',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Réinitialiser',
          cancelButtonText: 'Annuler',
        }).then((result) => {
          if (result.value) {
            
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
    myFunction24() {
      var checkbox:any = document.getElementById("myCheck24");
      
     
      if (checkbox.checked == true){
        
        if (this.standardlocationresidentesphysiqueform.get('netammount').value==null&&this.standardtraitementsalaireform.get('brutsalary').value==null
        &&this.standardlocationresidentesmoraleform.get('netammount').value==null&&this.standardlocationnonresidentesphysiquesform.get('netammount').value==null&&
        this.standardlocationnonresidentesmoralesform.get('netammount').value==null&&this.standardhonorairephysiquereelform.get('netammount').value==null&&
        this.standardhonorairephysiquenonreelform.get('netammount').value==null&&this.standardhonorairegroupementsform.get('netammount').value==null&&
        this.standardmontant15form.get('netammount').value==null&&this.standardmontant10form.get('netammount').value==null&&
        this.standardmontantindividuelform.get('netammount').value==null&&this.standardmontantautreform.get('netammount').value==null&&this.autreform.get('ammounts').value==null)
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot retenue à la source!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false
           this.declareneantretenue()
    
          }
          else{
            this.loading=false
            checkbox.checked = false
            this.option65Value=false
            this.option48Value=false
            this.showretenuetab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    myFunction25() {
      var checkbox:any = document.getElementById("myCheck25");
      
     
      if (checkbox.checked == true){
        
        if (this.standardtfpform.get('avanceammount').value==null&&this.standardtfpform.get('salairesnonsoumistfp').value==null
        &&this.standardtfpform.get('tfpammountreportmoisprecedent').value==null&&this.standardtfpform.get('basetfp').value==null)
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot TFP!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false

           this.declareneanttfp()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option66Value=false
            this.option49Value=false
            this.showtfptab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    myFunction26() {
      var checkbox:any = document.getElementById("myCheck26");
      
     
      if (checkbox.checked == true){
        if (this.standardfoprolosform.get('salairesnonsoumisfoprolos').value==null&&this.standardfoprolosform.get('foprolosammount').value==null
        &&this.standardfoprolosform.get('basefoprolos').value==null)
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot FOPROLOS!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false

           this.declareneantfoprolos()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option67Value=false
            this.option50Value=false
            this.showfoprolostab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    myFunction27() {
      var checkbox:any = document.getElementById("myCheck27");
      if (checkbox.checked == true){
        if (this.standardtvacollecteform.get('chiffreaffaireht').value==null&&this.standardtvacollecte19form.get('chiffreaffaireht').value==null&&this.standardlocationusagehabitationmeubleform.get('ammountht').value==null
        &&this.standardlocationusagecommercialform.get('ammountht').value==null&&this.standardoperationlotissementform.get('ammountht').value==null&&
        this.standardinteretpercueform.get('ammountht').value==null&&this.standardautretvaspecialform.get('ammountht').value==null&&
        this.standardtvarecuperableimmobilierform.get('achatlocauxht').value==null&&this.standardtvarecuperableequipementform.get('achatlocauxht').value==null&&
        this.standardtvarecuperableautreachatform.get('achatlocauxht').value==null)
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot TVA!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false

           this.declareneanttva()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option68Value=false
            this.option51Value=false
            this.showtvatab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
      
      }
    }
    myFunction28() {
      var checkbox:any = document.getElementById("myCheck28");
      if (checkbox.checked == true)
      {
        if (this.standarddroittimbreform.get('nombrenotehonoraire').value==null&&this.standarddroittimbreform.get('totaldroittimbre').value==null
       )
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot Droit De Timbre!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false
 
           this.declareneanttimbre()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option69Value=false
            this.option52Value=false
            this.showtimbretab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    myFunction29() {
      var checkbox:any = document.getElementById("myCheck29");
      if (checkbox.checked == true){
        if (this.standardtclform.get('chiffreaffairettc').value==null&&this.standardtclform.get('tclapayer').value==null
       )
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot TCL!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false
 
           this.declareneanttcl()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option70Value=false
            this.option53Value=false
            this.showtcltab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    myFunction31() {
      var checkbox:any = document.getElementById("myCheck31");
      if (checkbox.checked == true){
        if (this.standardfspform.get('chiffreaffaireht').value==null&&this.standardfspform.get('montantcontribution').value==null
       )
        {
           
        Swal.fire({
          title: 'Vous n\'avez saisi aucun montant relatif à l\'impot FSSP!Veuillez indiquer votre décision',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Déclarer néant',
    cancelButtonText: 'Supprimer impot',
        }).then((result) => {
          if (result.value) {
            this.loading=false
 
           this.declareneantfsp()
    
          }
          else{
            this.loading=false

            checkbox.checked = false
            this.option173Value=false
            this.option172Value=false
            this.showfsptab=false
          }
    
        }).catch(() => {
          Swal.fire('opération non aboutie!');
        }); 
        
      }
      } else {
         
        
      }
    }
    reloadPage(): void {
  
      window.location.reload();
      
    }
}


  