import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { stringify } from 'querystring';
import { MustMatch } from '../_helpers/must-match.validator';
import { AlertService } from '../_helpers/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  errorMessage: string;
  isSuccessful = false;
  isSignUpFailed = false;
  submitted = false;
  result:string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private alertService: AlertService
              ) { }

  ngOnInit() {
    
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required],
      firstname: [null, Validators.required],
      confirmemail: [null, Validators.required],
      mobile: [null, Validators.required],
      confirmmobile: [null, Validators.required],
      usertype: [null, Validators.required],
      lastname: [null, Validators.required],
      fonction: [null],
      secteur: [null],
      civilite: [null,Validators.required],
      raisonsociale: [null],
      nomsociete: [null],
      clientcode: [null, Validators.required],
      role: [ {value: "basic", disabled: true},Validators.required],
    },
    {
      validator: [MustMatch('email','confirmemail'),MustMatch('mobile','confirmmobile')]
    });
    this.signupForm.reset();
    console.log(this.result)
    
  }
  get f() { return this.signupForm.controls; }
  
  randomString(length) {
    var randomChars1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomChars2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars1.charAt(Math.floor(Math.random()* randomChars2.length))+randomChars2.charAt(Math.floor(Math.random() * randomChars2.length));
    }
    console.log(result)
    return result;
    
}
  onSignup() {
    this.loading = true;
    this.submitted = true;

    if (this.signupForm.invalid) {
      
      return this.loading = false;
  }
    const email = this.signupForm.get('email').value;
    
    const mobile = this.signupForm.get('mobile').value;
    const usertype = this.signupForm.get('usertype').value;
    
    const password = this.signupForm.get('password').value;
    const confirmpassword = this.signupForm.get('confirmpassword').value;
    const firstname = this.signupForm.get('firstname').value;
    const lastname = this.signupForm.get('lastname').value;
    const fonction = this.signupForm.get('fonction').value;
    const secteur = this.signupForm.get('secteur').value;
    const civilite = this.signupForm.get('civilite').value;
    const raisonsociale = this.signupForm.get('raisonsociale').value;
    const nomsociete = this.signupForm.get('nomsociete').value;
    const clientcode = this.signupForm.get('clientcode').value;
    const role = this.signupForm.get('role').value;
    this.auth.register(email, password,confirmpassword,mobile,usertype,firstname,lastname,fonction,secteur,civilite,raisonsociale,nomsociete,clientcode,role).subscribe({

      next: data => {
        this.alertService.success(data.message);
        window.scrollTo(0, 0);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.loading = false;
        this.router.navigate(['login']);
      },
      error: error => {
        this.alertService.error(error.error.error);
        window.scrollTo(0, 0);
        this.loading = false;
        
        this.isSignUpFailed = true;
      }
    });

  }
  onReset() {
    this.submitted = false;
    this.signupForm.reset();
}
}