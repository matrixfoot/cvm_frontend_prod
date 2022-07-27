import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';

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
              
              role: [this.currentuser.role,],
              firstname: [this.currentuser.Firstname,],
              lastname: [this.currentuser.Lastname,],
              confirmemail: [null,Validators.required],
              mobile: [this.currentuser.mobile,],
              confirmmobile: [null,Validators.required],
              usertype: [this.currentuser.usertype,],
              email: [this.currentuser.email,],
              fonction: [this.currentuser.fonction,],
              password: [null,],
              confirmpassword: [null,],
              secteur: [this.currentuser.secteur,],
              civilite: [this.currentuser.civilite,],
              raisonsociale: [this.currentuser.raisonsociale,],
              activitynature: [this.currentuser.natureactivite,],
              activity: [this.currentuser.activite,],
              underactivity: [this.currentuser.sousactivite,],
              fiscalimpot: [this.currentuser.regimefiscalimpot,],
              fiscaltvaassobli: [{value:"Assujeti Obligatoire",disabled:true}],
              fiscalmat: [this.currentuser.matriculefiscale,],
              nomsociete: [this.currentuser.nomsociete,],
              clientcode: [{value:this.currentuser.clientcode,disabled:true}, Validators.required],
            },
            {
              validator: [MustMatch('email','confirmemail'),MustMatch('mobile','confirmmobile')]
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
    user.mobile = this.userForm.get('mobile').value;
    user.usertype =this.userForm.get('usertype').value;
    user.confirmpassword =this.userForm.get('confirmpassword').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.fonction = this.userForm.get('fonction').value;
    user.natureactivite = this.userForm.get('activitynature').value;
    user.activite =this.userForm.get('activity').value;
    user.sousactivite =this.userForm.get('underactivity').value;
    user.regimefiscalimpot = this.userForm.get('fiscalimpot').value;
    user.matriculefiscale = this.userForm.get('fiscalmat').value;
    user.regimefiscaltva = this.userForm.get('fiscaltvaassobli').value;
    user.matriculefiscale = this.userForm.get('fiscalmat').value;
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
  myFunction2() {
    var checkbox:any = document.getElementById("myCheck2");
    var text = document.getElementById("check2");
    if (checkbox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  myFunction1() {
    var checkbox:any = document.getElementById("myCheck1");
    var text = document.getElementById("idfiscalmat");
    var text1 = document.getElementById("idactivitynature");
    var text2 = document.getElementById("idactivity");
    var text3 = document.getElementById("idunderactivity");
    var text4 = document.getElementById("idfiscalimpot");
    var text5 = document.getElementById("idfiscaltvaassobli");
    if (checkbox.checked == true){
      text.style.display = "inline-flex";
      text1.style.display = "inline-flex";
      text2.style.display = "inline-flex";
      text3.style.display = "inline-flex";
      text4.style.display = "inline-flex";
      text5.style.display = "inline-flex";
    } else {
       text.style.display = "none";
       text1.style.display = "none";
       text2.style.display = "none";
       text3.style.display = "none";
       text4.style.display = "none";
       text5.style.display = "none";
    }
  }
  myFunction3() {
    var checkbox:any = document.getElementById("myCheck3");
    var text = document.getElementById("idfiscalmat");
    var text1 = document.getElementById("idactivitynature");
    var text2 = document.getElementById("idactivity");
    var text3 = document.getElementById("idunderactivity");
    var text4 = document.getElementById("idfiscalimpot");
    var text5 = document.getElementById("idfiscaltvaassobli");
    if (checkbox.checked == true){
      text.style.display = "inline-flex";
      text1.style.display = "inline-flex";
      text2.style.display = "inline-flex";
      text3.style.display = "inline-flex";
      text4.style.display = "inline-flex";
      text5.style.display = "inline-flex";
    } else {
       text.style.display = "none";
       text1.style.display = "none";
       text2.style.display = "none";
       text3.style.display = "none";
       text4.style.display = "none";
       text5.style.display = "none";
    }
  }
}
