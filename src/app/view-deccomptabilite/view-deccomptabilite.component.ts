import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deccomptabilite } from '../models/dec-comptabilite';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';

@Component({
  selector: 'app-view-deccomptabilite',
  templateUrl: './view-deccomptabilite.component.html',
  styleUrls: ['./view-deccomptabilite.component.scss']
})
export class ViewDeccomptabiliteComponent implements OnInit {
  showeditionnote=false;
  showrecettejour=false
  showrelevemanuel=false;
  showrelevejoint=false
  showpaiemanuel=false
  showachat=false
  totalht=0.000
  totaltva=0.000
  totaldt=0.000
  totalttc=0.000
  totalht2=0.000
  totaltva2=0.000
  totaldt2=0.000
  totalttc2=0.000
  totalrecette=0.000
  totalht3=0.000
  totaltva3=0.000
  totaldt3=0.000
  totalttc3=0.000
  totaldebit=0.000
  totalcredit=0.000
  totalsoldemois=0.000
  totalsalairebrut=0.000
  totalcnss=0.000
  totalsalaireimposable=0.000
  totalretenueimpot=0.000
  totalavancepret=0.000
  totalsalairenet=0.000
  loading: boolean;
  currentUser: any;
  role: string;
  usertype: string;
  deccomptabilite: Deccomptabilite;
  constructor(
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private deccompt: DeccomptabiliteService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.currentUser = this.tokenStorage.getUser();
    this.userservice.getUserById(this.currentUser.userId).then(
      (user: User) => {
        this.loading = false;
        this.currentUser = user;
        this.role=user.role
        this.usertype=user.usertype
        console.log(this.currentUser)
      }
    )
    this.route.params.subscribe(
      (params) => {
        this.deccompt.getDeccomptabilitereqById(params.id).then(
          (deccomptabilite: Deccomptabilite) => {
            
            this.deccomptabilite = deccomptabilite;
            if (this.deccomptabilite.autre1.length>0)
          {
            this.showeditionnote=true
          }
          if (this.deccomptabilite.autre2.length>0)
          {
            this.showrecettejour=true
          }
          if (this.deccomptabilite.autre3.length>0)
          {
           this.showachat=true
          }
          if (this.deccomptabilite.autre4.length>0)
          {
            this.showrelevemanuel=true
          }
          if (this.deccomptabilite.autre5.length>0)
          {
            this.showrelevejoint=true
          }
          if (this.deccomptabilite.autre6.length>0)
          {
            this.showpaiemanuel=true
          }
          }
        )
      }
    )
  }

}
