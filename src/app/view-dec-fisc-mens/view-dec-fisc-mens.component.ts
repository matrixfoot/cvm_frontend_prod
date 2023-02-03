import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { Decfiscmens } from '../models/dec-fisc-mens';
import Swal from 'sweetalert2';
import { ExcelService } from '../services/generate.excel.service';
import * as logoFile from '../_helpers/declogo';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';import {saveAs} from 'file-saver';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ViewportScroller } from '@angular/common';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { interval, Subscription } from 'rxjs';
import { Sort } from '../_helpers/sort';
import { CommunService } from '../services/commun';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

pdfMake.vfs = pdfFonts.pdfMake.vfs; 

@Component({
  selector: 'app-view-dec-fisc-mens',
  templateUrl: './view-dec-fisc-mens.component.html',
  styleUrls: ['./view-dec-fisc-mens.component.scss']
})
export class ViewDecFiscMensComponent implements OnInit {
maincontainer=false;
  arrayBuffer:any;
  file:File;
  annee: string;
  sousactivite: string;
  showgenerate=false
  collab: any[]=[];
  private usersSub: Subscription;
  users: User[]=[];
  autretvacollecte=0.000;
  htsum=0.000;
  tvasum=0.000;
  ht19sum=0.000;
  tva19sum=0.000;
  prenomcollab: any;
  nomcollab: any;
  filtredcollab: any[];
  allstatuts: any[];
  sortedallstatuts: any[];
  public countdown=0
  public interval$ = interval(1000);
  selected: any;
  statusadmin: string[];
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
public decfiscmens=new Decfiscmens;
  public errormsg:string;
  loading=false;
  public tfpapayer: any
  public tfpareporter: any
  public statut: any
  public motif: any
  public activite:string
  currentUser: any;
  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '95vw',
    height: '80vh'
  };
  public optionValue:any
  public option71Value=0.000
  public option72Value=0.000
  public option64Value:any
  public honorairesum=0.000
  public honoraireretenue=0.000
  public type1:any
  public type2:any
  public type3:any
  public type4:any
  public type5:any
  public type6:any
  public type7:any

  foprolosapayer=0.000
  tfpapayertotal=0.000
  tfpareportertotal=0.000
  totalretenueammount=0.000;
  totaltfpammount=0.000;
  totalfoprolosammount=0.000;
  totalreporttvaammount=0.000;
  preptotaltvaammount=0.000;
  totaltvaammount=0.000;
  totaltimbreammount=0.000;
  totaltclammount=0.000;
  totalfspammount=0.000;
  totaldeclaration=0.000;
  minimumperceptionammount=0.000;
  preptotaldeclaration=0.000;
  prepminimumperceptionammount=0.000;
  tvacollecte=0.000
  tvacollecte19=0.000
  tvacollecte1=0.000
  tvacollecte2=0.000
  tvacollecte3=0.000
  tvacollecte4=0.000
  tvacollecte5=0.000
  tvacollecte6=0.000
  tvarecuperable=0.000
  autreform: FormGroup;
  constructor(private router: Router,private scroller: ViewportScroller,
    private route: ActivatedRoute,
    private dec: DecfiscmensService,    private deccompt: DeccomptabiliteService,

    private token: TokenStorageService,private commun: CommunService,
    private excelService: ExcelService,
    private userservice: UserService,
    ){} 
  ngOnInit() {
    this.loading = true;
    this.statusadmin=this.commun.statusadmin
    this.currentUser = this.token.getUser();
  if(this.currentUser.role==='admin'||this.currentUser.role==='supervisor')
  {
    this.interval$.subscribe(value => this.countdown=value), this.countdown=0
    this.userservice.getAll()
    this.usersSub = this.userservice.users$.subscribe(
      (users) => {
        this.users = users;
        this.loading = false;
        let filtred=[]
        filtred=this.deccompt.filterByValue(this.users,'desactive')
        this.collab=filtred.filter((user) => user.usertype === ('Collaborateur'||'collaborateur'))
        },
      (error) => {
        this.loading = false;
        this.errormsg=error.message;
      }
    );
    
  }
    this.route.params.subscribe(
      (params: Params) => {
        this.dec.getDecfiscmensreqById(params.id).then(
          (decfiscmens: Decfiscmens) => {
            this.allstatuts=[]
            const sort = new Sort();
            this.loading = false;
            this.decfiscmens = decfiscmens;
            this.allstatuts=this.allstatuts.concat(this.decfiscmens.statutadmin,this.decfiscmens.statutcollab)
            this.sortedallstatuts=this.allstatuts.sort(sort.startSort('datefin','asc',''));
            if(this.decfiscmens.affecte)
            {
              this.optionValue=this.decfiscmens.affecte
            }
            this.userservice.getUserById(this.decfiscmens.userId).then(
              (user: User) => {
                console.log(user)
                if(!user)
                {
                  if (this.decfiscmens.regimefiscalimpot==='Réel'&&this.decfiscmens.annee=='2023')  
                  {
                   this.prepminimumperceptionammount=20.000
                  }  
                  else if (this.decfiscmens.regimefiscalimpot==='Forfait D\'assiette'&&this.decfiscmens.annee=='2023') 
                  {
                   this.prepminimumperceptionammount=10.000
                
                  }
                  else if (this.decfiscmens.regimefiscalimpot==='Réel'&&this.decfiscmens.annee!='2023')  
                  {
                   this.prepminimumperceptionammount=10.000
                  }  
                  else if (this.decfiscmens.regimefiscalimpot==='Forfait D\'assiette'&&this.decfiscmens.annee!='2023') 
                  {
                   this.prepminimumperceptionammount=5.000
                
                  }
              if(this.totalreporttvaammount!=0&&+this.totalretenueammount==0&&+this.totaltfpammount==0&&+this.totalfoprolosammount==0
                &&+this.totaltimbreammount==0&&+this.totaltclammount==0&&+this.totalfspammount==0)
              {
                console.log('here')
                this.prepminimumperceptionammount=0.000
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
            }
            if (user)
            {
              if (user.regimefiscalimpot==='Réel'&&this.decfiscmens.annee=='2023')  
              {
               this.prepminimumperceptionammount=20.000
              }  
              else if (user.regimefiscalimpot==='Forfait D\'assiette'&&this.decfiscmens.annee=='2023') 
              {
               this.prepminimumperceptionammount=10.000
            
              }
              else if (user.regimefiscalimpot==='Réel'&&this.decfiscmens.annee!='2023')  
              {
               this.prepminimumperceptionammount=10.000
              }  
              else if (user.regimefiscalimpot==='Forfait D\'assiette'&&this.decfiscmens.annee!='2023') 
              {
               this.prepminimumperceptionammount=5.000
            
              }
          if(this.totalreporttvaammount!=0&&+this.totalretenueammount==0&&+this.totaltfpammount==0&&+this.totalfoprolosammount==0
            &&+this.totaltimbreammount==0&&+this.totaltclammount==0&&+this.totalfspammount==0)
          {
            console.log('here')
            this.prepminimumperceptionammount=0.000
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
            }     
              }
            )
            console.log(this.decfiscmens)
            this.activite=this.decfiscmens.activite
            this.sousactivite=this.decfiscmens.sousactivite
            this.tfpapayer=this.decfiscmens.impottype3.tfppayer
            this.tfpareporter=this.decfiscmens.impottype3.tfpreporter
            this.annee=this.decfiscmens.annee
            this.type1=this.decfiscmens.impottype1.type
            this.type2=this.decfiscmens.impottype2.type
            this.type3=this.decfiscmens.impottype3.type
            this.type4=this.decfiscmens.impottype4.type
            this.type5=this.decfiscmens.impottype5.type
            this.type6=this.decfiscmens.impottype6.type
            //@ts-ignore
            if(this.decfiscmens.statutadmin.find(e => e.statut==='Clôturé'))
            {
              console.log(this.statut)
              this.showgenerate=true
            }
            if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
            this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
            ||this.activite=='Sage-femmes' )
            {
              this.type7=this.decfiscmens.impottype7.type 
            }
            

            if (+this.decfiscmens.impottype1.honoraire1.montantbrut!==0 ||+this.decfiscmens.impottype1.honoraire3.montantbrut!==0 )
            {this.honorairesum= (+this.decfiscmens.impottype1.honoraire1.montantbrut + +this.decfiscmens.impottype1.honoraire3.montantbrut)
              this.honoraireretenue=Math.trunc((this.honorairesum* 0.03)*1000)/1000 }
            
              
              
              if (+this.decfiscmens.impottype2.locationhabitationmeuble.htammount!=0 ||+this.decfiscmens.impottype2.locationusagecommercial.htammount!=0||
                +this.decfiscmens.impottype2.operationlotissement.htammount!=0 ||+this.decfiscmens.impottype2.interetpercue.htammount!=0||+this.decfiscmens.impottype2.autretvaspecial.htammount!=0  )      
    {
    this.option71Value= +this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
    + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount
    this.option72Value= Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
      + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000 
      if(decfiscmens.annee=='2023'&&this.activite=='Architectes'||decfiscmens.annee=='2023'&&this.activite=='Syndic des copropriétaires'||decfiscmens.annee=='2023'&&this.activite=='Ingénieurs-conseil'
      ||decfiscmens.annee=='2023'&&this.activite=='Dessinateurs'||decfiscmens.annee=='2023'&&this.activite=='Géomètres'
      ||decfiscmens.annee=='2023'&&this.activite=='Topographes'||decfiscmens.annee=='2023'&&this.activite=='Notaire'||
      decfiscmens.annee=='2023'&&this.activite=='Huissiers notaire'||decfiscmens.annee=='2023'&&this.activite=='Interprètes'||
      decfiscmens.annee=='2023'&&this.activite=='Expert'||decfiscmens.annee=='2023'&&this.activite=='Avocat'||this.activite=='consultant')
      {
this.htsum=+this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht+ +this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
+ +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount         
this.tvasum=+this.decfiscmens.impottype2.tvacollecter.tvaammount+ +Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
+ +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
      }
else if
(decfiscmens.annee=='2023'&&decfiscmens.activite=='Médecin'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Infirmier'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Masseur'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Physiothérapeute'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Ergothérapeute'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Psychomotricien'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Diététicien'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Orthophoniste'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Orthoptiste'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Sage-femmes')
      {
        if(this.decfiscmens.impottype2.tvacollecter19)
      {
        this.htsum=+this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht+ +this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
        + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount        
        this.tvasum=+this.decfiscmens.impottype2.tvacollecter19.tvaammount+ +Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
          + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
      }
       else
       {
        this.htsum=+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
        + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount        
        this.tvasum=+Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
          + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
       } 
      }
      else
      {
        this.htsum=+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
        + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount        
        this.tvasum=+Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
          + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
      }
    } 


if (+this.decfiscmens.impottype2.locationhabitationmeuble.htammount==0 &&+this.decfiscmens.impottype2.locationusagecommercial.htammount==0&&
      +this.decfiscmens.impottype2.operationlotissement.htammount==0 &&+this.decfiscmens.impottype2.interetpercue.htammount==0&&+this.decfiscmens.impottype2.autretvaspecial.htammount==0  )
  {
    if
    (decfiscmens.annee=='2023'&&this.activite=='Architectes'||decfiscmens.annee=='2023'&&this.activite=='Syndic des copropriétaires'||decfiscmens.annee=='2023'&&this.activite=='Ingénieurs-conseil'
    ||decfiscmens.annee=='2023'&&this.activite=='Dessinateurs'||decfiscmens.annee=='2023'&&this.activite=='Géomètres'
    ||decfiscmens.annee=='2023'&&this.activite=='Topographes'||decfiscmens.annee=='2023'&&this.activite=='Notaire'||
    decfiscmens.annee=='2023'&&this.activite=='Huissiers notaire'||decfiscmens.annee=='2023'&&this.activite=='Interprètes'||
    decfiscmens.annee=='2023'&&this.activite=='Expert'||decfiscmens.annee=='2023'&&this.activite=='Avocat'||this.activite=='consultant')
    {
this.htsum=+this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht         
this.tvasum=+this.decfiscmens.impottype2.tvacollecter.tvaammount
    }
if
(decfiscmens.annee=='2023'&&decfiscmens.activite=='Médecin'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Infirmier'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Masseur'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Physiothérapeute'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Ergothérapeute'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Psychomotricien'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Diététicien'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Orthophoniste'||decfiscmens.annee=='2023'&&decfiscmens.activite=='Orthoptiste'||
decfiscmens.annee=='2023'&&decfiscmens.activite=='Sage-femmes')
    {
      if(this.decfiscmens.impottype2.tvacollecter19)
      {
        this.htsum=+this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht 
        this.tvasum=+this.decfiscmens.impottype2.tvacollecter19.tvaammount
      }
      
    }
  }    
      
  this.totalretenueammount= +this.decfiscmens.impottype1.traitementetsalaire.retenuealasource+ +this.decfiscmens.impottype1.traitementetsalaire.contributionsociale+ +this.decfiscmens.impottype1.location1.montantretenue
  + +this.decfiscmens.impottype1.location2.montantretenue+ +this.decfiscmens.impottype1.location3.montantretenue+ +this.decfiscmens.impottype1.location4.montantretenue
  + +this.decfiscmens.impottype1.honoraire2.montantretenue+ +this.honoraireretenue
      + +this.decfiscmens.impottype1.montant10001.montantretenue+ +this.decfiscmens.impottype1.montant10002.montantretenue+ 
  +this.decfiscmens.impottype1.montant10003.montantretenue+ +this.decfiscmens.impottype1.montant10004.montantretenue

  

  this.tvarecuperable=+this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva+ +this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva+ 
  +this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva+ +this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva+ 
  +this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva
  if(this.decfiscmens.impottype2.tvacollecter19)
  {
    this.tvacollecte=+this.decfiscmens.impottype2.tvacollecter.tvaammount+ +this.decfiscmens.impottype2.tvacollecter19.tvaammount+ Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
      + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000    
  }
  else
  {
    this.tvacollecte=+this.decfiscmens.impottype2.tvacollecter.tvaammount+  Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
      + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000    
  }
  
  this.preptotaltvaammount=this.tvacollecte-this.tvarecuperable
  this.option64Value=this.decfiscmens.impottype2.reporttvamoisprecedent
console.log(this.preptotaltvaammount)
  if (this.preptotaltvaammount >= 0 && this.preptotaltvaammount-this.option64Value>=0)
  {
    this.totalreporttvaammount=0
    this.totaltvaammount=this.preptotaltvaammount-this.option64Value
  }
  else 
  {
  this.totaltvaammount=0
  this.totalreporttvaammount=this.option64Value-this.preptotaltvaammount
  }



  this.totalfoprolosammount= +this.decfiscmens.impottype4.montantfoprolos


    
      if (+this.decfiscmens.impottype3.tfppayer > 0)
      {
        console.log(this.decfiscmens.impottype3.tfppayer)
      this.totaltfpammount= +this.decfiscmens.impottype3.tfppayer
      } 
      else 
      {
        this.totaltfpammount= 0
      }
  this.totaltimbreammount=+this.decfiscmens.impottype5.totaldroittimbre
  this.totaltclammount=+this.decfiscmens.impottype6.tclpayer 
  if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
  this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
  ||this.activite=='Sage-femmes')
            { 
  this.totalfspammount=+this.decfiscmens.impottype7.montantcontribution
            }
this.preptotaldeclaration=+this.totalretenueammount+ +this.totaltfpammount+ +this.totalfoprolosammount+ +this.totaltvaammount+ +this.totaltimbreammount+ +this.totaltclammount
+ +this.totalfspammount
console.log(this.totalretenueammount,this.totaltfpammount,this.totalfoprolosammount,this.totaltvaammount,this.totaltimbreammount,this.totaltclammount)
console.log(this.honoraireretenue)

          }
        );
      }
    );

  }
  filterusers(id:string)
{
  if(this.collab.length>0)
{
  this.filtredcollab=this.deccompt.filterByValue(this.collab,id)
  if(this.filtredcollab.length>0)
  {
    this.prenomcollab=this.filtredcollab[0].firstname
    this.nomcollab=this.filtredcollab[0].lastname
  }
}
 
  
}
public payement(): void {
  const self =this
  const data = document.getElementById('payementinvoice');
  html2canvas(data,{scale:2}).then((canvas:any) => {
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    heightLeft -= pageHeight;
    const doc = new jsPDF('p', 'mm');
    doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pageHeight;
    }
     
    doc.save(`facture_${self.decfiscmens.mois}_${self.decfiscmens.annee}`);
  });
  
  
  
    } 
  public openPDF(): void {
this.loading=true
const self =this
const data = document.getElementById('deccont');
html2canvas(data,{scale:2}).then((canvas:any) => {
  const imgWidth = 208;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;
  heightLeft -= pageHeight;
  const doc = new jsPDF('p', 'mm');
  doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    doc.addPage();
    doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    heightLeft -= pageHeight;
  }
  setTimeout(() => {self.loading=false
        
  }, 5000); 
  doc.save(`Déclaration mensuelle_${self.decfiscmens.mois}_${self.decfiscmens.annee}`);
});



  } 

  load(){
    const self =this
    var url = "https://res.cloudinary.com/dfodbn7qv/raw/upload/v1666542457/jwobokudq4bih0xp4j9u.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
  
    oReq.onload = function(e) {
    var arraybuffer = oReq.response;
  
  
    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");
  
    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});
  
    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    let x = XLSX.utils.sheet_to_json(worksheet,{raw:true});
    console.log(x);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(x);
    console.log('worksheet',worksheet2);
    const workbook2: XLSX.WorkBook = { Sheets: { 'data': worksheet2 }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook2, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    self.saveAsExcelFile(excelBuffer, 'test');
  }
  
  oReq.send();
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    load2 () {
      const self = this
      fetch("https://res.cloudinary.com/dfodbn7qv/raw/upload/v1666542457/jwobokudq4bih0xp4j9u.xlsx") // fetch the remote url
        .then((response) => {
          response.blob().then((fileBlob) => { // convert the excel file to blob
          let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                   })
        })
        self.maincontainer=true
    }
 
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  bottom(): void {
    this.scroller.scrollToAnchor("bottom");
  }
  top(): void {
    this.scroller.scrollToAnchor("top");
  }
  async decideadmin()
  {
    this.loading = true;
    const decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: this.decfiscmens.impottype1.type, traitementetsalaire: { salairebrut:this.decfiscmens.impottype1.traitementetsalaire.salairebrut, 
      salaireimposable: this.decfiscmens.impottype1.traitementetsalaire.salaireimposable, retenuealasource:this.decfiscmens.impottype1.traitementetsalaire.retenuealasource,
      contributionsociale:this.decfiscmens.impottype1.traitementetsalaire.contributionsociale, }, 
    location1: { type: this.decfiscmens.impottype1.location1.type,montantbrut:this.decfiscmens.impottype1.location1.montantbrut, taux:this.decfiscmens.impottype1.location1.taux,
       montantnet:this.decfiscmens.impottype1.location1.montantnet, montantretenue:this.decfiscmens.impottype1.location1.montantretenue, },
       location2: { type: this.decfiscmens.impottype1.location2.type,montantbrut:this.decfiscmens.impottype1.location2.montantbrut, taux:this.decfiscmens.impottype1.location2.taux,
        montantnet:this.decfiscmens.impottype1.location2.montantnet, montantretenue:this.decfiscmens.impottype1.location2.montantretenue, },
        location3: { type: this.decfiscmens.impottype1.location3.type,montantbrut:this.decfiscmens.impottype1.location3.montantbrut, taux:this.decfiscmens.impottype1.location3.taux,
          montantnet:this.decfiscmens.impottype1.location3.montantnet, montantretenue:this.decfiscmens.impottype1.location3.montantretenue, },
          location4: { type: this.decfiscmens.impottype1.location4.type,montantbrut:this.decfiscmens.impottype1.location4.montantbrut, taux:this.decfiscmens.impottype1.location4.taux,
            montantnet:this.decfiscmens.impottype1.location4.montantnet, montantretenue:this.decfiscmens.impottype1.location4.montantretenue, },
     honoraire1: {  type:this.decfiscmens.impottype1.honoraire1.type,montantbrut:this.decfiscmens.impottype1.honoraire1.montantbrut, taux:this.decfiscmens.impottype1.honoraire1.taux,
       montantnet:this.decfiscmens.impottype1.honoraire1.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire1.montantretenue,},
  
     honoraire2: {  type:this.decfiscmens.impottype1.honoraire2.type,montantbrut:this.decfiscmens.impottype1.honoraire2.montantbrut, taux:this.decfiscmens.impottype1.honoraire2.taux,
       montantnet:this.decfiscmens.impottype1.honoraire2.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire2.montantretenue,},
  
     honoraire3: {  type:this.decfiscmens.impottype1.honoraire3.type,montantbrut:this.decfiscmens.impottype1.honoraire3.montantbrut, taux:this.decfiscmens.impottype1.honoraire3.taux,
       montantnet:this.decfiscmens.impottype1.honoraire3.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire3.montantretenue,},
       montant10001: {  type:this.decfiscmens.impottype1.montant10001.type,montantbrut:this.decfiscmens.impottype1.montant10001.montantbrut, taux:this.decfiscmens.impottype1.montant10001.taux,
      montantnet:this.decfiscmens.impottype1.montant10001.montantnet, montantretenue:this.decfiscmens.impottype1.montant10001.montantretenue,},
     montant10002: {  type:this.decfiscmens.impottype1.montant10002.type,montantbrut:this.decfiscmens.impottype1.montant10002.montantbrut,taux:this.decfiscmens.impottype1.montant10002.taux,
       montantnet:this.decfiscmens.impottype1.montant10002.montantnet, montantretenue:this.decfiscmens.impottype1.montant10002.montantretenue,},
       montant10003: {  type:this.decfiscmens.impottype1.montant10003.type,montantbrut:this.decfiscmens.impottype1.montant10003.montantbrut, taux:this.decfiscmens.impottype1.montant10003.taux,
         montantnet:this.decfiscmens.impottype1.montant10003.montantnet, montantretenue:this.decfiscmens.impottype1.montant10003.montantretenue,}, 
    montant10004: {  type:this.decfiscmens.impottype1.montant10004.type,montantbrut:this.decfiscmens.impottype1.montant10004.montantbrut, taux:this.decfiscmens.impottype1.montant10004.taux,
      montantnet:this.decfiscmens.impottype1.montant10004.montantnet, montantretenue:this.decfiscmens.impottype1.montant10004.montantretenue,},
       autre: this.decfiscmens.impottype1.autre}
    decfiscmens.impottype2={ type:this.decfiscmens.impottype2.type,reporttvamoisprecedent:this.decfiscmens.impottype2.reporttvamoisprecedent,tvacollecter:{
      type:this.decfiscmens.impottype2.tvacollecter.type,
      chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht,
      tvaammount:this.decfiscmens.impottype2.tvacollecter.tvaammount,
      ammountttc:this.decfiscmens.impottype2.tvacollecter.ammountttc,
      
      },tvacollecter19:{
        type:this.decfiscmens.impottype2.tvacollecter.type,
        chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht,
        tvaammount:this.decfiscmens.impottype2.tvacollecter19.tvaammount,
        ammountttc:this.decfiscmens.impottype2.tvacollecter19.ammountttc,
        
        },tvarecuperableimmobilier:{
          type:this.decfiscmens.impottype2.tvarecuperableimmobilier.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva,
      
      
      },
      tvarecuperableequipement:{
          type:this.decfiscmens.impottype2.tvarecuperableequipement.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableequipement.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva,
      
      
      },
      tvarecuperableautreachat:{
          type:this.decfiscmens.impottype2.tvarecuperableautreachat.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva,
      
      
      },
      locationhabitationmeuble:{
          type:this.decfiscmens.impottype2.locationhabitationmeuble.type,
          htammount:this.decfiscmens.impottype2.locationhabitationmeuble.htammount,
          tvaammount:this.decfiscmens.impottype2.locationhabitationmeuble.tvaammount,
          ttcammount:this.decfiscmens.impottype2.locationhabitationmeuble.ttcammount,
          },
      locationusagecommercial:{
        type:this.decfiscmens.impottype2.locationusagecommercial.type,
        htammount:this.decfiscmens.impottype2.locationusagecommercial.htammount,
        tvaammount:this.decfiscmens.impottype2.locationusagecommercial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.locationusagecommercial.ttcammount,
              },
      operationlotissement:{
        type:this.decfiscmens.impottype2.operationlotissement.type,
        htammount:this.decfiscmens.impottype2.operationlotissement.htammount,
        tvaammount:this.decfiscmens.impottype2.operationlotissement.tvaammount,
        ttcammount:this.decfiscmens.impottype2.operationlotissement.ttcammount,
                  },
      interetpercue:{
        type:this.decfiscmens.impottype2.interetpercue.type,
        htammount:this.decfiscmens.impottype2.interetpercue.htammount,
        tvaammount:this.decfiscmens.impottype2.interetpercue.tvaammount,
        ttcammount:this.decfiscmens.impottype2.interetpercue.ttcammount,
                      },
      autretvaspecial:{
        type:this.decfiscmens.impottype2.autretvaspecial.type,
        htammount:this.decfiscmens.impottype2.autretvaspecial.htammount,
        tvaammount:this.decfiscmens.impottype2.autretvaspecial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.autretvaspecial.ttcammount,
                          taux:this.decfiscmens.impottype2.autretvaspecial.taux,
                          }    }
                          decfiscmens.impottype3={ type:this.decfiscmens.impottype3.type,
                            basetfp:this.decfiscmens.impottype3.basetfp,
                                                      tfpsalairebrut:this.decfiscmens.impottype3.tfpsalairebrut,
                            montanttfpmois:this.decfiscmens.impottype3.montanttfpmois,
                            reporttfpmoisprecedent:this.decfiscmens.impottype3.reporttfpmoisprecedent,
                            montantavance:this.decfiscmens.impottype3.montantavance,
                            tfppayer:this.decfiscmens.impottype3.tfppayer,
                            tfpreporter:this.decfiscmens.impottype3.tfpreporter,
                            salairesnonsoumistfp:this.decfiscmens.impottype3.salairesnonsoumistfp}
                            decfiscmens.impottype4={ type:this.decfiscmens.impottype4.type,
                            basefoprolos:this.decfiscmens.impottype4.basefoprolos,
                            foprolossalairebrut:this.decfiscmens.impottype4.foprolossalairebrut,
                            montantfoprolos:this.decfiscmens.impottype4.montantfoprolos,
                            salairesnonsoumisfoprolos:this.decfiscmens.impottype4.salairesnonsoumisfoprolos}
                            decfiscmens.impottype5={ type:this.decfiscmens.impottype5.type,
                            nombrenotehonoraire:this.decfiscmens.impottype5.nombrenotehonoraire,
                totaldroittimbre:this.decfiscmens.impottype5.totaldroittimbre,}
                decfiscmens.impottype6={ type:this.decfiscmens.impottype6.type,
                chiffreaffairettc:this.decfiscmens.impottype6.chiffreaffairettc,
                tclpayer:this.decfiscmens.impottype6.tclpayer,}
                decfiscmens.impottype7={ type:this.decfiscmens.impottype7.type,
                  chiffreaffaireht:this.decfiscmens.impottype7.chiffreaffaireht,
                  montantcontribution:this.decfiscmens.impottype7.montantcontribution,}
                  decfiscmens.statutadmin=this.decfiscmens.statutadmin
                  decfiscmens.statutcollab=this.decfiscmens.statutcollab
                   //@ts-ignore
  if(this.decfiscmens.statutadmin.length>0)
  {
    //@ts-ignore
    if(this.decfiscmens.statutadmin[this.decfiscmens.statutadmin.length-1].statut=='en cours de supervision')
    { 
      Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme supervisé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
        }).then((result) => {
        if (result.isConfirmed) {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'supervisé',
            motif:'',
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          );        
        }
        else if (result.isDenied)
        {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:'',
            datefin:Date.now(),
            duree:this.countdown,     
          })
          decfiscmens.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          ); 
        }
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    //@ts-ignore
    if(this.decfiscmens.statutadmin[this.decfiscmens.statutadmin.length-1].statut=='en cours de validation')
    { 
      await Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme validé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
      }).then((result) => {
        if (result.isConfirmed) 
        {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'validé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          );        
        }
        else if (result.isDenied)
        {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          decfiscmens.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          ); 
        }
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    //@ts-ignore
    if(this.decfiscmens.statutadmin[this.decfiscmens.statutadmin.length-1].statut=='en cours de clôture')
    { 
      Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme clôturé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
        }).then((result) => {
        if (result.isConfirmed) {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'clôturé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          );        
        }
        else if (result.isDenied)
        {
          decfiscmens.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          decfiscmens.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration modifiée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['admin-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          ); 
        }
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    
  }
   
  }
  async traite()
  {
    this.loading = true;
    const decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: this.decfiscmens.impottype1.type, traitementetsalaire: { salairebrut:this.decfiscmens.impottype1.traitementetsalaire.salairebrut, 
      salaireimposable: this.decfiscmens.impottype1.traitementetsalaire.salaireimposable, retenuealasource:this.decfiscmens.impottype1.traitementetsalaire.retenuealasource,
      contributionsociale:this.decfiscmens.impottype1.traitementetsalaire.contributionsociale, }, 
    location1: { type: this.decfiscmens.impottype1.location1.type,montantbrut:this.decfiscmens.impottype1.location1.montantbrut, taux:this.decfiscmens.impottype1.location1.taux,
       montantnet:this.decfiscmens.impottype1.location1.montantnet, montantretenue:this.decfiscmens.impottype1.location1.montantretenue, },
       location2: { type: this.decfiscmens.impottype1.location2.type,montantbrut:this.decfiscmens.impottype1.location2.montantbrut, taux:this.decfiscmens.impottype1.location2.taux,
        montantnet:this.decfiscmens.impottype1.location2.montantnet, montantretenue:this.decfiscmens.impottype1.location2.montantretenue, },
        location3: { type: this.decfiscmens.impottype1.location3.type,montantbrut:this.decfiscmens.impottype1.location3.montantbrut, taux:this.decfiscmens.impottype1.location3.taux,
          montantnet:this.decfiscmens.impottype1.location3.montantnet, montantretenue:this.decfiscmens.impottype1.location3.montantretenue, },
          location4: { type: this.decfiscmens.impottype1.location4.type,montantbrut:this.decfiscmens.impottype1.location4.montantbrut, taux:this.decfiscmens.impottype1.location4.taux,
            montantnet:this.decfiscmens.impottype1.location4.montantnet, montantretenue:this.decfiscmens.impottype1.location4.montantretenue, },
     honoraire1: {  type:this.decfiscmens.impottype1.honoraire1.type,montantbrut:this.decfiscmens.impottype1.honoraire1.montantbrut, taux:this.decfiscmens.impottype1.honoraire1.taux,
       montantnet:this.decfiscmens.impottype1.honoraire1.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire1.montantretenue,},
  
     honoraire2: {  type:this.decfiscmens.impottype1.honoraire2.type,montantbrut:this.decfiscmens.impottype1.honoraire2.montantbrut, taux:this.decfiscmens.impottype1.honoraire2.taux,
       montantnet:this.decfiscmens.impottype1.honoraire2.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire2.montantretenue,},
  
     honoraire3: {  type:this.decfiscmens.impottype1.honoraire3.type,montantbrut:this.decfiscmens.impottype1.honoraire3.montantbrut, taux:this.decfiscmens.impottype1.honoraire3.taux,
       montantnet:this.decfiscmens.impottype1.honoraire3.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire3.montantretenue,},
       montant10001: {  type:this.decfiscmens.impottype1.montant10001.type,montantbrut:this.decfiscmens.impottype1.montant10001.montantbrut, taux:this.decfiscmens.impottype1.montant10001.taux,
      montantnet:this.decfiscmens.impottype1.montant10001.montantnet, montantretenue:this.decfiscmens.impottype1.montant10001.montantretenue,},
     montant10002: {  type:this.decfiscmens.impottype1.montant10002.type,montantbrut:this.decfiscmens.impottype1.montant10002.montantbrut,taux:this.decfiscmens.impottype1.montant10002.taux,
       montantnet:this.decfiscmens.impottype1.montant10002.montantnet, montantretenue:this.decfiscmens.impottype1.montant10002.montantretenue,},
       montant10003: {  type:this.decfiscmens.impottype1.montant10003.type,montantbrut:this.decfiscmens.impottype1.montant10003.montantbrut, taux:this.decfiscmens.impottype1.montant10003.taux,
         montantnet:this.decfiscmens.impottype1.montant10003.montantnet, montantretenue:this.decfiscmens.impottype1.montant10003.montantretenue,}, 
    montant10004: {  type:this.decfiscmens.impottype1.montant10004.type,montantbrut:this.decfiscmens.impottype1.montant10004.montantbrut, taux:this.decfiscmens.impottype1.montant10004.taux,
      montantnet:this.decfiscmens.impottype1.montant10004.montantnet, montantretenue:this.decfiscmens.impottype1.montant10004.montantretenue,},
       autre: this.decfiscmens.impottype1.autre}
    decfiscmens.impottype2={ type:this.decfiscmens.impottype2.type,reporttvamoisprecedent:this.decfiscmens.impottype2.reporttvamoisprecedent,tvacollecter:{
      type:this.decfiscmens.impottype2.tvacollecter.type,
      chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht,
      tvaammount:this.decfiscmens.impottype2.tvacollecter.tvaammount,
      ammountttc:this.decfiscmens.impottype2.tvacollecter.ammountttc,
      
      },tvacollecter19:{
        type:this.decfiscmens.impottype2.tvacollecter.type,
        chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht,
        tvaammount:this.decfiscmens.impottype2.tvacollecter19.tvaammount,
        ammountttc:this.decfiscmens.impottype2.tvacollecter19.ammountttc,
        
        },tvarecuperableimmobilier:{
          type:this.decfiscmens.impottype2.tvarecuperableimmobilier.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva,
      
      
      },
      tvarecuperableequipement:{
          type:this.decfiscmens.impottype2.tvarecuperableequipement.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableequipement.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva,
      
      
      },
      tvarecuperableautreachat:{
          type:this.decfiscmens.impottype2.tvarecuperableautreachat.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva,
      
      
      },
      locationhabitationmeuble:{
          type:this.decfiscmens.impottype2.locationhabitationmeuble.type,
          htammount:this.decfiscmens.impottype2.locationhabitationmeuble.htammount,
          tvaammount:this.decfiscmens.impottype2.locationhabitationmeuble.tvaammount,
          ttcammount:this.decfiscmens.impottype2.locationhabitationmeuble.ttcammount,
          },
      locationusagecommercial:{
        type:this.decfiscmens.impottype2.locationusagecommercial.type,
        htammount:this.decfiscmens.impottype2.locationusagecommercial.htammount,
        tvaammount:this.decfiscmens.impottype2.locationusagecommercial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.locationusagecommercial.ttcammount,
              },
      operationlotissement:{
        type:this.decfiscmens.impottype2.operationlotissement.type,
        htammount:this.decfiscmens.impottype2.operationlotissement.htammount,
        tvaammount:this.decfiscmens.impottype2.operationlotissement.tvaammount,
        ttcammount:this.decfiscmens.impottype2.operationlotissement.ttcammount,
                  },
      interetpercue:{
        type:this.decfiscmens.impottype2.interetpercue.type,
        htammount:this.decfiscmens.impottype2.interetpercue.htammount,
        tvaammount:this.decfiscmens.impottype2.interetpercue.tvaammount,
        ttcammount:this.decfiscmens.impottype2.interetpercue.ttcammount,
                      },
      autretvaspecial:{
        type:this.decfiscmens.impottype2.autretvaspecial.type,
        htammount:this.decfiscmens.impottype2.autretvaspecial.htammount,
        tvaammount:this.decfiscmens.impottype2.autretvaspecial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.autretvaspecial.ttcammount,
                          taux:this.decfiscmens.impottype2.autretvaspecial.taux,
                          }    }
                          decfiscmens.impottype3={ type:this.decfiscmens.impottype3.type,
                            basetfp:this.decfiscmens.impottype3.basetfp,
                                                      tfpsalairebrut:this.decfiscmens.impottype3.tfpsalairebrut,
                            montanttfpmois:this.decfiscmens.impottype3.montanttfpmois,
                            reporttfpmoisprecedent:this.decfiscmens.impottype3.reporttfpmoisprecedent,
                            montantavance:this.decfiscmens.impottype3.montantavance,
                            tfppayer:this.decfiscmens.impottype3.tfppayer,
                            tfpreporter:this.decfiscmens.impottype3.tfpreporter,
                            salairesnonsoumistfp:this.decfiscmens.impottype3.salairesnonsoumistfp}
                            decfiscmens.impottype4={ type:this.decfiscmens.impottype4.type,
                            basefoprolos:this.decfiscmens.impottype4.basefoprolos,
                            foprolossalairebrut:this.decfiscmens.impottype4.foprolossalairebrut,
                            montantfoprolos:this.decfiscmens.impottype4.montantfoprolos,
                            salairesnonsoumisfoprolos:this.decfiscmens.impottype4.salairesnonsoumisfoprolos}
                            decfiscmens.impottype5={ type:this.decfiscmens.impottype5.type,
                            nombrenotehonoraire:this.decfiscmens.impottype5.nombrenotehonoraire,
                totaldroittimbre:this.decfiscmens.impottype5.totaldroittimbre,}
                decfiscmens.impottype6={ type:this.decfiscmens.impottype6.type,
                chiffreaffairettc:this.decfiscmens.impottype6.chiffreaffairettc,
                tclpayer:this.decfiscmens.impottype6.tclpayer,}
                decfiscmens.impottype7={ type:this.decfiscmens.impottype7.type,
                  chiffreaffaireht:this.decfiscmens.impottype7.chiffreaffaireht,
                  montantcontribution:this.decfiscmens.impottype7.montantcontribution,}
                  decfiscmens.statutadmin=this.decfiscmens.statutadmin
                  decfiscmens.statutcollab=this.decfiscmens.statutcollab
                   //@ts-ignore
  if(this.decfiscmens.statutcollab.length>0)
  {
    //@ts-ignore
    if(this.decfiscmens.statutcollab[this.decfiscmens.statutcollab.length-1].statutcoll!='traité')
    { 
      await Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme validé',
        cancelButtonText: 'Annuler',
        
      }).then((result) => {
        if (result.isConfirmed) 
        {
          decfiscmens.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'traité',
            motifcoll:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'déclaration affectée avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['collab-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          );
        }
     
      
    }
      )
  }
    else
    {
      this.router.navigate(['collab-board']);
    }
  }
   
  }
  update(e){
    this.selected = e.target.value   
    if(this.selected=='supprimer le dernier statut collaborateur')
    {
      this.deletestatutcollab()
    }
    else
    {
      this.deletestatutadmin()
    }
  }
  deletestatutcollab()
  {
    this.loading = true;
    const decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: this.decfiscmens.impottype1.type, traitementetsalaire: { salairebrut:this.decfiscmens.impottype1.traitementetsalaire.salairebrut, 
      salaireimposable: this.decfiscmens.impottype1.traitementetsalaire.salaireimposable, retenuealasource:this.decfiscmens.impottype1.traitementetsalaire.retenuealasource,
      contributionsociale:this.decfiscmens.impottype1.traitementetsalaire.contributionsociale, }, 
    location1: { type: this.decfiscmens.impottype1.location1.type,montantbrut:this.decfiscmens.impottype1.location1.montantbrut, taux:this.decfiscmens.impottype1.location1.taux,
       montantnet:this.decfiscmens.impottype1.location1.montantnet, montantretenue:this.decfiscmens.impottype1.location1.montantretenue, },
       location2: { type: this.decfiscmens.impottype1.location2.type,montantbrut:this.decfiscmens.impottype1.location2.montantbrut, taux:this.decfiscmens.impottype1.location2.taux,
        montantnet:this.decfiscmens.impottype1.location2.montantnet, montantretenue:this.decfiscmens.impottype1.location2.montantretenue, },
        location3: { type: this.decfiscmens.impottype1.location3.type,montantbrut:this.decfiscmens.impottype1.location3.montantbrut, taux:this.decfiscmens.impottype1.location3.taux,
          montantnet:this.decfiscmens.impottype1.location3.montantnet, montantretenue:this.decfiscmens.impottype1.location3.montantretenue, },
          location4: { type: this.decfiscmens.impottype1.location4.type,montantbrut:this.decfiscmens.impottype1.location4.montantbrut, taux:this.decfiscmens.impottype1.location4.taux,
            montantnet:this.decfiscmens.impottype1.location4.montantnet, montantretenue:this.decfiscmens.impottype1.location4.montantretenue, },
     honoraire1: {  type:this.decfiscmens.impottype1.honoraire1.type,montantbrut:this.decfiscmens.impottype1.honoraire1.montantbrut, taux:this.decfiscmens.impottype1.honoraire1.taux,
       montantnet:this.decfiscmens.impottype1.honoraire1.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire1.montantretenue,},
  
     honoraire2: {  type:this.decfiscmens.impottype1.honoraire2.type,montantbrut:this.decfiscmens.impottype1.honoraire2.montantbrut, taux:this.decfiscmens.impottype1.honoraire2.taux,
       montantnet:this.decfiscmens.impottype1.honoraire2.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire2.montantretenue,},
  
     honoraire3: {  type:this.decfiscmens.impottype1.honoraire3.type,montantbrut:this.decfiscmens.impottype1.honoraire3.montantbrut, taux:this.decfiscmens.impottype1.honoraire3.taux,
       montantnet:this.decfiscmens.impottype1.honoraire3.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire3.montantretenue,},
       montant10001: {  type:this.decfiscmens.impottype1.montant10001.type,montantbrut:this.decfiscmens.impottype1.montant10001.montantbrut, taux:this.decfiscmens.impottype1.montant10001.taux,
      montantnet:this.decfiscmens.impottype1.montant10001.montantnet, montantretenue:this.decfiscmens.impottype1.montant10001.montantretenue,},
     montant10002: {  type:this.decfiscmens.impottype1.montant10002.type,montantbrut:this.decfiscmens.impottype1.montant10002.montantbrut,taux:this.decfiscmens.impottype1.montant10002.taux,
       montantnet:this.decfiscmens.impottype1.montant10002.montantnet, montantretenue:this.decfiscmens.impottype1.montant10002.montantretenue,},
       montant10003: {  type:this.decfiscmens.impottype1.montant10003.type,montantbrut:this.decfiscmens.impottype1.montant10003.montantbrut, taux:this.decfiscmens.impottype1.montant10003.taux,
         montantnet:this.decfiscmens.impottype1.montant10003.montantnet, montantretenue:this.decfiscmens.impottype1.montant10003.montantretenue,}, 
    montant10004: {  type:this.decfiscmens.impottype1.montant10004.type,montantbrut:this.decfiscmens.impottype1.montant10004.montantbrut, taux:this.decfiscmens.impottype1.montant10004.taux,
      montantnet:this.decfiscmens.impottype1.montant10004.montantnet, montantretenue:this.decfiscmens.impottype1.montant10004.montantretenue,},
       autre: this.decfiscmens.impottype1.autre}
    decfiscmens.impottype2={ type:this.decfiscmens.impottype2.type,reporttvamoisprecedent:this.decfiscmens.impottype2.reporttvamoisprecedent,tvacollecter:{
      type:this.decfiscmens.impottype2.tvacollecter.type,
      chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht,
      tvaammount:this.decfiscmens.impottype2.tvacollecter.tvaammount,
      ammountttc:this.decfiscmens.impottype2.tvacollecter.ammountttc,
      
      },tvacollecter19:{
        type:this.decfiscmens.impottype2.tvacollecter.type,
        chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht,
        tvaammount:this.decfiscmens.impottype2.tvacollecter19.tvaammount,
        ammountttc:this.decfiscmens.impottype2.tvacollecter19.ammountttc,
        
        },tvarecuperableimmobilier:{
          type:this.decfiscmens.impottype2.tvarecuperableimmobilier.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva,
      
      
      },
      tvarecuperableequipement:{
          type:this.decfiscmens.impottype2.tvarecuperableequipement.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableequipement.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva,
      
      
      },
      tvarecuperableautreachat:{
          type:this.decfiscmens.impottype2.tvarecuperableautreachat.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva,
      
      
      },
      locationhabitationmeuble:{
          type:this.decfiscmens.impottype2.locationhabitationmeuble.type,
          htammount:this.decfiscmens.impottype2.locationhabitationmeuble.htammount,
          tvaammount:this.decfiscmens.impottype2.locationhabitationmeuble.tvaammount,
          ttcammount:this.decfiscmens.impottype2.locationhabitationmeuble.ttcammount,
          },
      locationusagecommercial:{
        type:this.decfiscmens.impottype2.locationusagecommercial.type,
        htammount:this.decfiscmens.impottype2.locationusagecommercial.htammount,
        tvaammount:this.decfiscmens.impottype2.locationusagecommercial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.locationusagecommercial.ttcammount,
              },
      operationlotissement:{
        type:this.decfiscmens.impottype2.operationlotissement.type,
        htammount:this.decfiscmens.impottype2.operationlotissement.htammount,
        tvaammount:this.decfiscmens.impottype2.operationlotissement.tvaammount,
        ttcammount:this.decfiscmens.impottype2.operationlotissement.ttcammount,
                  },
      interetpercue:{
        type:this.decfiscmens.impottype2.interetpercue.type,
        htammount:this.decfiscmens.impottype2.interetpercue.htammount,
        tvaammount:this.decfiscmens.impottype2.interetpercue.tvaammount,
        ttcammount:this.decfiscmens.impottype2.interetpercue.ttcammount,
                      },
      autretvaspecial:{
        type:this.decfiscmens.impottype2.autretvaspecial.type,
        htammount:this.decfiscmens.impottype2.autretvaspecial.htammount,
        tvaammount:this.decfiscmens.impottype2.autretvaspecial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.autretvaspecial.ttcammount,
                          taux:this.decfiscmens.impottype2.autretvaspecial.taux,
                          }    }
                          decfiscmens.impottype3={ type:this.decfiscmens.impottype3.type,
                            basetfp:this.decfiscmens.impottype3.basetfp,
                                                      tfpsalairebrut:this.decfiscmens.impottype3.tfpsalairebrut,
                            montanttfpmois:this.decfiscmens.impottype3.montanttfpmois,
                            reporttfpmoisprecedent:this.decfiscmens.impottype3.reporttfpmoisprecedent,
                            montantavance:this.decfiscmens.impottype3.montantavance,
                            tfppayer:this.decfiscmens.impottype3.tfppayer,
                            tfpreporter:this.decfiscmens.impottype3.tfpreporter,
                            salairesnonsoumistfp:this.decfiscmens.impottype3.salairesnonsoumistfp}
                            decfiscmens.impottype4={ type:this.decfiscmens.impottype4.type,
                            basefoprolos:this.decfiscmens.impottype4.basefoprolos,
                            foprolossalairebrut:this.decfiscmens.impottype4.foprolossalairebrut,
                            montantfoprolos:this.decfiscmens.impottype4.montantfoprolos,
                            salairesnonsoumisfoprolos:this.decfiscmens.impottype4.salairesnonsoumisfoprolos}
                            decfiscmens.impottype5={ type:this.decfiscmens.impottype5.type,
                            nombrenotehonoraire:this.decfiscmens.impottype5.nombrenotehonoraire,
                totaldroittimbre:this.decfiscmens.impottype5.totaldroittimbre,}
                decfiscmens.impottype6={ type:this.decfiscmens.impottype6.type,
                chiffreaffairettc:this.decfiscmens.impottype6.chiffreaffairettc,
                tclpayer:this.decfiscmens.impottype6.tclpayer,}
                decfiscmens.impottype7={ type:this.decfiscmens.impottype7.type,
                  chiffreaffaireht:this.decfiscmens.impottype7.chiffreaffaireht,
                  montantcontribution:this.decfiscmens.impottype7.montantcontribution,}
                  this.decfiscmens.statutcollab.pop()
                  decfiscmens.statutadmin=this.decfiscmens.statutadmin
                  decfiscmens.statutcollab=this.decfiscmens.statutcollab
      this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
        (data:any) => {
          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'statut collaborateur supprimé avec succès',
            showConfirmButton: false,
            timer: 3000
          });
          this.reloadPage()
        },
        (error) => {
          this.loading = false;
          
          window.scrollTo(0, 0);  
        }
      ); 

  }
  deletestatutadmin()
  {
    this.loading = true;
    const decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: this.decfiscmens.impottype1.type, traitementetsalaire: { salairebrut:this.decfiscmens.impottype1.traitementetsalaire.salairebrut, 
      salaireimposable: this.decfiscmens.impottype1.traitementetsalaire.salaireimposable, retenuealasource:this.decfiscmens.impottype1.traitementetsalaire.retenuealasource,
      contributionsociale:this.decfiscmens.impottype1.traitementetsalaire.contributionsociale, }, 
    location1: { type: this.decfiscmens.impottype1.location1.type,montantbrut:this.decfiscmens.impottype1.location1.montantbrut, taux:this.decfiscmens.impottype1.location1.taux,
       montantnet:this.decfiscmens.impottype1.location1.montantnet, montantretenue:this.decfiscmens.impottype1.location1.montantretenue, },
       location2: { type: this.decfiscmens.impottype1.location2.type,montantbrut:this.decfiscmens.impottype1.location2.montantbrut, taux:this.decfiscmens.impottype1.location2.taux,
        montantnet:this.decfiscmens.impottype1.location2.montantnet, montantretenue:this.decfiscmens.impottype1.location2.montantretenue, },
        location3: { type: this.decfiscmens.impottype1.location3.type,montantbrut:this.decfiscmens.impottype1.location3.montantbrut, taux:this.decfiscmens.impottype1.location3.taux,
          montantnet:this.decfiscmens.impottype1.location3.montantnet, montantretenue:this.decfiscmens.impottype1.location3.montantretenue, },
          location4: { type: this.decfiscmens.impottype1.location4.type,montantbrut:this.decfiscmens.impottype1.location4.montantbrut, taux:this.decfiscmens.impottype1.location4.taux,
            montantnet:this.decfiscmens.impottype1.location4.montantnet, montantretenue:this.decfiscmens.impottype1.location4.montantretenue, },
     honoraire1: {  type:this.decfiscmens.impottype1.honoraire1.type,montantbrut:this.decfiscmens.impottype1.honoraire1.montantbrut, taux:this.decfiscmens.impottype1.honoraire1.taux,
       montantnet:this.decfiscmens.impottype1.honoraire1.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire1.montantretenue,},
  
     honoraire2: {  type:this.decfiscmens.impottype1.honoraire2.type,montantbrut:this.decfiscmens.impottype1.honoraire2.montantbrut, taux:this.decfiscmens.impottype1.honoraire2.taux,
       montantnet:this.decfiscmens.impottype1.honoraire2.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire2.montantretenue,},
  
     honoraire3: {  type:this.decfiscmens.impottype1.honoraire3.type,montantbrut:this.decfiscmens.impottype1.honoraire3.montantbrut, taux:this.decfiscmens.impottype1.honoraire3.taux,
       montantnet:this.decfiscmens.impottype1.honoraire3.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire3.montantretenue,},
       montant10001: {  type:this.decfiscmens.impottype1.montant10001.type,montantbrut:this.decfiscmens.impottype1.montant10001.montantbrut, taux:this.decfiscmens.impottype1.montant10001.taux,
      montantnet:this.decfiscmens.impottype1.montant10001.montantnet, montantretenue:this.decfiscmens.impottype1.montant10001.montantretenue,},
     montant10002: {  type:this.decfiscmens.impottype1.montant10002.type,montantbrut:this.decfiscmens.impottype1.montant10002.montantbrut,taux:this.decfiscmens.impottype1.montant10002.taux,
       montantnet:this.decfiscmens.impottype1.montant10002.montantnet, montantretenue:this.decfiscmens.impottype1.montant10002.montantretenue,},
       montant10003: {  type:this.decfiscmens.impottype1.montant10003.type,montantbrut:this.decfiscmens.impottype1.montant10003.montantbrut, taux:this.decfiscmens.impottype1.montant10003.taux,
         montantnet:this.decfiscmens.impottype1.montant10003.montantnet, montantretenue:this.decfiscmens.impottype1.montant10003.montantretenue,}, 
    montant10004: {  type:this.decfiscmens.impottype1.montant10004.type,montantbrut:this.decfiscmens.impottype1.montant10004.montantbrut, taux:this.decfiscmens.impottype1.montant10004.taux,
      montantnet:this.decfiscmens.impottype1.montant10004.montantnet, montantretenue:this.decfiscmens.impottype1.montant10004.montantretenue,},
       autre: this.decfiscmens.impottype1.autre}
    decfiscmens.impottype2={ type:this.decfiscmens.impottype2.type,reporttvamoisprecedent:this.decfiscmens.impottype2.reporttvamoisprecedent,tvacollecter:{
      type:this.decfiscmens.impottype2.tvacollecter.type,
      chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht,
      tvaammount:this.decfiscmens.impottype2.tvacollecter.tvaammount,
      ammountttc:this.decfiscmens.impottype2.tvacollecter.ammountttc,
      
      },tvacollecter19:{
        type:this.decfiscmens.impottype2.tvacollecter.type,
        chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht,
        tvaammount:this.decfiscmens.impottype2.tvacollecter19.tvaammount,
        ammountttc:this.decfiscmens.impottype2.tvacollecter19.ammountttc,
        
        },tvarecuperableimmobilier:{
          type:this.decfiscmens.impottype2.tvarecuperableimmobilier.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva,
      
      
      },
      tvarecuperableequipement:{
          type:this.decfiscmens.impottype2.tvarecuperableequipement.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableequipement.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva,
      
      
      },
      tvarecuperableautreachat:{
          type:this.decfiscmens.impottype2.tvarecuperableautreachat.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva,
      
      
      },
      locationhabitationmeuble:{
          type:this.decfiscmens.impottype2.locationhabitationmeuble.type,
          htammount:this.decfiscmens.impottype2.locationhabitationmeuble.htammount,
          tvaammount:this.decfiscmens.impottype2.locationhabitationmeuble.tvaammount,
          ttcammount:this.decfiscmens.impottype2.locationhabitationmeuble.ttcammount,
          },
      locationusagecommercial:{
        type:this.decfiscmens.impottype2.locationusagecommercial.type,
        htammount:this.decfiscmens.impottype2.locationusagecommercial.htammount,
        tvaammount:this.decfiscmens.impottype2.locationusagecommercial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.locationusagecommercial.ttcammount,
              },
      operationlotissement:{
        type:this.decfiscmens.impottype2.operationlotissement.type,
        htammount:this.decfiscmens.impottype2.operationlotissement.htammount,
        tvaammount:this.decfiscmens.impottype2.operationlotissement.tvaammount,
        ttcammount:this.decfiscmens.impottype2.operationlotissement.ttcammount,
                  },
      interetpercue:{
        type:this.decfiscmens.impottype2.interetpercue.type,
        htammount:this.decfiscmens.impottype2.interetpercue.htammount,
        tvaammount:this.decfiscmens.impottype2.interetpercue.tvaammount,
        ttcammount:this.decfiscmens.impottype2.interetpercue.ttcammount,
                      },
      autretvaspecial:{
        type:this.decfiscmens.impottype2.autretvaspecial.type,
        htammount:this.decfiscmens.impottype2.autretvaspecial.htammount,
        tvaammount:this.decfiscmens.impottype2.autretvaspecial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.autretvaspecial.ttcammount,
                          taux:this.decfiscmens.impottype2.autretvaspecial.taux,
                          }    }
                          decfiscmens.impottype3={ type:this.decfiscmens.impottype3.type,
                            basetfp:this.decfiscmens.impottype3.basetfp,
                                                      tfpsalairebrut:this.decfiscmens.impottype3.tfpsalairebrut,
                            montanttfpmois:this.decfiscmens.impottype3.montanttfpmois,
                            reporttfpmoisprecedent:this.decfiscmens.impottype3.reporttfpmoisprecedent,
                            montantavance:this.decfiscmens.impottype3.montantavance,
                            tfppayer:this.decfiscmens.impottype3.tfppayer,
                            tfpreporter:this.decfiscmens.impottype3.tfpreporter,
                            salairesnonsoumistfp:this.decfiscmens.impottype3.salairesnonsoumistfp}
                            decfiscmens.impottype4={ type:this.decfiscmens.impottype4.type,
                            basefoprolos:this.decfiscmens.impottype4.basefoprolos,
                            foprolossalairebrut:this.decfiscmens.impottype4.foprolossalairebrut,
                            montantfoprolos:this.decfiscmens.impottype4.montantfoprolos,
                            salairesnonsoumisfoprolos:this.decfiscmens.impottype4.salairesnonsoumisfoprolos}
                            decfiscmens.impottype5={ type:this.decfiscmens.impottype5.type,
                            nombrenotehonoraire:this.decfiscmens.impottype5.nombrenotehonoraire,
                totaldroittimbre:this.decfiscmens.impottype5.totaldroittimbre,}
                decfiscmens.impottype6={ type:this.decfiscmens.impottype6.type,
                chiffreaffairettc:this.decfiscmens.impottype6.chiffreaffairettc,
                tclpayer:this.decfiscmens.impottype6.tclpayer,}
                decfiscmens.impottype7={ type:this.decfiscmens.impottype7.type,
                  chiffreaffaireht:this.decfiscmens.impottype7.chiffreaffaireht,
                  montantcontribution:this.decfiscmens.impottype7.montantcontribution,}
                  this.decfiscmens.statutadmin.pop()
                  decfiscmens.statutadmin=this.decfiscmens.statutadmin
                  decfiscmens.statutcollab=this.decfiscmens.statutcollab
      this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
        (data:any) => {
          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'statut admin supprimé avec succès',
            showConfirmButton: false,
            timer: 3000
          });
          this.reloadPage()
        },
        (error) => {
          this.loading = false;
          
          window.scrollTo(0, 0);  
        }
      ); 
  }
  affect()
  {
    this.loading = true;
    const decfiscmens = new Decfiscmens();
    decfiscmens.impottype1={ type: this.decfiscmens.impottype1.type, traitementetsalaire: { salairebrut:this.decfiscmens.impottype1.traitementetsalaire.salairebrut, 
      salaireimposable: this.decfiscmens.impottype1.traitementetsalaire.salaireimposable, retenuealasource:this.decfiscmens.impottype1.traitementetsalaire.retenuealasource,
      contributionsociale:this.decfiscmens.impottype1.traitementetsalaire.contributionsociale, }, 
    location1: { type: this.decfiscmens.impottype1.location1.type,montantbrut:this.decfiscmens.impottype1.location1.montantbrut, taux:this.decfiscmens.impottype1.location1.taux,
       montantnet:this.decfiscmens.impottype1.location1.montantnet, montantretenue:this.decfiscmens.impottype1.location1.montantretenue, },
       location2: { type: this.decfiscmens.impottype1.location2.type,montantbrut:this.decfiscmens.impottype1.location2.montantbrut, taux:this.decfiscmens.impottype1.location2.taux,
        montantnet:this.decfiscmens.impottype1.location2.montantnet, montantretenue:this.decfiscmens.impottype1.location2.montantretenue, },
        location3: { type: this.decfiscmens.impottype1.location3.type,montantbrut:this.decfiscmens.impottype1.location3.montantbrut, taux:this.decfiscmens.impottype1.location3.taux,
          montantnet:this.decfiscmens.impottype1.location3.montantnet, montantretenue:this.decfiscmens.impottype1.location3.montantretenue, },
          location4: { type: this.decfiscmens.impottype1.location4.type,montantbrut:this.decfiscmens.impottype1.location4.montantbrut, taux:this.decfiscmens.impottype1.location4.taux,
            montantnet:this.decfiscmens.impottype1.location4.montantnet, montantretenue:this.decfiscmens.impottype1.location4.montantretenue, },
     honoraire1: {  type:this.decfiscmens.impottype1.honoraire1.type,montantbrut:this.decfiscmens.impottype1.honoraire1.montantbrut, taux:this.decfiscmens.impottype1.honoraire1.taux,
       montantnet:this.decfiscmens.impottype1.honoraire1.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire1.montantretenue,},
  
     honoraire2: {  type:this.decfiscmens.impottype1.honoraire2.type,montantbrut:this.decfiscmens.impottype1.honoraire2.montantbrut, taux:this.decfiscmens.impottype1.honoraire2.taux,
       montantnet:this.decfiscmens.impottype1.honoraire2.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire2.montantretenue,},
  
     honoraire3: {  type:this.decfiscmens.impottype1.honoraire3.type,montantbrut:this.decfiscmens.impottype1.honoraire3.montantbrut, taux:this.decfiscmens.impottype1.honoraire3.taux,
       montantnet:this.decfiscmens.impottype1.honoraire3.montantnet, montantretenue:this.decfiscmens.impottype1.honoraire3.montantretenue,},
       montant10001: {  type:this.decfiscmens.impottype1.montant10001.type,montantbrut:this.decfiscmens.impottype1.montant10001.montantbrut, taux:this.decfiscmens.impottype1.montant10001.taux,
      montantnet:this.decfiscmens.impottype1.montant10001.montantnet, montantretenue:this.decfiscmens.impottype1.montant10001.montantretenue,},
     montant10002: {  type:this.decfiscmens.impottype1.montant10002.type,montantbrut:this.decfiscmens.impottype1.montant10002.montantbrut,taux:this.decfiscmens.impottype1.montant10002.taux,
       montantnet:this.decfiscmens.impottype1.montant10002.montantnet, montantretenue:this.decfiscmens.impottype1.montant10002.montantretenue,},
       montant10003: {  type:this.decfiscmens.impottype1.montant10003.type,montantbrut:this.decfiscmens.impottype1.montant10003.montantbrut, taux:this.decfiscmens.impottype1.montant10003.taux,
         montantnet:this.decfiscmens.impottype1.montant10003.montantnet, montantretenue:this.decfiscmens.impottype1.montant10003.montantretenue,}, 
    montant10004: {  type:this.decfiscmens.impottype1.montant10004.type,montantbrut:this.decfiscmens.impottype1.montant10004.montantbrut, taux:this.decfiscmens.impottype1.montant10004.taux,
      montantnet:this.decfiscmens.impottype1.montant10004.montantnet, montantretenue:this.decfiscmens.impottype1.montant10004.montantretenue,},
       autre: this.decfiscmens.impottype1.autre}
    decfiscmens.impottype2={ type:this.decfiscmens.impottype2.type,reporttvamoisprecedent:this.decfiscmens.impottype2.reporttvamoisprecedent,tvacollecter:{
      type:this.decfiscmens.impottype2.tvacollecter.type,
      chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter.chiffreaffaireht,
      tvaammount:this.decfiscmens.impottype2.tvacollecter.tvaammount,
      ammountttc:this.decfiscmens.impottype2.tvacollecter.ammountttc,
      
      },tvacollecter19:{
        type:this.decfiscmens.impottype2.tvacollecter.type,
        chiffreaffaireht:this.decfiscmens.impottype2.tvacollecter19.chiffreaffaireht,
        tvaammount:this.decfiscmens.impottype2.tvacollecter19.tvaammount,
        ammountttc:this.decfiscmens.impottype2.tvacollecter19.ammountttc,
        
        },tvarecuperableimmobilier:{
          type:this.decfiscmens.impottype2.tvarecuperableimmobilier.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva,
      
      
      },
      tvarecuperableequipement:{
          type:this.decfiscmens.impottype2.tvarecuperableequipement.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableequipement.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva,
      
      
      },
      tvarecuperableautreachat:{
          type:this.decfiscmens.impottype2.tvarecuperableautreachat.type,
      achatlocauxht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxht,
      achatlocauxtva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva,
      achatimporteht:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimporteht,
      achatimportetva:this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva,
      
      
      },
      locationhabitationmeuble:{
          type:this.decfiscmens.impottype2.locationhabitationmeuble.type,
          htammount:this.decfiscmens.impottype2.locationhabitationmeuble.htammount,
          tvaammount:this.decfiscmens.impottype2.locationhabitationmeuble.tvaammount,
          ttcammount:this.decfiscmens.impottype2.locationhabitationmeuble.ttcammount,
          },
      locationusagecommercial:{
        type:this.decfiscmens.impottype2.locationusagecommercial.type,
        htammount:this.decfiscmens.impottype2.locationusagecommercial.htammount,
        tvaammount:this.decfiscmens.impottype2.locationusagecommercial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.locationusagecommercial.ttcammount,
              },
      operationlotissement:{
        type:this.decfiscmens.impottype2.operationlotissement.type,
        htammount:this.decfiscmens.impottype2.operationlotissement.htammount,
        tvaammount:this.decfiscmens.impottype2.operationlotissement.tvaammount,
        ttcammount:this.decfiscmens.impottype2.operationlotissement.ttcammount,
                  },
      interetpercue:{
        type:this.decfiscmens.impottype2.interetpercue.type,
        htammount:this.decfiscmens.impottype2.interetpercue.htammount,
        tvaammount:this.decfiscmens.impottype2.interetpercue.tvaammount,
        ttcammount:this.decfiscmens.impottype2.interetpercue.ttcammount,
                      },
      autretvaspecial:{
        type:this.decfiscmens.impottype2.autretvaspecial.type,
        htammount:this.decfiscmens.impottype2.autretvaspecial.htammount,
        tvaammount:this.decfiscmens.impottype2.autretvaspecial.tvaammount,
        ttcammount:this.decfiscmens.impottype2.autretvaspecial.ttcammount,
                          taux:this.decfiscmens.impottype2.autretvaspecial.taux,
                          }    }
                          decfiscmens.impottype3={ type:this.decfiscmens.impottype3.type,
                            basetfp:this.decfiscmens.impottype3.basetfp,
                                                      tfpsalairebrut:this.decfiscmens.impottype3.tfpsalairebrut,
                            montanttfpmois:this.decfiscmens.impottype3.montanttfpmois,
                            reporttfpmoisprecedent:this.decfiscmens.impottype3.reporttfpmoisprecedent,
                            montantavance:this.decfiscmens.impottype3.montantavance,
                            tfppayer:this.decfiscmens.impottype3.tfppayer,
                            tfpreporter:this.decfiscmens.impottype3.tfpreporter,
                            salairesnonsoumistfp:this.decfiscmens.impottype3.salairesnonsoumistfp}
                            decfiscmens.impottype4={ type:this.decfiscmens.impottype4.type,
                            basefoprolos:this.decfiscmens.impottype4.basefoprolos,
                            foprolossalairebrut:this.decfiscmens.impottype4.foprolossalairebrut,
                            montantfoprolos:this.decfiscmens.impottype4.montantfoprolos,
                            salairesnonsoumisfoprolos:this.decfiscmens.impottype4.salairesnonsoumisfoprolos}
                            decfiscmens.impottype5={ type:this.decfiscmens.impottype5.type,
                            nombrenotehonoraire:this.decfiscmens.impottype5.nombrenotehonoraire,
                totaldroittimbre:this.decfiscmens.impottype5.totaldroittimbre,}
                decfiscmens.impottype6={ type:this.decfiscmens.impottype6.type,
                chiffreaffairettc:this.decfiscmens.impottype6.chiffreaffairettc,
                tclpayer:this.decfiscmens.impottype6.tclpayer,}
                decfiscmens.impottype7={ type:this.decfiscmens.impottype7.type,
                  chiffreaffaireht:this.decfiscmens.impottype7.chiffreaffaireht,
                  montantcontribution:this.decfiscmens.impottype7.montantcontribution,}
                  decfiscmens.statutadmin=this.decfiscmens.statutadmin
                  decfiscmens.statutcollab=this.decfiscmens.statutcollab

    decfiscmens.affecte =this.optionValue;
    decfiscmens.statutadmin.push
    //@ts-ignore
    ({
      statut:'affecté',
      motif:'',
      datefin:Date.now(),
      duree:this.countdown,     
    })
    decfiscmens.statutcollab.push
    //@ts-ignore
    ({
      statutcoll:'en cours de traitement',
      motifcoll:'',
      datefin:Date.now(),
      duree:'',     
    })
    this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
      (data:any) => {
        this.loading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'déclaration affectée avec succès',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigate(['admin-board']);
      },
      (error) => {
        this.loading = false;
        
        window.scrollTo(0, 0);
        
      
        
      }
    );
  }
  onDelete() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.dec.getDecfiscmensreqById(params.id).then(
          (data:any) => {
            this.loading = false;
            Swal.fire({
              title: 'Veuillez confirmer la suppression!',
              
              icon: 'info',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer',
              
            }).then((result) => {
              if (result.value) {
                this.dec.deletedecfiscmensById(params.id);
                this.router.navigate(['admin-board']);
              }
  
            }).catch(() => {
              Swal.fire('opération non aboutie!');
            });
    
        
          }
          
        );
      }
    );
  }
  Upload() {
    this.router.navigate(['create-report']);
}
  generateExcel() {
    
    //Excel Title, Header, Data
    const title = 'Déclaration Mensuelle du mois de ' + this.decfiscmens.mois + ' pour l\'année ' + this.decfiscmens.annee;
    const header = ["Year", "Month", "Make", "Model", "Quantity", "Pct"]
    const data = [
      
    ];

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Déclaration Mensuelle');
    let logo = workbook.addImage({
      base64: logoFile.impotlogoBase64,
      extension: 'png',
});
worksheet.addImage(logo, 'A1:C3');
let logo2 = workbook.addImage({
  base64: logoFile.ministerelogoBase64,
  extension: 'png',
});
worksheet.addImage(logo2, 'J1:P3');
//Merge Cells
worksheet.mergeCells(`A1:F1`);
worksheet.mergeCells(`D6:F6`);
    //Add Row and formatting
    
    worksheet.addRow([]);
    
    var row = worksheet.getRow(6);
    row.getCell('D').value = ':التصريح الشهري بالأداءات';
    var row = worksheet.getRow(8);
    row.getCell('G').value =':السنة';
    row.getCell('F').value =this.decfiscmens.annee;
    row.getCell('L').value =':الشهر';
    row.getCell('J').value =this.decfiscmens.mois;
    row.getCell('T').value =':رمز التصريح';
    row.getCell('N').value ='';
    var row = worksheet.getRow(10);
    row.getCell('D').value =':رمز الصنف';
    row.getCell('H').value =':رمز الأداء على القيمة المضافة';
    row.getCell('L').value =':المعرف الجبائي';
    row.getCell('P').value =':السجل التجاري';
    var row = worksheet.getRow(11);
    row.getCell('L').value= this.decfiscmens.matriculefiscale;
    var row = worksheet.getRow(13);
    row.getCell('P').value= ':الاسم واللقب أوالاسم الاجتماعي'
    var row = worksheet.getRow(14);
    row.getCell('P').value =':العنوان أو المقر الاجتماعي';
    var row = worksheet.getRow(15);
    row.getCell('H').value =':الترقيم البريدي';
    var row = worksheet.getRow(17);
    row.getCell('P').value =': النشـــــــــاط';
    row.getCell('L').value =':تاريخ توقيف النشاط';
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'déclaration mensuelle.xlsx');
    })

  }
  reloadPage(): void {
  
    window.location.reload();
    
  }
  }