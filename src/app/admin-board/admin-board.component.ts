
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Decfiscmens } from '../models/dec-fisc-mens';
import { Deccomptabilite } from '../models/dec-comptabilite';
import { Userdeleted } from '../models/user-deleted.model';
import { Router } from '@angular/router';
import { Condidate } from '../models/condidate.model';
import { Contact } from '../models/contact.model';
import { CondidateService } from '../services/condidate.service';
import { ContactService } from '../services/contact.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ExcelService} from '../services/excel.service';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {
  public searchForm: FormGroup;
  public loading: boolean;
  public users: User[] = [];
  public users2: User[]= [];

  public filtredusers: User[] = [];
  public decfiscmenss: Decfiscmens[] = [];
  public deccomptabilites: Deccomptabilite[] = [];

  public usersdeleted: Userdeleted[] = [];
  public condidates: Condidate[] = [];
  public contacts: Contact[] = [];
  private condidatesSub: Subscription;
  private contactsSub: Subscription;
  private usersSub: Subscription;
  private usersdeletedSub: Subscription;
  private decfiscmenssSub: Subscription;
  private deccomptabilitesSub: Subscription;
  prenom:string;
  nom:string
  errormsg:string;
  firstname:string;
  lastname:string;
  statut:string;
  email:string;
  date:Date;
  firstnamedecomptabilite:string
  lastnamedeccomptabilite:string
  filtredusers2: User[] = [];
  prenomfisc: string
  nomfisc: string
  clientactif=false
  clientbloque=false
  clientsupptemporairement=false
  collaborateurs=false
  consultants=false
  candidat=false
  decfiscmensvalide=false
  decfiscmensnonvalide=false
  deccomptabilitevalide=false
  deccomptabilitenonvalide=false
  candidaturevalide=false
  candidaturenonvalide=false
  reclamationtraite=false
  reclamationnontraite=false
  constructor(private formBuilder: FormBuilder,
              private UserService: UserService,
              private cond:CondidateService,
              private cont:ContactService,
              private dec:DecfiscmensService,
              private deccompt:DeccomptabiliteService,
              private router: Router,
              private excelService:ExcelService) { }
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
                    this.users2= users
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
                this.decfiscmenssSub = this.dec.decfiscmenss$.subscribe(
                  (decfiscmenss) => {
                    this.decfiscmenss = decfiscmenss;
                    console.log(decfiscmenss)
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
                this.deccomptabilitesSub = this.deccompt.deccomptabilites$.subscribe(
                  (deccomptabilites) => {
                    this.deccomptabilites = deccomptabilites;
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
                this.usersdeletedSub = this.UserService.usersdeleted$.subscribe(
                  (usersdeleted) => {
                    this.usersdeleted = usersdeleted;
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
               this.getall()
               this.getalldeccomptabilites()
              }
filterusers(id:string)
{
  this.filtredusers=this.deccompt.filterByValue(this.users,id)
  this.prenom=this.filtredusers[0].firstname
  this.nom=this.filtredusers[0].lastname
}
filterusers2(id:string)
{
  this.filtredusers2=this.deccompt.filterByValue(this.users2,id)
  this.prenomfisc=this.filtredusers2[0].firstname
  this.nomfisc=this.filtredusers2[0].lastname
}
              getNavigationusers(link, id){
      
                this.UserService.getUserById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationusersdeleted(link, id){
      
                this.UserService.getUserdeletedById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationdecfiscmenss(link, id){
      
                this.dec.getDecfiscmensreqById(id);
                this.router.navigate([link + '/' + id]); 
              }
              getNavigationdeccomptabilites(link, id){
      
                this.deccompt.getDeccomptabilitereqById(id);
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
              getuserdeccomptabilite(id:string) {
                 
                return this.filtredusers=this.users.filter((user) => (user._id === id));
              }
              
              /*getclients() {
                return this.users.filter((user) => (user.usertype === 'Client'&&!user.desactive.statut)); 
              }*/
              /*getclientsbloqued() {
               
                return (this.users.filter((user) => user.desactive.statut));
               
              }*/
              getcollaborateurs() {
                return this.users.filter((user) => user.usertype === ('Collaborateur'||'collaborateur')); 
              }
              getconsultants() {
                return this.users.filter((user) => user.usertype === ('Consultant'||'consultant')); 
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
             getalldecfiscmenss() {
                                
                                                
              this.dec.getdecfiscmenss();
                                                             
                                                               
           } 
           getdecfiscmenssvalide() {
                                
                                                
            return this.decfiscmenss.filter((decfiscmens) => decfiscmens.statut === ('Valide'));                                                           
                                                             
         }  
         getdecfiscmenssnonvalide() {
                                
                                                
          return this.decfiscmenss.filter((decfiscmens) => decfiscmens.statut != ('Valide'));                                                           
                                                           
       } 
           getalldeccomptabilites() {                                   
            this.deccompt.getdeccomptabilites();                                                    
         }
         getdeccomptabilitesvalide() {
                                
                                                
          return this.deccomptabilites.filter((deccomptabilite) => deccomptabilite.statut === ('Valide'));                                                           
                                                           
       }  
       getdeccomptabilitesnonvalide() {
                                
                                                
        return this.deccomptabilites.filter((deccomptabilite) => deccomptabilite.statut != ('Valide'));                                                           
                                                         
     }                     
             getalldeleted() {
                                
                                                
              this.UserService.getAlldeleted();
                                                             
                                                               
           } 
              getcondidatesbyemail() {
                                                                                
                this.email=this.searchForm.get('email').value;
                this.cond.getCondidate(this.email);
                                                                                                
                                                                                                 
             }
              getcondidatesall() {
                                                                                
                                                          
                this.cond.getCondidates();
                                                                                                                
                                                                                                                 
             }
             getcondidatevalide() {
                                
                                                
              return this.condidates.filter((condidate) => condidate.decision === ('Valide'));                                                           
                                                               
           }
           getcondidatenonvalide() {
                                
                                                
            return this.condidates.filter((condidate) => condidate.decision != ('Valide'));                                                           
                                                             
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
           getcontactvalide() {
                                
                                                
            return this.contacts.filter((contact) => contact.statut === ('Valide'));                                                           
                                                             
         }
         getcontactnonvalide() {
                                
                                                
          return this.contacts.filter((contact) => contact.statut != ('Valide'));                                                           
                                                           
       }
           exportusersAsXLSX():void {
            this.excelService.exportAsExcelFile(this.users,[],[],[],[],[], 'sample');
          }
          onTabClick(event) {
   
          }
          click1()
          {
this.clientactif=true
          }
          click2()
          {
      this.clientbloque=true      
          }
          click3()
          {
         this.clientsupptemporairement=true   
          }
          click4()
          {
            this.collaborateurs=true
          }
          click5()
          {
            this.consultants=true
          }
          click6()
          {
            this.candidat=true
          }
          click7()
          {
            this.decfiscmensvalide=true
          }
          click8()
          {
            this.decfiscmensnonvalide=true
          }
          click9()
          {
            this.deccomptabilitevalide=true
          }
          click10()
          {
            this.deccomptabilitenonvalide=true
          }
          click11()
          {
            this.candidaturevalide=true
          }
          click12()
          {
            this.candidaturenonvalide=true
          }
          click13()
          {
            this.reclamationtraite=true
          }
          click14()
          {
            this.reclamationnontraite=true
          }
}
  