import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { AlertService } from '../_helpers/alert.service';
import { CommunService } from '../services/commun';

@Component({
  selector: 'app-modify-condidate',
  templateUrl: './modify-condidate.component.html',
  styleUrls: ['./modify-condidate.component.scss']
})
export class ModifyCondidateComponent implements OnInit {

  public condidateForm: FormGroup; 
  public currentuser: User;
  public users: User[]=[];
  public condidate: Condidate;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  status: string[]=[];
  role: string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cond: CondidateService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,private commun: CommunService) {}


 ngOnInit() {
  this.loading = true;
  this.currentuser=this.tokenStorage.getUser()
  this.role=this.currentuser.role
  this.status=this.commun.status
  
  this.route.params.subscribe(
    (params) => {
      this.cond.getCondidateById(params.id).then(
        (condidate: Condidate) => {
          
          this.condidate = condidate;
          
          this.condidateForm = this.formBuilder.group({
            
            decision: [this.condidate.decision, Validators.required],
            motif: [this.condidate.motif, Validators.required],
            decisioncoll: [this.condidate.decisioncoll, Validators.required],
            motifcoll: [this.condidate.motifcoll, Validators.required],
          });
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const condidate = new Condidate();
  
  condidate.decision =this.condidateForm.get('decision').value;
  condidate.motif =this.condidateForm.get('motif').value;
  this.cond.modifycondidateById(this.condidate._id,condidate).then(
    (data:any) => {
      this.condidateForm.reset();
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
  const condidate = new Condidate();
  
  condidate.decisioncoll =this.condidateForm.get('decisioncoll').value;
  condidate.motifcoll =this.condidateForm.get('motifcoll').value;
  this.cond.modifycondidateById(this.condidate._id,condidate).then(
    (data:any) => {
      this.condidateForm.reset();
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
