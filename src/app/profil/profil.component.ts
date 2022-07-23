import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  loading=false;
  errormsg:string;
  currentUser: any;
  constructor(private token: TokenStorageService,private router: Router,private route: ActivatedRoute,private usersservice: UserService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  onDelete() {
  this.loading = true;
  
    
      this.usersservice.deleteUserById(this.currentUser.userId)
        
      this.loading = false;
      this.reloadPage();

        
    
  
}
reloadPage(): void {
    
  window.location.reload();
  
}
}
