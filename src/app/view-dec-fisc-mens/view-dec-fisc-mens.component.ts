import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { Decfiscmens } from '../models/dec-fisc-mens';

@Component({
  selector: 'app-view-dec-fisc-mens',
  templateUrl: './view-dec-fisc-mens.component.html',
  styleUrls: ['./view-dec-fisc-mens.component.scss']
})
export class ViewDecFiscMensComponent implements OnInit {

 
public decfiscmens: Decfiscmens;
  public errormsg:string;
  public loading: boolean;
  
  currentUser: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dec: DecfiscmensService,
    private token: TokenStorageService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
  
    this.route.params.subscribe(
      (params: Params) => {
        this.dec.getDecfiscmensreqById(params.id).then(
          (decfiscmens: Decfiscmens) => {
            this.loading = false;
            this.decfiscmens = decfiscmens;
            
            
          }
        );
      }
    );
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }

  }