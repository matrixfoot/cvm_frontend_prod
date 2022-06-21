import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public mode: string;
  public part: number;
  public partString: string;
  public isAuth: boolean;
  public currentrole:string;
  private currentuser: User[]=[];
  

  private modeSub: Subscription;
  private currentrolesub: Subscription;
  private partSub: Subscription;
  private isAuthSub: Subscription;

  constructor(
              private auth: AuthService,
              private router: Router,
              private authuser: UserService) { }

  ngOnInit() {
    
    this.currentrolesub = this.auth.userrole$.subscribe(
      (currentrole) => {
        this.currentrole = currentrole;
      }
    );
    
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
       
      }
    );
    
    
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/' + this.partString + '/auth/login']);
  }
  
  onBackToParts() {
    this.router.navigate(['/default']);
  }

  ngOnDestroy() {
    this.modeSub.unsubscribe();
    this.partSub.unsubscribe();
    this.isAuthSub.unsubscribe();
  }

}
