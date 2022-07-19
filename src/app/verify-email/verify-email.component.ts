import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { UserService } from '../services/user.service';

enum EmailStatus {
    Verifying,
    Failed,
    Success
}

@Component({ selector: 'app-verify-email',
templateUrl: 'verify-email.component.html' ,
styleUrls: ['./verify-email.component.scss']})
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying;
    errormsg:string;
    successmsg:string;
    token:string;
    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: UserService,
        
    ) { }

    ngOnInit() {
        this.emailStatus= EmailStatus.Verifying;
        this.route.params.subscribe(
            (params:Params)=>{
                this.token=params.token
            }
        )

        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.verifyEmail(this.token).then(
                (success:any) => {
                    this.successmsg=JSON.stringify(success.message);
                    this.emailStatus = EmailStatus.Success;
                    
                },
                (error)=> {
                    this.emailStatus = EmailStatus.Failed;
                    this.errormsg = JSON.stringify(error.error) ;
                }
            );
    }
    onlogin(){
        this.router.navigate(['login']);
    }
    onforgot(){
        this.router.navigate(['forgot-password']);
    }
}