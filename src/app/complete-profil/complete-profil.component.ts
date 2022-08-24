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
          this.userForm = this.formBuilder.group({
              
            role: [this.user.role,],
            firstname: [this.user.firstname,],
            lastname: [this.user.lastname,],
            confirmemail: [null,Validators.required],
            mobile: [this.user.mobile,],
            confirmmobile: [null,Validators.required],
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
            fiscalmat: [this.user.matriculefiscale,],
            nomsociete: [this.user.nomsociete,],
            clientcode: [{value:this.user.clientcode,disabled:true}, Validators.required],
          },
          {
            validator: [MustMatch('email','confirmemail'),MustMatch('mobile','confirmmobile')]
          })
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
          



  
  onSubmit() {
    this.loading = true;
    this.alertService.clear();
    const user = new User();
    user.userId = this.user.userId;
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
    user.secteur = this.userForm.get('secteur').value;
    user.civilite = this.userForm.get('civilite').value;
    user.raisonsociale = this.userForm.get('raisonsociale').value;
    user.nomsociete = this.userForm.get('nomsociete').value;
    user.clientcode = this.userForm.get('clientcode').value;
    this.userservice.modifyUserById(this.currentuser.userId,user).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.alertService.success('Modification effectuée avec succès, veuillez vous connecter pour consulter votre profil', { keepAfterRouteChange: true });
        window.scrollTo(0, 0);
        this.router.navigate(['home'])
        this.reloadPage();
        
        
      },
      (error) => {
        this.loading = false;
        
        this.alertService.error(JSON.stringify(error.error.message) );
        window.scrollTo(0, 0);
        
      }
    );
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3000);
    
    
  }
  myFunction6() {
    var checkbox:any = document.getElementById("myCheck6");
    var text2 = document.getElementById("Check5");
    var text = document.getElementById("check1");
    if (checkbox.checked == true){
      text.style.display = "block";
      text2.style.display = "none";
    } else {
       text.style.display = "none";
       text2.style.display = "block";
    }
  }
  
  myFunction5() {
    var checkbox:any = document.getElementById("myCheck5");
    var text6 = document.getElementById("Check6");
    var text = document.getElementById("idfiscalmat");
    var text1 = document.getElementById("idactivitynature");
    var text2 = document.getElementById("idactivity");
    var text3 = document.getElementById("idunderactivity");
    var text4 = document.getElementById("idfiscalimpot");
    var text5 = document.getElementById("idfiscaltvaassobli");
    var text7 = document.getElementById("input1");
    var text8 = document.getElementById("input2");
    var text9 = document.getElementById("input3");
    var text10 = document.getElementById("input4");
    var text11 = document.getElementById("input5");
    var text12 = document.getElementById("input6");
    var text13 = document.getElementById("input7");
    var text14 = document.getElementById("input8");
    var text15= document.getElementById("input9");
    var text16= document.getElementById("input10");
    var text17= document.getElementById("input11");
    var text18= document.getElementById("input12");
    if (checkbox.checked == true){
      text.style.display = "inline-flex";
      text1.style.display = "inline-flex";
      text2.style.display = "inline-flex";
      text3.style.display = "inline-flex";
      text4.style.display = "inline-flex";
      text5.style.display = "inline-flex";
      text7.style.display = "inline-flex";
      text8.style.display = "inline-flex";
      
      text9.style.display = "inline-flex";
      text10.style.display = "inline-flex";
      text11.style.display = "inline-flex";
      text12.style.display = "inline-flex";
      text13.style.display = "inline-flex";
      text14.style.display = "inline-flex";
      text15.style.display = "inline-flex";
      text16.style.display = "inline-flex";
      text17.style.display = "inline-flex";
      text18.style.display = "inline-flex";
      
      text6.style.display = "none"
    } else {
       text.style.display = "none";
       text1.style.display = "none";
       text2.style.display = "none";
       text3.style.display = "none";
       text4.style.display = "none";
       text5.style.display = "none";
       text7.style.display = "none";
      text8.style.display = "none";
      
      text9.style.display = "none";
      text10.style.display = "none";
      text11.style.display = "none";
      text12.style.display = "none";
      text13.style.display = "none";
      text14.style.display = "none";
      text15.style.display = "none";
      text16.style.display = "none";
      text17.style.display = "none";
      text18.style.display = "none";
       text6.style.display = "block"
    }
  }
  
}
