import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { AlertService } from '../_helpers/alert.service';
@Component({
  selector: 'app-modify-user-admin',
  templateUrl: './modify-user-admin.component.html',
  styleUrls: ['./modify-user-admin.component.scss']
})

export class ModifyUserAdminComponent implements OnInit {
  public userForm: FormGroup;
  public users: User[]=[];
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  public user: User;
  public loading = false;
  private usersSub: Subscription;
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
    
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.loading = true;
    
  
    this.route.params.subscribe(
      (params) => {
        this.userservice.getUserById(params.id).then(
          (user: User) => {
            
            this.user = user;
            
            this.userForm = this.formBuilder.group({
              
              role: [this.user.role, Validators.required],
              firstname: [this.user.firstname, Validators.required],
              lastname: [this.user.lastname, Validators.required],
              confirmemail: [null,],
              mobile: [this.user.mobile,],
              confirmmobile: [null,],
              usertype: [this.user.usertype,],
              email: [{value:this.user.email,disabled:true}, Validators.required],
              fonction: [this.user.fonction, Validators.required],
              password: [this.user.password, Validators.required],
              secteur: [this.user.secteur, Validators.required],
              civilite: [this.user.civilite, Validators.required],
              raisonsociale: [this.user.raisonsociale, Validators.required],
              nomsociete: [this.user.nomsociete, Validators.required],
              clientcode: [{value:this.user.clientcode,disabled:true}, Validators.required],
            },
            {
              validator: [MustMatch('email','confirmemail'),MustMatch('mobile','confirmmobile')]
            });
            this.loading = false;
            
          }
        );
      }
    );

    this.usersSub = this.userservice.users$.subscribe(
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

    this.userservice.getAll();
  }
  onSubmit() {
    this.loading = true;
    const user = new User();
    user.userId = this.user._id;
    user.role = this.userForm.get('role').value;
    user.email = this.userForm.get('email').value;
    user.password =this.userForm.get('password').value;
    user.firstname = this.userForm.get('firstname').value;
    user.mobile = this.userForm.get('mobile').value;
    user.usertype =this.userForm.get('usertype').value;
    user.lastname = this.userForm.get('lastname').value;
    user.fonction = this.userForm.get('fonction').value;
    user.secteur = this.userForm.get('secteur').value;
    user.civilite = this.userForm.get('civilite').value;
    user.raisonsociale = this.userForm.get('raisonsociale').value;
    user.nomsociete = this.userForm.get('nomsociete').value;
    user.clientcode = this.userForm.get('clientcode').value;
    this.userservice.modifyUserById(user.userId,user).then(
      (data:any) => {
        this.userForm.reset();
        this.loading = false;
        this.alertService.success(data.message);
      window.scrollTo(0, 0);
        this.router.navigate(['admin-board']);
      },
      (error) => {
        this.loading = false;
        this.alertService.error(error.error.error);
      window.scrollTo(0, 0);
        
      
        
      }
    );
  }
  reloadPage(): void {
    
    window.location.reload();
    
  }
  
  
  
}