import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { Events } from '../models/event.model';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';
import { ApiServiceService } from '../services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  

  public user: User;
  public event: Events;
  public errormsg:string;
  public loading: boolean;
  public role: string;
  currentUser: any;

  

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private usersservice: UserService,
              private apiservice: ApiServiceService,
              private token: TokenStorageService,
              private alertService: AlertService) { }
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.apiservice.geteventreqById(params.id).then(
          (event: Events) => {
            this.loading = false;
            this.event = event;
            
            
            
          }
        );
      }
    );
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  goback(link){
      
    this.router.navigate([link]);
      
  }
  onDelete() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.apiservice.deleteSingleEvent(params.id).then(
          (data:any) => {
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
        this.router.navigate(['calendar-fiscality']);
        this.reloadPage();
          },
          (error) => {
            this.loading = false;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
            
          }
        );
      }
    );
  }
   reloadPage (){
    setTimeout(() => window.location.reload(), 3000);
    
    
  }
  }
