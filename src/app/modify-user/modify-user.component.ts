import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { AlertService } from '../_helpers/alert.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  public userForm: FormGroup;
  public isloggedin=false; 
  public currentuser: User;
  public user: User;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  public optionValue:any;
  public option1Value:any;
  public option2Value:any;
  public option3Value:any;
  public submitted=false;
  fiscalmatPattern = "^[1-9]{7}[A-Z]{1}AP\[0-9]{3}$";
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.loading = true;
     if (this.tokenStorage.getToken()){
      this.isloggedin=true;
      this.currentuser =this.tokenStorage.getUser()
      this.userservice.getUserById(this.currentuser.userId).then(
        (user: User) => {
          this.loading = false;
          this.user = user;
          console.log(user)
          this.userForm = this.formBuilder.group({
              
            role: [this.user.role,],
            firstname: [this.user.firstname,],
            lastname: [this.user.lastname,],
            confirmemail: [null],
            mobile: [this.user.mobile,],
            confirmmobile: [null],
            usertype: [this.user.usertype,],
            email: [this.user.email,],
            fonction: [this.user.fonction,],
            password: [null,],
            confirmpassword: [null,],
            secteur: [this.user.secteur,],
            civilite: [this.user.civilite,],
            raisonsociale: [this.user.raisonsociale,],
            activitynature: [{value:this.user.natureactivite,}],
            selectactivitynature: [null,],
            activity: [this.user.activite,],
            selectactivity:[null,],
            underactivity: [this.user.sousactivite,],
            selectunderactivity:[null,],
            fiscalimpot: [this.user.regimefiscalimpot,],
            selectfiscalimpot:[null,],
            fiscaltvaassobli: [{value:"Assujeti Obligatoire",disabled:true}],
            fiscalmat: [this.user.matriculefiscale,[Validators.pattern(this.fiscalmatPattern)]],
            adresseactivite: [this.user.adresseactivite,],
            codepostal:[this.user.codepostal,],
            nomsociete: [this.user.nomsociete,],
            clientcode: [{value:this.user.clientcode,disabled:true}],
          },
          )
          this.optionValue=this.user.natureactivite;
          this.option1Value=this.user.activite;
          this.option2Value=this.user.sousactivite;
          this.option3Value=this.user.regimefiscalimpot;
          this.loading = false;
          
        }
      )}
            
            else {this.router.navigate(['login'])};
           
            
           
           
          }
          
          get f() { return this.userForm.controls; } 

  
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.userForm.invalid) {
      
     return this.loading = false;
  }
    this.alertService.clear();
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
    if (this.userForm.get('activitynature').value=="Autre") { user.natureactivite = this.userForm.get('activitynature').value+'/'+this.userForm.get('selectactivitynature').value}
    else  {user.natureactivite = this.userForm.get('activitynature').value};
    if (this.userForm.get('activity').value=="Autre") {user.activite = this.userForm.get('activity').value+'/'+this.userForm.get('selectactivity').value}
    else {user.activite =this.userForm.get('activity').value};
    if (this.userForm.get('underactivity').value=="Autre") {user.sousactivite = this.userForm.get('underactivity').value+'/'+this.userForm.get('selectunderactivity').value}
    else {user.sousactivite =this.userForm.get('underactivity').value};
    if (this.userForm.get('fiscalimpot').value=="Autre") { user.regimefiscalimpot = this.userForm.get('fiscalimpot').value+'/'+this.userForm.get('selectfiscalimpot').value}
    else {user.regimefiscalimpot = this.userForm.get('fiscalimpot').value};
    user.matriculefiscale = this.userForm.get('fiscalmat').value;
    user.regimefiscaltva = this.userForm.get('fiscaltvaassobli').value;
    user.matriculefiscale = this.userForm.get('fiscalmat').value;
    user.adresseactivite = this.userForm.get('adresseactivite').value;
    user.codepostal = this.userForm.get('codepostal').value;
    user.secteur = this.userForm.get('secteur').value;
    user.civilite = this.userForm.get('civilite').value;
    user.raisonsociale = this.userForm.get('raisonsociale').value;
    user.nomsociete = this.userForm.get('nomsociete').value;
    user.clientcode = this.userForm.get('clientcode').value;
    this.userservice.modifyUserById(user.userId,user).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.alertService.success('Modification effectuée avec succès!', { keepAfterRouteChange: true });
        window.scrollTo(0, 0);
        this.router.navigate(['profil'])
        
        
        
      },
      (error) => {
        this.loading = false;
        
        this.alertService.error(JSON.stringify(error.error.error) );
        window.scrollTo(0, 0);
        
      }
    );
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3000);
    
    
  }
  
  
}
