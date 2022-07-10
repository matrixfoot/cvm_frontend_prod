import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  public userForm: FormGroup; 
  public currentuser: User;
  public users: User[]=[];
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    this.loading = true;
    this.currentuser = this.tokenStorage.getUser();
    
            
            this.userForm = this.formBuilder.group({
              
              role: [this.currentuser.role, Validators.required],
              firstname: [this.currentuser.Firstname, Validators.required],
              lastname: [this.currentuser.Lastname, Validators.required],
              email: [this.currentuser.email, Validators.required],
              fonction: [this.currentuser.fonction, Validators.required],
              password: [this.currentuser.password, Validators.required],
              confirmpassword: [this.currentuser.confirmpassword, Validators.required],
              secteur: [this.currentuser.secteur, Validators.required],
              civilite: [this.currentuser.civilite, Validators.required],
              raisonsociale: [this.currentuser.raisonsociale, Validators.required],
              nomsociete: [this.currentuser.nomsociete, Validators.required],
              clientcode: [{value:this.currentuser.clientcode,disabled:true}, Validators.required],
            });
            this.loading = false;
            
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
    user.userId = this.currentuser.userId;
    user.role = this.userForm.get('role').value;
    user.email = this.userForm.get('email').value;
    user.password =this.userForm.get('password').value;
    user.confirmpassword =this.userForm.get('confirmpassword').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.fonction = this.userForm.get('fonction').value;
    user.secteur = this.userForm.get('secteur').value;
    user.civilite = this.userForm.get('civilite').value;
    user.raisonsociale = this.userForm.get('raisonsociale').value;
    user.nomsociete = this.userForm.get('nomsociete').value;
    user.clientcode = this.userForm.get('clientcode').value;
    this.userservice.modifyUserById(this.currentuser.userId,user).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.tokenStorage.signOut();
        
        this.reloadPage();
        this.router.navigate(['login']);
      },
      (error) => {
        this.loading = false;
        this.errormsg = JSON.stringify(error.error) ;
        
      }
    );
  }
  reloadPage(): void {
    
    window.location.reload();
    
  }
}
