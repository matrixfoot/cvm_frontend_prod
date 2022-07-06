
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  public loading: boolean;
  public users: User[] = [];
  private usersSub: Subscription;
  errormsg:string;
  

  constructor(
              private UserService: UserService,
              private router: Router) { }
              ngOnInit() {
                this.loading = true;
                
                this.usersSub = this.UserService.users$.subscribe(
                  (users) => {
                    this.users = users;
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
               
                this.UserService.getAll();
                
              }

              getNavigation(link, id){
      
                this.UserService.getUserById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getclients() {
                return this.users.filter((user) => user.fonction !!== 'collaborateur');
              }
              getcollaborateurs() {
                return this.users.filter((user) => user.fonction === 'collaborateur');
              }
}
  