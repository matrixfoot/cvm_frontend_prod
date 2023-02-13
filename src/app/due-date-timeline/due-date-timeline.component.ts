import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Events } from '../models/event.model';

import { ApiServiceService } from '../services/event.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';

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
  isLoggedIn: boolean;
  currentuser: User;
  
  

  constructor(private formBuilder: FormBuilder,
              private UserService: UserService,
              private eve:ApiServiceService,
              private tokenStorage:TokenStorageService,
              private router: Router) { }
              ngOnInit() {
                this.isLoggedIn = !!this.tokenStorage.getToken();
                if (this.isLoggedIn) {
                  this.currentuser = this.tokenStorage.getUser();
                }
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
              voirtout()
              {
                if (this.isLoggedIn) 
                {
                  this.router.navigate(['calendar-fiscality']); 
                }
                else 
                {
                  Swal.fire({
                    title: 'veuillez vous inscrire/se connecter pour consulter cette section',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                  }).then((result) => {
                    this.router.navigate(['login'])
                    this.loading=false
                  }).catch(() => {
                    Swal.fire('opération non aboutie!')
                  })
                }
                
              }
}
  
