import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService,private router: Router,) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.raisonsociale)
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
}



