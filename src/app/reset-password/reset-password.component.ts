import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService} from '../services/user.service';


enum TokenStatus {
    Validating,
    Valid,
    Invalid
}

@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent implements OnInit {
    TokenStatus = TokenStatus;
    tokenStatus = TokenStatus.Validating;
    token = null;
    form: FormGroup;
    loading = false;
    submitted = false;
    errormsg:string;
    successmsg:string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: UserService,
        
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            
        });

        this.route.params.subscribe(
          (params:Params)=>{
              this.token=params.token
          }
      )

        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.validateResetToken(this.token).then(
          (success:any) => {
              this.successmsg=JSON.stringify(success.message);
              this.tokenStatus = TokenStatus.Valid;
              
          },
          (error)=> {
              this.tokenStatus = TokenStatus.Invalid;
              this.errormsg = JSON.stringify(error.error) ;
          }
      );

    // convenience getter for easy access to form fields
        }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
      

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        const password = this.form.get('password').value;
        const confirmpassword = this.form.get('confirmpassword').value;
        this.accountService.resetPassword(this.token, password, confirmpassword).then(
              (success:any) => {
                  this.successmsg=JSON.stringify(success.message);
                  this.router.navigate(['../login'], { relativeTo: this.route });
                  
              },
              (error)=> {
                this.loading = false;
                  this.tokenStatus = TokenStatus.Invalid;
                  this.errormsg = JSON.stringify(error.error) ;
              }
          );
    }
}