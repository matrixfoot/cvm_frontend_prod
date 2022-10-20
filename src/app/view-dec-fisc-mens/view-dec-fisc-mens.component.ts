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


@Component({
  selector: 'app-view-dec-fisc-mens',
  templateUrl: './view-dec-fisc-mens.component.html',
  styleUrls: ['./view-dec-fisc-mens.component.scss']
})
export class ViewDecFiscMensComponent implements OnInit {

 
public decfiscmens: Decfiscmens;
  public errormsg:string;
  public loading: boolean;
  public tfpapyer: any
  public tfpareporter: any
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dec: DecfiscmensService,
    private token: TokenStorageService,
    private excelService: ExcelService
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
            this.tfpapyer=this.decfiscmens.impottype3.tfppayer
            this.tfpareporter=this.decfiscmens.impottype3.tfpreporter
          }
        );
      }
    );
    
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
worksheet.addImage(logo2, 'J1:L3');
//Merge Cells
worksheet.mergeCells(`A1:F1`);
worksheet.mergeCells(`D6:F6`);
    //Add Row and formatting
    
    worksheet.addRow([]);
    
    var row = worksheet.getRow(6);
    row.getCell('D').value = 'التصريح الشهري بالأداءات';
    var row = worksheet.getRow(8);
    row.getCell('G').value ='السنة';
    row.getCell('F').value =this.decfiscmens.annee;
    row.getCell('L').value ='الشهر';
    row.getCell('J').value =this.decfiscmens.mois;
    row.getCell('T').value ='رمز التصريح';
    row.getCell('N').value ='';


    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'déclaration mensuelle.xlsx');
    })

  }
  
  }