
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Condidate } from '../models/condidate.model';
import { Contact } from '../models/contact.model';
import { CondidateService } from '../services/condidate.service';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {
  public searchForm: FormGroup;
  public loading: boolean;
  public users: User[] = [];
  public condidates: Condidate[] = [];
  public contacts: Contact[] = [];
  private condidatesSub: Subscription;
  private contactsSub: Subscription;
  private usersSub: Subscription;
  errormsg:string;
  firstname:string;
  lastname:string;
  email:string;
  date:Date;
  

  constructor(private formBuilder: FormBuilder,
              private UserService: UserService,
              private cond:CondidateService,
              private cont:ContactService,
              private router: Router) { }
              ngOnInit() {
                this.searchForm = this.formBuilder.group({
              
                  lastname: [null,],
                  firstname: [null,],
                  email: [null,],
                  date: [null,],
                
                })
                this.contactsSub = this.cont.contactreqs$.subscribe(
                  (contacts) => {
                    this.contacts = contacts;
                    
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    
                    this.errormsg = error.message;
                  }
                );

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
               
                
                
              }

              getNavigationusers(link, id){
      
                this.UserService.getUserById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationcondidates(link, id){
      
                this.cond.getCondidateById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationcontacts(link, id){
      
                this.cont.getContactreqById(id);
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
              getusersbyfirstname() {
                this.firstname=this.searchForm.get('firstname').value;
                this.UserService.getuserbyfirstname(this.firstname)
                 
              }
              getusersbylastname() {
                this.lastname=this.searchForm.get('lastname').value;
                                this.UserService.getuserbylastname(this.lastname)
                                 
              }
              getusersbyemail() {
                                
                this.email=this.searchForm.get('email').value;
                this.UserService.getuserbyemail(this.email);
                                               
                                                 
              }
              getall() {
                                
                                                
                this.UserService.getAll();
                                                               
                                                                 
             }                        
           
              getcondidatesbyemail() {
                                                                                
                this.email=this.searchForm.get('email').value;
                this.cond.getCondidate(this.email);
                                                                                                
                                                                                                 
             }
              getcondidatesall() {
                                                                                
                                                          
                this.cond.getCondidates();
                                                                                                                
                                                                                                                 
             }
            getcontactreqsbydateinf() {
                                                                                
              
              this.cont.getContactreqsinf(this.searchForm.get('date').value);
                                                                                              
                                                                                               
           }
           getcontactreqsbydatesup() {
                                                                                
            
            this.cont.getContactreqssup(this.searchForm.get('date').value);
                                                                                            
                                                                                             
         }
          getcontactsall() {
                                                                              
                                                        
              this.cont.getContactreqs();
                                                                                                              
                                                                                                               
           }
}
  