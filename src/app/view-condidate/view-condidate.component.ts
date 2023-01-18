import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { Subscription } from 'rxjs';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-condidate',
  templateUrl: './view-condidate.component.html',
  styleUrls: ['./view-condidate.component.scss']
})
export class ViewCondidateComponent implements OnInit {
  public condidate: Condidate;
  public errormsg:string;
  public loading: boolean;
  collab: any[]=[];
  private usersSub: Subscription;
  currentUser: any;
  users: User[]=[];
  public optionValue:any
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cond: CondidateService,
    private token: TokenStorageService,private userservice: UserService,private deccompt:DeccomptabiliteService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
    if(this.currentUser.role==='admin')
    {
      this.userservice.getAll()
      this.usersSub = this.userservice.users$.subscribe(
        (users) => {
          this.users = users;
          this.loading = false;
          let filtred=[]
          filtred=this.deccompt.filterByValue(this.users,'desactive')
          this.collab=filtred.filter((user) => user.usertype === ('Collaborateur'||'collaborateur'))
          },
        (error) => {
          this.loading = false;
          this.errormsg=error.message;
        }
      );
      
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.cond.getCondidateById(params.id).then(
          (condidate: Condidate) => {
            this.loading = false;
            this.condidate = condidate;
            
            
          }
        );
      }
    );
    
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  onSubmit() {
    this.loading = true;
    const condidate = new Condidate();
    
    condidate.affecte =this.optionValue;
    this.cond.modifycondidateById(this.condidate._id,condidate).then(
      (data:any) => {
        this.loading = false;
        window.scrollTo(0, 0);
        this.router.navigate(['admin-board']);
      },
      (error) => {
        this.loading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'candidature affectée avec succès',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigate(['admin-board']);
        
      
        
      }
    );
  }
  onDelete() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.cond.deleteCondidate(params.id).then(
          () => {
            this.loading = false;
        
        this.router.navigate(['']);
          },
          (error) => {
            this.loading = false;
            this.errormsg=error.error;
            this.router.navigate(['home']);
          }
        );
      }
    );
  }
  }
