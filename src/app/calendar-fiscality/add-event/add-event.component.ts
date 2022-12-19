import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../../services/event.service';
import { Events } from '../../models/event.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { read, utils } from "xlsx"

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventform: FormGroup;
  loading = false;
  file: any;
  uploadEvent: any;
  arrayBuffer: string | ArrayBuffer;
  exceljsondata: Event[];
  event = {
    title: '',
    date: '',
    description:''
  };
  error: any;
  constructor(
    private formBuilder: FormBuilder,private eve:ApiServiceService,private apiService: ApiServiceService,private router: Router
  ) { }

  ngOnInit() {
    this.eventform = this.formBuilder.group({
      title: [''],
      
      date: [''],
      
      description: [''],
      
   
    });
  }
  
  saveEvent() {
    this.loading = true;
    const event  = new Events();
    event.title = this.eventform.get('title').value;
    event.description = this.eventform.get('description').value;
    event.date = this.eventform.get('date').value;
      
      
    this.apiService.addEvent(event)
      .then(
        (response: any) => {
          this.eventform.reset();
          this.loading=false;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'évènement créé avec succès',
              showConfirmButton: false,
              timer: 3000
            });
            this.router.navigate(['calendar-fiscality'])
            this.reloadPage();
            
        },
        err => {
          this.loading=false;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: JSON.stringify(err.error.error),
            
            
            
            timer: 3000
          });
          
        });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadEvent = event;
    }
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      //@ts-ignore
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = read(bstr, {
        type: "binary"
      });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.exceljsondata = utils.sheet_to_json(worksheet, {
        raw: true,
        defval: "",
      });
    };
    fileReader.readAsArrayBuffer(this.file);
  }
  afficher()
  {
    console.log(this.exceljsondata)
    this.eve.addEvents(this.exceljsondata).then(
      (data:any) => {
        this.loading = false;
console.log(this.exceljsondata)        
Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'évènements ajoutées avec succès!',
          showConfirmButton: false,
          timer: 6000 
        });
        this.router.navigate(['calendar-fiscality'])
            this.reloadPage();
      },
      (error) => {
        this.loading = false;
        
      }
    );
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3500);
    
    
  }
}