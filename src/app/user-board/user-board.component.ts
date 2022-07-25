import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {
  private role: string;
  isLoggedIn = false;
  private condidatesSub: Subscription;
  usertype: string;
  email: string;
  loading=false;
  public condidates: Condidate[] = [];
  errormsg: string;
  
  constructor(
              
    private Auth: TokenStorageService,
    private cond:CondidateService,
    private router: Router
    
    ) { }

  

  ngOnInit() {
    
   
      const user = this.Auth.getUser();
      this.usertype = user.usertype;
      this.email = user.email;
      

    
    this.loading = true;
                
    this.condidatesSub = this.cond.condidates$.subscribe(
      (condidates) => {
        this.condidates = condidates;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        
        this.errormsg=error.message;
      }
    );
   
    this.cond.getCondidate(this.email);
   
  
    
  }

  getNavigation(link, id){

    this.cond.getCondidateById(id);
    this.router.navigate([link + '/' + id]); 
  }
     
    
    
  
  }
  

  
  
  
  

 


