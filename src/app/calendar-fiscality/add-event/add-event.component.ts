import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../../services/event.service';
import { Events } from '../../models/event.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventform: FormGroup;
  loading = false;
  event = {
    title: '',
    date: ''
  };
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventform = this.formBuilder.group({
      title: [''],
      
      date: [''],
      
     
      
   
    });
  }
  
  saveEvent() {
    this.loading = true;
    const event  = new Events();
    event.title = this.eventform.get('title').value;
    
    event.date = this.eventform.get('date').value;
      
      
    this.apiService.addEvent(event)
      .then(
        (response: any) => {
          this.eventform.reset();
          this.loading=false;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Event has been added successfully',
              showConfirmButton: false,
              timer: 3000
            });
            this.router.navigate(['calendar-fiscality'])
            this.reloadPage();
            
        },
        err => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: JSON.stringify(err.error.error),
            
            
            
            timer: 3000
          });
          
        });
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3500);
    
    
  }
}