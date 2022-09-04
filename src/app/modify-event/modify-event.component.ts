import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { Events } from '../models/event.model';
import { ApiServiceService } from '../services/event.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';


import { AlertService } from '../_helpers/alert.service';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.scss']
})
export class ModifyEventComponent implements OnInit {

 
  public eventForm: FormGroup; 
  
  public event: Events;
  
  
  public loading = false;
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
   
    
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiServiceService,
    
    private alertService: AlertService) {}


 ngOnInit() {
  this.loading = true;
    
  
  this.route.params.subscribe(
    (params) => {
      this.apiservice.geteventreqById(params.id).then(
        (event: Events) => {
          
          this.event = event;
          
          this.eventForm = this.formBuilder.group({
            
            title: [this.event.title],
            date: [this.event.date],
          
          });
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const event = new Events();
  
  event.title =this.eventForm.get('title').value;
  event.date =this.eventForm.get('date').value;
  this.apiservice.modifyeventById(this.event._id,event).then(
    (data:any) => {
      this.eventForm.reset();
      this.loading = false;
      this.alertService.success(data.message);
      window.scrollTo(0, 0);
      this.router.navigate(['calendar-fiscality']);
      this.reloadPage();
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
reloadPage (){
  setTimeout(() => window.location.reload(), 3000);
  
  
}
}
