import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { AlertService } from '../_helpers/alert.service';
import { CommunService } from '../services/commun';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-condidate',
  templateUrl: './modify-condidate.component.html',
  styleUrls: ['./modify-condidate.component.scss']
})
export class ModifyCondidateComponent implements OnInit {

  public condidateForm: FormGroup; 
  public currentuser: User;
  public users: User[]=[];
  public condidate: Condidate;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  status: string[]=[];
  role: string;
  option204Value: number;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cond: CondidateService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,private commun: CommunService) {
      this.condidateFormadmin = this.formBuilder.group({
        ammounts1: this.formBuilder.array([ this.createammount1() ])
      })
      this.condidateFormcollab = this.formBuilder.group({
        ammounts2: this.formBuilder.array([ this.createammount2() ])
      })
    }
    condidateFormadmin: FormGroup;
    condidateFormcollab: FormGroup;
    public ammounts1: FormArray;
    public ammounts2: FormArray;
 ngOnInit() {
  this.loading = true;
  this.currentuser=this.tokenStorage.getUser()
  this.role=this.currentuser.role
  this.status=this.commun.status
  
  this.route.params.subscribe(
    (params) => {
      this.cond.getCondidateById(params.id).then(
        (condidate: Condidate) => {
          
          this.condidate = condidate;
          
          if(!this.condidate.dateouverturedossier&&this.currentuser.role=='admin'||!this.condidate.dateouverturedossier&&this.currentuser.role=='supervisor')
              {
                this.option204Value=Date.now()
              }
              else
              {
                this.option204Value=this.condidate.dateouverturedossier
              }
          this.loading = false;
          this.condidateFormadmin = new FormGroup({              
            ammounts1: new FormArray(condidate.statutadmin.map(item => {
              const group = this.initammounts1();
              //@ts-ignore
              group.patchValue(item);
              return group;
            }))
          });
          this.condidateFormcollab = new FormGroup({        
            ammounts2: new FormArray(condidate.statutcollab.map(item => {
              const group = this.initammounts2();
              //@ts-ignore
              group.patchValue(item);
              return group;
            }))
          });
        }
      );
    }
  );
  
}
finadmin(i:number) {
  let ammounts1 = this.condidateFormadmin.get('ammounts1') as FormArray;
  
  if (ammounts1.controls[i].value.fintraitement == true)
  { 
    ammounts1.controls[i].patchValue({ datefin: Date.now() });
    ammounts1.controls[i].patchValue({ duree: (Date.now()- this.option204Value)/1000});
  } 
  else 
  {
    Swal.fire({
      title: 'Vous êtes sur le point de modifier la date de la fin du traitement, voulez vous continuer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        ammounts1.controls[i].patchValue({ datefin: '' });
    ammounts1.controls[i].patchValue({ duree: ''});
      }
      else
      {
        ammounts1.controls[i].value.fintraitement == true
      }
    }).catch(() => {
      Swal.fire('opération non aboutie!');
    });
    
  }
}
fincollab(i:number) {
  let ammounts2 = this.condidateFormcollab.get('ammounts2') as FormArray;
  
  if (ammounts2.controls[i].value.fintraitement == true)
  { 
    ammounts2.controls[i].patchValue({ datefin: Date.now() });
    ammounts2.controls[i].patchValue({ duree: (Date.now()-this.option204Value)/(1000)});
  } 
  else 
  {
    Swal.fire({
      title: 'Vous êtes sur le point de modifier la date de la fin du traitement, voulez vous continuer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        ammounts2.controls[i].patchValue({ datefin: '' });
    ammounts2.controls[i].patchValue({ duree: ''});
      }
      else
      {
        ammounts2.controls[i].value.fintraitement == true
      }
    }).catch(() => {
      Swal.fire('opération non aboutie!');
    });
    
  }
}
get ammountControls1() {
  return this.condidateFormadmin.get('ammounts1')['controls'];
}
get ammountControls2() {
  return this.condidateFormcollab.get('ammounts2')['controls'];
}
addammount1(): void {
  this.ammounts1 = this.condidateFormadmin.get('ammounts1') as FormArray;
  this.ammounts1.push(this.createammount1());
}
addammount2(): void {
  this.ammounts2 = this.condidateFormcollab.get('ammounts2') as FormArray;
  this.ammounts2.push(this.createammount2());
}
initammounts1() {
  return this.formBuilder.group({
    statut: [{value:'',disabled:true}],
    motif: [{value:'',disabled:true}],
    duree: [{value:'',disabled:true}],
    datefin: [{value:'',disabled:true}],
    fintraitement: [{value:'',disabled:true}],

  });
}
initammounts2() {
  return this.formBuilder.group({
    statutcoll: [{value:'',disabled:true}],
    motifcoll: [{value:'',disabled:true}],
    duree: [{value:'',disabled:true}],
    datefin: [{value:'',disabled:true}],
    fintraitement: [{value:'',disabled:true}],

  });
}
createammount1(): FormGroup {
  return this.formBuilder.group({
    statut: '',
    motif: '',
    duree: '',
    datefin: '',
    fintraitement: ''


  });
}
createammount2(): FormGroup {
  return this.formBuilder.group({
    statutcoll: '',
    motifcoll: '',
    duree: '',
    datefin: '',
    fintraitement: ''

  });
}
onSubmit() {
  this.loading = true;
  const condidate = new Condidate();
   
  condidate.statutadmin=this.condidateFormadmin.getRawValue().ammounts1
condidate.dateouverturedossier=this.option204Value
  this.cond.modifycondidateById(this.condidate._id,condidate).then(
    (data:any) => {
      this.condidateFormadmin.reset();
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'déclaration modifiée avec succès',
        showConfirmButton: false,
        timer: 3000
      });
      this.router.navigate(['admin-board']);
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
onSubmitcoll() {
  this.loading = true;
  const condidate = new Condidate();
  
  condidate.statutcollab=this.condidateFormcollab.getRawValue().ammounts1
condidate.dateouverturedossier=this.option204Value
  this.cond.modifycondidateById(this.condidate._id,condidate).then(
    (data:any) => {
      this.condidateFormcollab.reset();
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'déclaration modifiée avec succès',
        showConfirmButton: false,
        timer: 3000
      });
      this.router.navigate(['collab-board']);
    },
    (error) => {
      this.loading = false;
      this.alertService.error(error.error.message);
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
reloadPage(): void {
  
  window.location.reload();
  
}
}
