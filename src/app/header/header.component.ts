import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


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
              private Auth: TokenStorageService,
              private router: Router,
              ) { }

  ngOnInit() {
    
    this.currentrolesub = this.auth.userrole$.subscribe(
      (currentrole) => {
        this.currentrole = currentrole;
      }
    );
    
    
    
    
  }

  logout(): void {
    this.Auth.signOut();
    window.location.reload();
  }
  
  

  ngOnDestroy() {
    this.modeSub.unsubscribe();
    this.partSub.unsubscribe();
    this.isAuthSub.unsubscribe();
  }

}
