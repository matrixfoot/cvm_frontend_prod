import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Events } from '../models/event.model';

import { ApiServiceService } from '../services/event.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-due-date-timeline',
  templateUrl: './due-date-timeline.component.html',
  styleUrls: ['./due-date-timeline.component.scss'],
  
})
export class DueDateTimelineComponent implements OnInit {

  
  public loading: boolean;
  private eventsSub: Subscription;
  public events: Events[] = [];
  
  errormsg:string;
  
  

  constructor(private formBuilder: FormBuilder,
              private UserService: UserService,
              private eve:ApiServiceService,
              
              private router: Router) { }
              ngOnInit() {
                
                this.eventsSub = this.eve.getcomingEvents().subscribe(
                  (events) => {
                    this.events = events;
                    
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    
                    this.errormsg = error.message;
                  }
                );

                
               
                
                
              }

              getNavigation(link, id){
      
                this.eve.geteventreqById(id);
                this.router.navigate([link + '/' + id]); 
              }
              
}
  
