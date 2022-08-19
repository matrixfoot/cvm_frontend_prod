import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-view-contactreq',
  templateUrl: './view-contactreq.component.html',
  styleUrls: ['./view-contactreq.component.scss']
})
export class ViewContactreqComponent implements OnInit {
public contact: Contact;
  public errormsg:string;
  public loading: boolean;
  
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cont: ContactService,
    private token: TokenStorageService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.cont.getContactreqById(params.id).then(
          (contact: Contact) => {
            this.loading = false;
            this.contact = contact;
            
            
          }
        );
      }
    );
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }

  }
