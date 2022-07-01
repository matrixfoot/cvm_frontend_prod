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
export class HeaderComponent implements OnInit{

  
    private role: string;
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username: string;
    lastname: string;

  constructor(
              
              private Auth: TokenStorageService,
              
              ) { }

  ngOnInit() {
    
    this.isLoggedIn = !!this.Auth.getToken();
    if (this.isLoggedIn) {
      const user = this.Auth.getUser();
      this.role = user.role;
      
      this.username = user.Firstname;
this.lastname= user.Lastname;
    }
  }
  

  logout(): void {
    this.Auth.signOut();
    window.location.reload();
  }
  
  

 

}
