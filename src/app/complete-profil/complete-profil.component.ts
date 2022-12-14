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
  selector: 'app-complete-profil',
  templateUrl: './complete-profil.component.html',
  styleUrls: ['./complete-profil.component.scss']
})
export class CompleteProfilComponent implements OnInit {

 



  public imagePreview:string
  public userForm: FormGroup;
  public isloggedin=false; 
  public currentuser: User;
  public user: User;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  public submitted=true;
  public optionValue:any;
  public option1Value:any;
  public option2Value:any;
  public option3Value:any;
  fiscalmatPattern = "^[1-9]{7}$";
  fiscalmatletterPattern="^[A-Z]{1}$";
  fiscalmatnumbersPattern="^[0-9]{3}$";
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
          if (this.user.matriculefiscale){
          this.userForm = this.formBuilder.group({
              
           
            
           
            activitynature: [{value:this.user.natureactivite,}],
            selectactivitynature: [null,],
            activity: [this.user.activite,],
            image: [this.user.ficheUrl,],
            selectactivity:[null,],
            adresseactivite: [this.user.adresseactivite,],
            codepostal:[this.user.codepostal,[Validators.maxLength(4)]],
            underactivity: [this.user.sousactivite,],
            selectunderactivity:[null,],
            fiscalimpot: [this.user.regimefiscalimpot,],
            selectfiscalimpot:[null,],
            fiscaltvaassobli: [{value:"Assujeti Obligatoire",disabled:true}],
            fiscalmat: [this.user.matriculefiscale.split(' ')[0],[Validators.pattern(this.fiscalmatPattern),Validators.maxLength(7),Validators.required]],
            fiscalmatletter: [this.user.matriculefiscale.split(' ')[1].split('/')[0],[Validators.pattern(this.fiscalmatletterPattern),Validators.maxLength(1),Validators.required]],
            fiscalmatinchanged: [{value:"A",disabled:true}],
            fiscalmatinchanged2: [{value:"P",disabled:true}],
            fiscalmatnumbers: [this.user.matriculefiscale.split('/')[3],[Validators.pattern(this.fiscalmatnumbersPattern),Validators.maxLength(3),Validators.required]],
            nomsociete: [this.user.nomsociete,],
            clientcode: [{value:this.user.clientcode,disabled:true},],
          },
          )}
          else {
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
              image: [this.user.ficheUrl,],
              activitynature: [{value:this.user.natureactivite,}],
              selectactivitynature: [null,],
              activity: [this.user.activite,],
              selectactivity:[null,],
              underactivity: [this.user.sousactivite,],
              selectunderactivity:[null,],
              fiscalimpot: [this.user.regimefiscalimpot,],
              selectfiscalimpot:[null,],
              fiscaltvaassobli: [{value:"Assujeti Obligatoire",disabled:true}],
              fiscalmat: [this.user.matriculefiscale,[Validators.pattern(this.fiscalmatPattern),Validators.required]],
              fiscalmatletter: [null,[Validators.pattern(this.fiscalmatletterPattern),Validators.maxLength(1),Validators.required]],
              fiscalmatinchanged: [{value:"A",disabled:true}],
              fiscalmatinchanged2: [{value:"P",disabled:true}],
              fiscalmatnumbers: ["000",[Validators.pattern(this.fiscalmatnumbersPattern),Validators.maxLength(3),Validators.required]],
              adresseactivite: [this.user.adresseactivite,],
              codepostal:[this.user.codepostal,[Validators.maxLength(4)]],
              nomsociete: [this.user.nomsociete,],
              clientcode: [{value:this.user.clientcode,disabled:true}],
            },
         )
        }
          this.optionValue=this.user.natureactivite;
          this.option1Value=this.user.activite;
          this.option2Value=this.user.sousactivite;
          this.option3Value=this.user.regimefiscalimpot;
          this.loading = false;
          
        }
      )
            }
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
    user.userId = this.user.userId;
    user.ficheUrl=''
    if (this.userForm.get('activitynature').value=="Autre") { user.natureactivite = this.userForm.get('activitynature').value+'/'+this.userForm.get('selectactivitynature').value}
    else  {user.natureactivite = this.userForm.get('activitynature').value};
    if (this.userForm.get('activity').value=="Autre") {user.activite = this.userForm.get('activity').value+'/'+this.userForm.get('selectactivity').value}
    else {user.activite =this.userForm.get('activity').value};
    if (this.userForm.get('underactivity').value=="Autre") {user.sousactivite = this.userForm.get('underactivity').value+'/'+this.userForm.get('selectunderactivity').value}
    else {user.sousactivite =this.userForm.get('underactivity').value};
    if (this.userForm.get('fiscalimpot').value=="Autre") { user.regimefiscalimpot = this.userForm.get('fiscalimpot').value+'/'+this.userForm.get('selectfiscalimpot').value}
    else {user.regimefiscalimpot = this.userForm.get('fiscalimpot').value};
    user.matriculefiscale = this.userForm.get('fiscalmat').value+' '+this.userForm.get('fiscalmatletter').value+'/'+this.userForm.get('fiscalmatinchanged').value+'/'
    +this.userForm.get('fiscalmatinchanged2').value+'/'+this.userForm.get('fiscalmatnumbers').value;
    user.regimefiscaltva = this.userForm.get('fiscaltvaassobli').value;
    user.adresseactivite = this.userForm.get('adresseactivite').value;
    user.codepostal = this.userForm.get('codepostal').value;
    
    
   
    this.userservice.completeUserById(this.user._id, user, this.userForm.get('image').value).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.alertService.success('Modification effectuée avec succès!', { keepAfterRouteChange: true });
        window.scrollTo(0, 0);
        this.router.navigate(['home'])
        
        
        
      },
      (error) => {
        this.loading = false;
        
        this.alertService.error(JSON.stringify(error.error.error) );
        window.scrollTo(0, 0);
        
      }
    );
  }
  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.userForm.get('image').patchValue(file);
    this.userForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.userForm.get('image').valid) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3000);
    
    
  }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  
}
