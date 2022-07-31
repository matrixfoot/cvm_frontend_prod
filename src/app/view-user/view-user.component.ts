import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public user: User;
  public errormsg:string;
  public loading: boolean;
  
  currentUser: any;

  

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private usersservice: UserService,
              private token: TokenStorageService,
              private alertService: AlertService) { }
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.usersservice.getUserById(params.id).then(
          (user: User) => {
            this.loading = false;
            this.user = user;
            this.alertService.info('Données Utilisateur Chargées Avec Succès');
            window.scrollTo(0, 0);
            
            
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
        this.usersservice.deleteUserById(params.id).then(
          (data:any) => {
            this.loading = false;
            this.alertService.success(data.message);
            window.scrollTo(0, 0);
        this.router.navigate(['admin-board']);
          },
          (error) => {
            this.loading = false;
            this.alertService.error(error.error.error);
            window.scrollTo(0, 0);
            this.router.navigate(['admin-board']);
          }
        );
      }
    );
  }
  }
