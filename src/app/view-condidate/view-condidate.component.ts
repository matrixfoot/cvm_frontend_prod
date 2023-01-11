import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';

@Component({
  selector: 'app-view-condidate',
  templateUrl: './view-condidate.component.html',
  styleUrls: ['./view-condidate.component.scss']
})
export class ViewCondidateComponent implements OnInit {
  public condidate: Condidate;
  public errormsg:string;
  public loading: boolean;
  
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cond: CondidateService,
    private token: TokenStorageService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.cond.getCondidateById(params.id).then(
          (condidate: Condidate) => {
            this.loading = false;
            this.condidate = condidate;
            
            
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
        this.cond.deleteCondidate(params.id).then(
          () => {
            this.loading = false;
        
        this.router.navigate(['']);
          },
          (error) => {
            this.loading = false;
            this.errormsg=error.error;
            this.router.navigate(['home']);
          }
        );
      }
    );
  }
  }
