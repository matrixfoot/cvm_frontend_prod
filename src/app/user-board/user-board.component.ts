import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';


import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { DeccomptabiliteService } from '../services/dec-comptabilite';

import { Decfiscmens } from '../models/dec-fisc-mens';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {
  public filtredusers: User[] = [];
  prenom:string;
  nom:string
  role: string;
  isLoggedIn = false;
  private condidatesSub: Subscription;
  private contactsub: Subscription;
  private decfiscmenssSub: Subscription;
  public decfiscmens: Decfiscmens;
  public errormsg:string;
  public loading: boolean;
  usertype: string;
  email: string;
  userId:string;
  converteddate: Date;
  
  
  public condidates: Condidate[] = [];
  public contacts: Contact[] = [];
  public decfiscmenss: Decfiscmens[] = [];
  showgenerate: boolean;
  candidaturevalide=false
  candidaturenonvalide=false
  reclamationtraite=false
  reclamationnontraite=false
  decfiscmenswindow=false
  decfiscmensnumber=0;
  condval=0;
  condnonal=0;
  contval=0;
  contnonval=0;
  constructor(
              
    private Auth: TokenStorageService,
    private cond:CondidateService,
    private cont:ContactService,
    private deccompt: DeccomptabiliteService,
    private router: Router,
    private dec: DecfiscmensService,
    private route: ActivatedRoute,
    
    ) { }

  

  ngOnInit() {
    
   
      const user = this.Auth.getUser();
      this.usertype = user.usertype;
      this.email = user.email;
      this.userId = user.userId;
      this.role=user.role;
      this.prenom=user.Firstname
      this.nom=user.Lastname

      

    
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
   if (this.usertype=='Candidat'||this.usertype=='candidat')
   {    this.cond.getCondidate(this.email);
   }
   this.contactsub = this.cont.contactreqs$.subscribe(
    (contacts) => {
      this.contacts = contacts;
      this.loading = false;
    },
    (error) => {
      this.loading = false;
      
      this.errormsg=error.message;
    }
  );
    this.cont.getContact(this.email);
 
    this.decfiscmenssSub = this.dec.decfiscmenss$.subscribe(
      (decfiscmenss) => {
        this.decfiscmenss = decfiscmenss;
        this.loading = false;
        this.decfiscmensnumber=this.decfiscmenss.length

      },
      (error) => {
        this.loading = false;
        
        this.errormsg=error.message;
      }
    );
    console.log(this.decfiscmenss)
    if (this.usertype==='Client')
    {
    this.dec.getdecfiscmens(this.userId).then(
      (decfiscmens: Decfiscmens) => {
        this.loading = false;
        this.decfiscmens = decfiscmens;
        this.converteddate=this.addHours(this.decfiscmens.created);
        this.decfiscmens.created=this.converteddate
        console.log(this.converteddate)
        
      }
    )};
    
    
    
  }
  
  getNavigationcondidates(link, id){

    this.router.navigate([link + '/' + id]); 
  }
  getNavigation(link, id){

    this.router.navigate([link + '/' + id]); 
  }
  getNavigationcontacts(link, id){

    this.router.navigate([link + '/' + id]); 
  }
  addHours(date:Date) {
    date.setTime(date.getTime() * 60 * 60 * 1000);

    return date;
  }  
getcondidatevalide() {
  //@ts-ignore                    

this.condval=(this.condidates.filter((condidate) => condidate.statutadmin.find(e => e.statut==='cl??tur??'))).length                                 
 //@ts-ignore                    

return this.condidates.filter((condidate) => condidate.statutadmin.find(e => e.statut==='cl??tur??'));                                                           
                                      
}
getcondidatenonvalide() {
//@ts-ignore                    

this.condnonal=(this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='cl??tur??')&&condidate.affecte)).length                                   
//@ts-ignore                    

return this.condidates.filter((condidate) => !condidate.statutadmin.find(e => e.statut==='cl??tur??')&&condidate.affecte);                                                           
                                    
} 
getcontactvalide() {
  //@ts-ignore                    

this.contval=(this.contacts.filter((contact) => contact.statutadmin.find(e => e.statut==='cl??tur??'))).length                                   
 //@ts-ignore                    

return this.contacts.filter((contact) => contact.statutadmin.find(e => e.statut==='cl??tur??'));                                                           
                                      
}
getcontactnonvalide() {
//@ts-ignore                    

this.contnonval=(this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='cl??tur??')&&contact.affecte)).length                                      
//@ts-ignore                    

return this.contacts.filter((contact) => !contact.statutadmin.find(e => e.statut==='cl??tur??')&&contact.affecte);                                                           
                                    
} 
onTabClick(event) {
   
}
  click7()
          {
            this.decfiscmenswindow=true
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
          click32()
          {
            this.decfiscmenswindow=false
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
  }
  

  
  
  
  

 


