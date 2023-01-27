import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-contactreq',
  templateUrl: './view-contactreq.component.html',
  styleUrls: ['./view-contactreq.component.scss']
})
export class ViewContactreqComponent implements OnInit {
public contact: Contact;
  public errormsg:string;
  public loading: boolean;
  public optionValue:any
  currentUser: any;
  private usersSub: Subscription;
  users: User[]=[];
  collab: any[]=[];
  filtredcollab: any[];
  prenomcollab: any;
  nomcollab: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cont: ContactService,
    private token: TokenStorageService,private userservice: UserService,private deccompt:DeccomptabiliteService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
    if(this.currentUser.role==='admin')
    {
      this.userservice.getAll()
      this.usersSub = this.userservice.users$.subscribe(
        (users) => {
          this.users = users;
          this.loading = false;
          let filtred=[]
          filtred=this.deccompt.filterByValue(this.users,'desactive')
          this.collab=filtred.filter((user) => user.usertype === ('Collaborateur'||'collaborateur'))
          },
        (error) => {
          this.loading = false;
          this.errormsg=error.message;
        }
      );
      
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.cont.getContactreqById(params.id).then(
          (contact: Contact) => {
            this.loading = false;
            this.contact = contact;
            if(this.contact.affecte)
            {
              this.optionValue=this.contact.affecte
            }
            
          }
        );
      }
    );
    
  }
  filterusers(id:string)
{
  this.filtredcollab=this.deccompt.filterByValue(this.collab,id)
  if(this.filtredcollab.length>0)
  {
    this.prenomcollab=this.filtredcollab[0].firstname
    this.nomcollab=this.filtredcollab[0].lastname
  }
  
}
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  affect()
  {
    this.loading = true;
  const contactreq = new Contact();
  
  contactreq.affecte =this.optionValue;
  
  this.cont.modifycontactreqById(this.contact._id,contactreq).then(
    (data:any) => {
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'réclamation affectée avec succès',
        showConfirmButton: false,
        timer: 3000
      });
      this.router.navigate(['admin-board']);
    },
    (error) => {
      this.loading = false;
     
      
    
      
    }
  );
  }

  }
