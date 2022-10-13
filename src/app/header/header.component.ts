import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';



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
    private router: Router,
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
    Swal.fire({
      title: 'Vous êtes sur le point de se déconnecter, est ce que vous avez vérifier l\'enregistrement de tous vos données en cours de saisie?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Réinitialiser',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.Auth.signOut();
    this.reloadPage();
        
      }
      else{
        
      }

    }).catch(() => {
      Swal.fire('opération non aboutie!');
    });
    
    
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3000);
    
    
  }
  

 

}
