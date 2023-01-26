
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { concat, Subscription } from 'rxjs';
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
import { Sort } from '../_helpers/sort';
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
  ca=0;
  cb=0;
  coll=0;
  cons=0;
  decfiscvali=0;
  decfiscnonvali=0;
  deccomptvalid=0;
  deccompnonval=0;
  del=0;
  condval=0;
  condnonal=0;
  contval=0;
  contnonval=0;
  condida=0;
  dossdecfiscencours=0;
  dossdeccompencours=0;
  dosscandencours=0;
  dosscontactencours=0;
  dossencours: any[]=[];
  showdossencours: boolean;
  dossencours1: Decfiscmens[];
  dossencours2: Deccomptabilite[];
  dossencours3: Condidate[];
  dossencours4: Contact[];
  showdosspasencoreaffecte: boolean;
  dossdecfiscnonaffecte=0;
  dossdeccompnonaffecte=0;
  dosscandnonaffecte=0;
  dosscontactnonaffecte=0;
  dossnonaffecte1: Decfiscmens[];
  dossnonaffecte2: Deccomptabilite[];
  dossnonaffecte3: Condidate[];
  dossnonaffecte4: Contact[];
  dossnonaffecte: any[]=[];
  prenomaffecte: string;
  nomaffecte: string;
  sorteddossencours: any[]=[];
  sorteddossnonaffecte: any[]=[];
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
                    this.errormsg=error.message;
                  }
                );
                this.decfiscmenssSub = this.dec.decfiscmenss$.subscribe(
                  (decfiscmenss) => {
                    this.decfiscmenss = decfiscmenss;
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
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
                    this.errormsg=error.message;
                  }
                );
               this.getall()
               this.getalldeccomptabilites()
               this.getalldecfiscmenss()
               this.getalldeleted()
               this.getclients()
               this.getclientsbloqued()
               this.getcollaborateurs()
               this.getcondidates()
               this.getcondidatesall()
               this.getconsultants()
               this.getcontactsall()
              }
