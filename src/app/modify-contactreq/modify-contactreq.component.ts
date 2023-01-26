import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { AlertService } from '../_helpers/alert.service';

@Component({
  selector: 'app-modify-contactreq',
  templateUrl: './modify-contactreq.component.html',
  styleUrls: ['./modify-contactreq.component.scss']
})
export class ModifyContactreqComponent implements OnInit {
  public contactForm: FormGroup; 
  public currentuser: User;
  public users: User[]=[];
  public contact: Contact;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  role: string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cont: ContactService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService) {}


 ngOnInit() {
  this.loading = true;
  this.currentuser=this.tokenStorage.getUser()  
  this.role=this.currentuser.role
  this.route.params.subscribe(
    (params) => {
      this.cont.getContactreqById(params.id).then(
        (contact: Contact) => {
          
          this.contact = contact;
          
          this.contactForm = this.formBuilder.group({
            
            statut: [this.contact.statut, Validators.required],
            statutcoll: [this.contact.statutcoll, Validators.required],

          
          });
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const contactreq = new Contact();
  
  contactreq.statut =this.contactForm.get('statut').value;
  
  this.cont.modifycontactreqById(this.contact._id,contactreq).then(
    (data:any) => {
      this.contactForm.reset();
      this.loading = false;
      this.alertService.success(data.message);
      window.scrollTo(0, 0);
      this.router.navigate(['admin-board']);
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
onSubmitcoll() {
  this.loading = true;
  const contactreq = new Contact();
  
  contactreq.statutcoll =this.contactForm.get('statutcoll').value;
  
  this.cont.modifycontactreqById(this.contact._id,contactreq).then(
    (data:any) => {
      this.contactForm.reset();
      this.loading = false;
      this.alertService.success(data.message);
      window.scrollTo(0, 0);
      this.router.navigate(['collab-board']);
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
reloadPage(): void {
  
  window.location.reload();
  
}
}
