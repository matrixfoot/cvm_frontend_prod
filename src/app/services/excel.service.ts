import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Deccomptabilite } from '../models/dec-comptabilite';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json1: any[],json2: any[],json3: any[],json4: any[],json5: any[],json6: any[], excelFileName: string): void {
    
    const worksheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json1);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json2);
    const worksheet3: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json3);
    const worksheet4: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json4);
    const worksheet5: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json5);
    const worksheet6: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json6);
    const workbook: XLSX.WorkBook = { Sheets: { 'CA(note honoraire)': worksheet1,'CA(recette)': worksheet2,'facture achat': worksheet3,'relevé manuel': worksheet4,
    'relevé document joint': worksheet5,'traitement des salaires': worksheet6 }, SheetNames: ['CA(note honoraire)','CA(recette)',
    'facture achat','relevé manuel','relevé document joint','traitement des salaires'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
   
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
   

  }


  //general export excel file
  public exportAsExcel(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcel(excelBuffer, excelFileName);
  }

  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}