filterusers(id:string)
{
  this.filtredusers=this.deccompt.filterByValue(this.users,id)
  if(this.filtredusers.length>0)
  {
    this.prenom=this.filtredusers[0].firstname
    this.nom=this.filtredusers[0].lastname
  }
  else
  {
    this.prenom='utilisateur supprimé'
    this.nom='utilisateur supprimé'
  }
}
filterusers2(id:string)
{
  this.filtredusers2=this.deccompt.filterByValue(this.users2,id)
  if(this.filtredusers2.length>0)
  {
    this.prenomfisc=this.filtredusers2[0].firstname
    this.nomfisc=this.filtredusers2[0].lastname
    this.prenomaffecte=this.filtredusers2[0].firstname
    this.nomaffecte=this.filtredusers2[0].lastname
  }
  else
  {
    this.prenomfisc='utilisateur supprimé'
    this.nomfisc='utilisateur supprimé'
  }
  
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
              
              getclients() {
                let filtred=[]
                filtred=this.deccompt.filterByValue(this.users,'desactive')
                this.ca=(filtred.filter((filter) => (filter.usertype === 'Client'&&!filter.desactive.statut))).length
                return filtred.filter((filter) => (filter.usertype === 'Client'&&!filter.desactive.statut)); 
              }
              getclientsbloqued() {
                let filtred=[]
                filtred=this.deccompt.filterByValue(this.users,'desactive')
                this.cb=(filtred.filter((user) => user.desactive.statut)).length
                return (filtred.filter((user) => user.desactive.statut));
               
              }
              getcollaborateurs() {
                let filtred=[]
                filtred=this.deccompt.filterByValue(this.users,'desactive')
                this.coll=(filtred.filter((user) => user.usertype === ('Collaborateur'||'collaborateur'))).length
                return filtred.filter((user) => user.usertype === ('Collaborateur'||'collaborateur')); 
              }
              getconsultants() {
                let filtred=[]
                filtred=this.deccompt.filterByValue(this.users,'desactive')
                this.cons=(filtred.filter((user) => user.usertype === ('Consultant'||'consultant'))).length
                return filtred.filter((user) => user.usertype === ('Consultant'||'consultant')); 
              }
              getcondidates() {
                let filtred=[]
                filtred=this.deccompt.filterByValue(this.users,'desactive')
                this.condida=(filtred.filter((user) => user.usertype === 'Candidat')).length
                return filtred.filter((user) => user.usertype === 'Candidat');
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
             getdossiersencours()
             {
              this.getall()
              this.getalldeccomptabilites()
              this.getalldecfiscmenss()
              this.getcondidatesall()
              this.getcontactsall()
              //@ts-ignore                                                            
              this.dossdecfiscencours=(this.decfiscmenss.filter((decfiscmens) => !decfiscmens.statutadmin.find(e => e.statut==='Clôturé')&&decfiscmens.affecte)).length
              //@ts-ignore                                                            
              this.dossdeccompencours=(this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.statutadmin.find(e => e.statut==='Clôturé')&&deccomptabilite.affecte)).length                                   
              //@ts-ignore                                                            
              this.dosscandencours=(this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='Clôturé')&&condidate.affecte)).length                                   
              //@ts-ignore                                                            
              this.dosscontactencours=(this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='Clôturé')&&contact.affecte)).length                                   
       //@ts-ignore                                                            
              this.dossencours1=(this.decfiscmenss.filter((decfiscmens) => !decfiscmens.statutadmin.find(e => e.statut==='Clôturé')&&decfiscmens.affecte))
       //@ts-ignore                                                            
              this.dossencours2=((this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.statutadmin.find(e => e.statut==='Clôturé')&&deccomptabilite.affecte)))
       //@ts-ignore                                                            
              this.dossencours3=((this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='Clôturé')&&condidate.affecte)))
       //@ts-ignore                                                            
              this.dossencours4=((this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='Clôturé')&&contact.affecte)))
       this.dossencours=[]
       this.dossencours=this.dossencours.concat(this.dossencours1,this.dossencours2,this.dossencours3,this.dossencours4) 
       const sort = new Sort();
       this.sorteddossencours=this.dossencours.sort(sort.startSort('created','asc','')); 
       
            return (this.sorteddossencours);
             }
             getdossiersencoursnonaffecte()
             {
              this.getall()
              this.getalldeccomptabilites()
              this.getalldecfiscmenss()
              this.getcondidatesall()
              this.getcontactsall()
              this.dossdecfiscnonaffecte=(this.decfiscmenss.filter((decfiscmens) => !decfiscmens.affecte)).length
              this.dossdeccompnonaffecte=(this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.affecte)).length                                   
              this.dosscandnonaffecte=(this.condidates.filter((condidate) => !condidate.affecte)).length                                   
              this.dosscontactnonaffecte=(this.contacts.filter((contact) => !contact.affecte)).length                                   
       this.dossnonaffecte1=(this.decfiscmenss.filter((decfiscmens) => !decfiscmens.affecte))
       this.dossnonaffecte2=((this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.affecte)))
       this.dossnonaffecte3=((this.condidates.filter((condidate) => !condidate.affecte)))
       this.dossnonaffecte4=((this.contacts.filter((contact) => !contact.affecte)))
       this.dossnonaffecte=[]
       this.dossnonaffecte=this.dossnonaffecte.concat(this.dossnonaffecte1,this.dossnonaffecte2,this.dossnonaffecte3,this.dossnonaffecte4)
       console.log(this.dossnonaffecte) 
       const sort = new Sort();
       this.sorteddossnonaffecte=this.dossnonaffecte.sort(sort.startSort('created','asc',''));
       console.log(this.dossnonaffecte) 
            return (this.sorteddossnonaffecte);
             }
             getalldecfiscmenss() {
                                
                                                
              this.dec.getdecfiscmenss();
                                                             
                                                               
           } 
           getdecfiscmenssvalide() {
            //@ts-ignore                    
             this.decfiscvali=(this.decfiscmenss.filter((decfiscmens) => decfiscmens.statutadmin.find(e => e.statut==='Clôturé'))).length                                   
                        //@ts-ignore                    
             return this.decfiscmenss.filter((decfiscmens) => decfiscmens.statutadmin.find(e => e.statut==='Clôturé'));                                                           
                                                             
         }  
         getdecfiscmenssnonvalide() {
                       //@ts-ignore                    
                     
          this.decfiscnonvali=(this.decfiscmenss.filter((decfiscmens) => !decfiscmens.statutadmin.find(e => e.statut==='Clôturé')&&decfiscmens.affecte)).length                                      
                      //@ts-ignore                    

          return this.decfiscmenss.filter((decfiscmens) => !decfiscmens.statutadmin.find(e => e.statut==='Clôturé')&&decfiscmens.affecte);                                                           
                                                           
       } 
           getalldeccomptabilites() {                                   
            this.deccompt.getdeccomptabilites();                                                    
         }
         getdeccomptabilitesvalide() {
                      //@ts-ignore                    
                      
          this.deccomptvalid=(this.deccomptabilites.filter((deccomptabilite) => deccomptabilite.statutadmin.find(e => e.statut==='Clôturé'))).length                                      
                      //@ts-ignore                    

          return this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.statutadmin.find(e => e.statut==='Clôturé'));                                                           
                                                           
       }  
       getdeccomptabilitesnonvalide() {
                     //@ts-ignore                    
                       
         this.deccompnonval=(this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.statutadmin.find(e => e.statut==='Clôturé')&&deccomptabilite.affecte)).length                                       
                    //@ts-ignore                    

         return this.deccomptabilites.filter((deccomptabilite) => !deccomptabilite.statutadmin.find(e => e.statut==='Clôturé')&&deccomptabilite.affecte);                                                           
                                                         
     }                     
             getalldeleted() {
                                
                                                
              this.UserService.getAlldeleted();
              this.del=this.usersdeleted.length                                              
                                                               
           } 
              getcondidatesbyemail() {
                                                                                
                this.email=this.searchForm.get('email').value;
                this.cond.getCondidate(this.email);
                                                                                                
                                                                                                 
             }
              getcondidatesall() {
                                                                                
                                                          
                this.cond.getCondidates();
                                                                                                                
                                                                                                                 
             }
             getcondidatevalide() {
                           //@ts-ignore                    
                 
               this.condval=(this.condidates.filter((condidate) => condidate.statutadmin.find(e => e.statut==='Clôturé'))).length                                 
                          //@ts-ignore                    

               return this.condidates.filter((condidate) => condidate.statutadmin.find(e => e.statut==='Clôturé'));                                                           
                                                               
           }
           getcondidatenonvalide() {
                         //@ts-ignore                    
                   
             this.condnonal=(this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='Clôturé')&&condidate.affecte)).length                                   
                        //@ts-ignore                    

             return this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='Clôturé')&&condidate.affecte);                                                           
                                                             
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
                         //@ts-ignore                    
                   
             this.contval=(this.contacts.filter((contact) => contact.statutadmin.find(e => e.statut==='Clôturé'))).length                                   
                        //@ts-ignore                    

             return this.contacts.filter((contact) => contact.statutadmin.find(e => e.statut==='Clôturé'));                                                           
                                                             
         }
         getcontactnonvalide() {
                      //@ts-ignore                    
                      
          this.contnonval=(this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='Clôturé')&&contact.affecte)).length                                      
                      //@ts-ignore                    

          return this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='Clôturé')&&contact.affecte);                                                           
                                                           
       }
           exportusersAsXLSX(source:any[],name:string):void {
            this.excelService.exportAsExcel(source, name);
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
          click29()
          {
            this.showdossencours=true
          }
          click30()
          {
            this.showdosspasencoreaffecte=true
          }
          click15()
          {
this.clientactif=false
          }
          click16()
          {
      this.clientbloque=false      
          }
          click17()
          {
         this.clientsupptemporairement=false   
          }
          click18()
          {
            this.collaborateurs=false
          }
          click19()
          {
            this.consultants=false
          }
          click20()
          {
            this.candidat=false
          }
          click21()
          {
            this.decfiscmensvalide=false
          }
          click22()
          {
            this.decfiscmensnonvalide=false
          }
          click23()
          {
            this.deccomptabilitevalide=false
          }
          click24()
          {
            this.deccomptabilitenonvalide=false
          }
          click25()
          {
            this.candidaturevalide=false
          }
          click26()
          {
            this.candidaturenonvalide=false
          }
          click27()
          {
            this.reclamationtraite=false
          }
          click28()
          {
            this.reclamationnontraite=false
          }
          click31()
          {
            this.showdossencours=false
          }
          click32()
          {
            this.showdosspasencoreaffecte=false
          }
}
  