import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subscription } from 'rxjs';
import { MustMatch } from '../_helpers/must-match.validator';
import { DecfiscmensService } from '../services/dec-fisc-mens';
import { Decfiscmens } from '../models/dec-fisc-mens';
import { AlertService } from '../_helpers/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-dec-fisc-mens',
  templateUrl: './modify-dec-fisc-mens.component.html',
  styleUrls: ['./modify-dec-fisc-mens.component.scss']
})
// @ts-ignore
export class ModifyDecFiscMensComponent implements OnInit {

 

  public decfiscmensForm: FormGroup; 
  public currentuser: User;
  public decfiscmenss: Decfiscmens[]=[];
  public decfiscmens: Decfiscmens;
  public codeValue: string;
  public secteurValue: string;
  public roleValue: string;
  private usersSub: Subscription;
  public loading = false;
  errormsg:string;
  constructor(private formBuilder: FormBuilder,
   
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dec: DecfiscmensService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService) {}


 ngOnInit() {
  this.loading = true;
    
  
  this.route.params.subscribe(
    (params) => {
      this.dec.getDecfiscmensreqById(params.id).then(
        (decfiscmens: Decfiscmens) => {
          
          this.decfiscmens = decfiscmens;
          
          this.decfiscmensForm = this.formBuilder.group({
            
            statut: [this.decfiscmens.impottype1.statut, Validators.required],
            motif: [this.decfiscmens.impottype1.motif, Validators.required],
          
          });
          this.loading = false;
          
        }
      );
    }
  );

}
onSubmit() {
  this.loading = true;
  const decfiscmens = new Decfiscmens();
  decfiscmens.impottype1={ type: '',statut: '',motif: '', traitementetsalaire: { salairebrut:'', salaireimposable: '', retenuealasource: '',contributionsociale: '', }, 
    location: { type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '', }, honoraire: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, 
    montant1000: {  type: '',montantbrut: '', taux: '', montantnet: '', montantretenue: '',}, autre: { titre:'',montant:'',description:''}}
  decfiscmens.impottype1.statut =this.decfiscmensForm.get('statut').value;
  decfiscmens.impottype1.motif =this.decfiscmensForm.get('motif').value;
  this.dec.modifydecfiscmensreqById(this.decfiscmens._id,decfiscmens).then(
    (data:any) => {
      this.decfiscmensForm.reset();
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
      
      window.scrollTo(0, 0);
      
    
      
    }
  );
}
reloadPage(): void {
  
  window.location.reload();
  
}
}
