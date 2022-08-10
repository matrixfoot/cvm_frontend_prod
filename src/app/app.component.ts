import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usertype:string;
  currentUser: any;
 
  constructor(private token: TokenStorageService) {
    
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.usertype=this.currentUser.usertype;
  }
}
