import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { UserService } from '../services/user.service';

enum EmailStatus {
    Verifying,
    Failed,
    Success
}

@Component({ templateUrl: 'verify-email.component.html' })
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
}