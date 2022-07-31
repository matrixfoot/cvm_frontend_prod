
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Condidate } from '../models/condidate.model';
import { CondidateService } from '../services/condidate.service';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  public loading: boolean;
  public users: User[] = [];
  public condidates: Condidate[] = [];
  private condidatesSub: Subscription;
  private usersSub: Subscription;
  errormsg:string;
  

  constructor(
              private UserService: UserService,
              private cond:CondidateService,
              private router: Router) { }
              ngOnInit() {
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
               
                this.cond.getCondidates();

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

              getNavigationusers(link, id){
      
                this.UserService.getUserById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationcondidates(link, id){
      
                this.cond.getCondidateById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getclients() {
                return this.users.filter((user) => user.usertype === 'Client'); 
              }
              getcollaborateurs() {
                return this.users.filter((user) => user.usertype === ('Collaborateur'||'collaborateur')); 
              }
              getcondidates() {
                return this.users.filter((user) => user.usertype === 'Candidat');
              }
}
  