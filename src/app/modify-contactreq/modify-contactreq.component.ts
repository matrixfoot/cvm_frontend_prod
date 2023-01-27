import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  option204Value: number;
  contactFormadmin: FormGroup;
  condtactFormcollab: FormGroup;
  public ammounts1: FormArray;
  public ammounts2: FormArray;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cont: ContactService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService) {
      this.contactFormadmin = this.formBuilder.group({
        ammounts1: this.formBuilder.array([ this.createammount1() ])
      })
      this.condtactFormcollab = this.formBuilder.group({
        ammounts2: this.formBuilder.array([ this.createammount2() ])
      })
    }


 ngOnInit() {
  this.loading = true;
  this.currentuser=this.tokenStorage.getUser()  
  this.role=this.currentuser.role
  this.route.params.subscribe(
    (params) => {
      this.cont.getContactreqById(params.id).then(
        (contact: Contact) => {
          
          this.contact = contact;
          if(!this.contact.dateouverturedossier&&this.currentuser.role=='admin'||!this.contact.dateouverturedossier&&this.currentuser.role=='supervisor')
          {
            this.option204Value=Date.now()
          }
          else
          {
            this.option204Value=this.contact.dateouverturedossier
          }
          
          this.loading = false;
          this.contactFormadmin = new FormGroup({              
            ammounts1: new FormArray(contact.statutadmin.map(item => {
              const group = this.initammounts1();
              //@ts-ignore
              group.patchValue(item);
              return group;
            }))
          });
          this.condtactFormcollab = new FormGroup({        
            ammounts2: new FormArray(contact.statutcollab.map(item => {
              const group = this.initammounts2();
              //@ts-ignore
              group.patchValue(item);
              return group;
            }))
          }); 
        }
      );
    }
  );

}
initammounts1() {
  return this.formBuilder.group({
    statut: [{value:'',disabled:true}],
    motif: [{value:'',disabled:true}],
    duree: [{value:'',disabled:true}],
    datefin: [{value:'',disabled:true}],
    fintraitement: [{value:'',disabled:true}],

  });
}
initammounts2() {
  return this.formBuilder.group({
    statutcoll: [{value:'',disabled:true}],
    motifcoll: [{value:'',disabled:true}],
    duree: [{value:'',disabled:true}],
    datefin: [{value:'',disabled:true}],
    fintraitement: [{value:'',disabled:true}],

  });
}
createammount1(): FormGroup {
  return this.formBuilder.group({
    statut: '',
    motif: '',
    duree: '',
    datefin: '',
    fintraitement: ''


  });
}
createammount2(): FormGroup {
  return this.formBuilder.group({
    statutcoll: '',
    motifcoll: '',
    duree: '',
    datefin: '',
    fintraitement: ''

  });
}
onSubmit() {
  this.loading = true;
  const contactreq = new Contact();
  
  contactreq.statutadmin=this.contactFormadmin.getRawValue().ammounts1
  contactreq.dateouverturedossier=this.option204Value  
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
  
  contactreq.statutcollab=this.condtactFormcollab.getRawValue().ammounts1
  contactreq.dateouverturedossier=this.option204Value  
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
