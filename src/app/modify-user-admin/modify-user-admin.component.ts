import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-modify-user-admin',
  templateUrl: './modify-user-admin.component.html',
  styleUrls: ['./modify-user-admin.component.scss']
})

export class ModifyUserAdminComponent implements OnInit {
  public userForm: FormGroup;
  public user: User;
  
  public loading = false;
  constructor(private formBuilder: FormBuilder,
    
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) {}

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
              email: [{value:this.user.email,disabled:true}, Validators.required],
              fonction: [this.user.fonction, Validators.required],
              password: [this.user.password, Validators.required],
              secteur: [this.user.secteur, Validators.required],
              civilite: [this.user.civilite, Validators.required],
              raisonsociale: [this.user.raisonsociale, Validators.required],
              nomsociete: [this.user.nomsociete, Validators.required],
              clientcode: [{value:this.user.clientcode,disabled:true}, Validators.required],
            });
            this.loading = false;
            
          }
        );
      }
    );




  }
  onSubmit() {
    this.loading = true;
    const user = new User();
    user.userId = this.user._id;
    user.role = this.userForm.get('role').value;
    user.email = this.userForm.get('email').value;
    user.password =this.userForm.get('password').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.fonction = this.userForm.get('fonction').value;
    user.secteur = this.userForm.get('secteur').value;
    user.civilite = this.userForm.get('civilite').value;
    user.raisonsociale = this.userForm.get('raisonsociale').value;
    user.nomsociete = this.userForm.get('nomsociete').value;
    user.clientcode = this.userForm.get('clientcode').value;
    this.userservice.modifyUserById(user.userId,user).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.router.navigate(['admin-board']);
      },
      (error) => {
        this.loading = false;
        
        
      
        
      }
    );
  }
  reloadPage(): void {
    
    window.location.reload();
    
  }
}