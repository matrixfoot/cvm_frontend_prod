import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';


import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { Decfiscmens } from '../models/dec-fisc-mens';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {
  role: string;
  isLoggedIn = false;
  private condidatesSub: Subscription;
  private decfiscmenssSub: Subscription;
  public decfiscmens: Decfiscmens;
  public errormsg:string;
  public loading: boolean;
  usertype: string;
  email: string;
  userId:string;
  converteddate: Date;
  
  
  public condidates: Condidate[] = [];
  public decfiscmenss: Decfiscmens[] = [];
  
  
  constructor(
              
    private Auth: TokenStorageService,
    private cond:CondidateService,
    private router: Router,
    private dec: DecfiscmensService,
    private route: ActivatedRoute,
    
    ) { }

  

  ngOnInit() {
    
   
      const user = this.Auth.getUser();
      this.usertype = user.usertype;
      this.email = user.email;
      this.userId = user.userId;
      this.role=user.role;

      

    
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
   if (this.usertype=='Candidat')
   {    this.cond.getCondidate(this.email);
   }
   
    this.decfiscmenssSub = this.dec.decfiscmenss$.subscribe(
      (decfiscmenss) => {
        this.decfiscmenss = decfiscmenss;
        this.loading = false;
        
      },
      (error) => {
        this.loading = false;
        
        this.errormsg=error.message;
      }
    );
    
    this.dec.getdecfiscmens(this.userId).then(
      (decfiscmens: Decfiscmens) => {
        this.loading = false;
        this.decfiscmens = decfiscmens;
        console.log(decfiscmens)
        this.converteddate=this.addHours(this.decfiscmens.created);
        this.decfiscmens.created=this.converteddate
        
        console.log(this.converteddate)
        
      }
    );
    
    
    
  }

  getNavigation(link, id){

    this.cond.getCondidateById(id);
    this.router.navigate([link + '/' + id]); 
  }
  addHours(date:Date) {
    date.setTime(date.getTime() * 60 * 60 * 1000);
  
    return date;
  }   
    
    
  
  }
  

  
  
  
  

 


