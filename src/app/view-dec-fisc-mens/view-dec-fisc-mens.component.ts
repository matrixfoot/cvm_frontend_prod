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
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import {saveAs} from 'file-saver';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

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
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
public decfiscmens: Decfiscmens;
  public errormsg:string;
  public loading: boolean;
  public tfpapyer: any
  public tfpareporter: any
  currentUser: any;
  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '95vw',
    height: '80vh'
  };
  private spread;
  private excelIO;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dec: DecfiscmensService,
    private token: TokenStorageService,
    private excelService: ExcelService
    
    ){this.spread = new GC.Spread.Sheets.Workbook(); 
      this.excelIO = new Excel.IO();}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.dec.getDecfiscmensreqById(params.id).then(
          (decfiscmens: Decfiscmens) => {
            this.loading = false;
            this.decfiscmens = decfiscmens;
            this.tfpapyer=this.decfiscmens.impottype3.tfppayer
            this.tfpareporter=this.decfiscmens.impottype3.tfpreporter
          }
        );
      }
    );
  }
  
    
  workbookInit(args: any) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.options.isProtected = true;
    sheet.getCell(0, 0).text( ':التصريح الشهري بالأداءات').foreColor('blue');
    sheet.getCell(1, 0).value(this.decfiscmens.annee).foreColor('blue');
    sheet.getCell(2, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 3).text('Test Excel').foreColor('blue');
  }
  generatePDF() {  
    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  
   
    pdfMake.createPdf(docDefinition).open();  
  }  

  load(){
    const self =this
    var url = "https://docs.google.com/spreadsheets/d/19-f2UjNpWFbP1y3jDJXuBUKYVpx-nFj-/edit?usp=sharing&ouid=102282925063695236255&rtpof=true&sd=true";
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
          self.excelIO.open(file, (json: any) => {
            self.spread.fromJSON(json, {});
            const sheet = self.spread.getActiveSheet();
        sheet.options.isProtected = true;
        sheet.getCell(1, 0).value(this.decfiscmens.annee).foreColor('blue');
            setTimeout(() => {
              alert('load successfully');
            }, 0);
          }, (error: any) => {
            alert('load fail');
          });          })
        })
        self.maincontainer=true
    }
  onFileChange(args: any) {
    const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    if (self.spread && file) {
      self.excelIO.open(file, (json: any) => {
        self.spread.fromJSON(json, {});
        const sheet = self.spread.getActiveSheet();
    sheet.options.isProtected = true;
    sheet.getCell(1, 0).value(this.decfiscmens.annee).foreColor('blue');
        setTimeout(() => {
          alert('load successfully');
        }, 0);
      }, (error: any) => {
        alert('load fail');
      });
    }
  }
  onClickMe(args: any) {
  const self = this;
  const filename = 'exportExcel.xlsx';
  const json = JSON.stringify(self.spread.toJSON());
  self.excelIO.save(json, function (blob) {
    saveAs(blob, filename);
  }, function (error: any) {
    console.log(error);
  });
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