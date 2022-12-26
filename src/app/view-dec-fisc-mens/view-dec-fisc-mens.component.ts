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
  public option71Value:any
  public option72Value:any
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
  tvacollecte1=0.000
  tvacollecte2=0.000
  tvacollecte3=0.000
  tvacollecte4=0.000
  tvacollecte5=0.000
  tvacollecte6=0.000
  tvarecuperable=0.000
  autreform: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dec: DecfiscmensService,
    private token: TokenStorageService,
    private excelService: ExcelService,
    private userservice: UserService,
    ){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.dec.getDecfiscmensreqById(params.id).then(
          (decfiscmens: Decfiscmens) => {
            
            this.loading = false;
            this.decfiscmens = decfiscmens;
            this.userservice.getUserById(this.decfiscmens.userId).then(
              (user: User) => {
                console.log(user)
            if (user.regimefiscalimpot==='Réel')  
            {
            this.prepminimumperceptionammount=10.000
            }  
            else if (user.regimefiscalimpot==='Forfait D\'assiette') 
            {
            this.prepminimumperceptionammount=5.000
            
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
            )
            console.log(this.decfiscmens)
            this.activite=this.decfiscmens.activite
            this.tfpapayer=this.decfiscmens.impottype3.tfppayer
            this.tfpareporter=this.decfiscmens.impottype3.tfpreporter
            this.statut=this.decfiscmens.statut
            this.motif=this.decfiscmens.motif
            this.annee=this.decfiscmens.annee
            this.type1=this.decfiscmens.impottype1.type
            this.type2=this.decfiscmens.impottype2.type
            this.type3=this.decfiscmens.impottype3.type
            this.type4=this.decfiscmens.impottype4.type
            this.type5=this.decfiscmens.impottype5.type
            this.type6=this.decfiscmens.impottype6.type
            if(this.activite=='Médecin'||this.activite=='Infirmier'||this.activite=='Masseur'||this.activite=='Physiothérapeute'||
            this.activite=='Ergothérapeute'||this.activite=='Psychomotricien'||this.activite=='Diététicien'||this.activite=='Orthophoniste'||this.activite=='Orthoptiste'
            ||this.activite=='Sage-femmes' )
            {
              this.type7=this.decfiscmens.impottype7.type 
            }
            


            if (+this.decfiscmens.impottype1.honoraire1.montantbrut!==0 ||+this.decfiscmens.impottype1.honoraire3.montantbrut!==0 )
            {this.honorairesum= (+this.decfiscmens.impottype1.honoraire1.montantbrut + +this.decfiscmens.impottype1.honoraire3.montantbrut)
              this.honoraireretenue=Math.trunc((this.honorairesum* 0.03)*1000)/1000 }
              if (+this.decfiscmens.impottype2.locationhabitationmeuble.htammount!==0 ||+this.decfiscmens.impottype2.locationusagecommercial.htammount!==0||
                +this.decfiscmens.impottype2.operationlotissement.htammount!==0 ||+this.decfiscmens.impottype2.interetpercue.htammount!==0||+this.decfiscmens.impottype2.autretvaspecial.htammount!==0  )      
    {this.option71Value= +this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
    + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount
    this.option72Value= Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
      + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000 }      

  this.totalretenueammount= +this.decfiscmens.impottype1.traitementetsalaire.retenuealasource+ +this.decfiscmens.impottype1.traitementetsalaire.contributionsociale+ +this.decfiscmens.impottype1.location1.montantretenue
  + +this.decfiscmens.impottype1.location2.montantretenue+ +this.decfiscmens.impottype1.location3.montantretenue+ +this.decfiscmens.impottype1.location4.montantretenue
  + +this.decfiscmens.impottype1.honoraire2.montantretenue+ +this.honoraireretenue
      + +this.decfiscmens.impottype1.montant10001.montantretenue+ +this.decfiscmens.impottype1.montant10002.montantretenue+ 
  +this.decfiscmens.impottype1.montant10003.montantretenue+ +this.decfiscmens.impottype1.montant10004.montantretenue

  

  this.tvarecuperable=+this.decfiscmens.impottype2.tvarecuperableautreachat.achatlocauxtva+ +this.decfiscmens.impottype2.tvarecuperableautreachat.achatimportetva+ 
  +this.decfiscmens.impottype2.tvarecuperableequipement.achatlocauxtva+ +this.decfiscmens.impottype2.tvarecuperableequipement.achatimportetva+ 
  +this.decfiscmens.impottype2.tvarecuperableimmobilier.achatlocauxtva

  this.tvacollecte=+this.decfiscmens.impottype2.tvacollecter.tvaammount+ Math.trunc(((+this.decfiscmens.impottype2.locationhabitationmeuble.htammount+ +this.decfiscmens.impottype2.locationusagecommercial.htammount
  + +this.decfiscmens.impottype2.operationlotissement.htammount+ +this.decfiscmens.impottype2.interetpercue.htammount+ +this.decfiscmens.impottype2.autretvaspecial.htammount)*0.19)*1000)/1000
  
  this.preptotaltvaammount=this.tvacollecte-this.tvarecuperable
  this.option64Value=this.decfiscmens.impottype2.reporttvamoisprecedent

  if (this.preptotaltvaammount >= 0 && this.preptotaltvaammount-this.option64Value>=0)
  {
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
  
  }