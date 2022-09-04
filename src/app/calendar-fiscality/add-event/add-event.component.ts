import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../../services/event.service';
import { Events } from '../../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

 

  event = {
    title: '',
    date: ''
  };
  error: any;
  constructor(
    public http: HttpClient,
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  saveEvent() {
    const event  = new Events();
    
      event.title= this.event.title,
      event.date= this.event.date,
      
    this.apiService.addEvent(event)
      .then(
        (response: any) => {
          if (response.type === 'success') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Event has been added successfully',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/calendar']);
          }
        },
        err => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
          });
          this.event.title = '';
          this.event.date = '';
        });
  }
}