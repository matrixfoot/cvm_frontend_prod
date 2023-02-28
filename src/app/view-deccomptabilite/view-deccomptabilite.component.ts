import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Deccomptabilite } from '../models/dec-comptabilite';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { ExcelService } from '../services/excel.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../_helpers/alert.service';
import { Sort } from '../_helpers/sort';

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
  totalht219=0.000;
  totaltva219=0.000;
  totaldt219=0.000;
  totalttc219=0.000;
  totalrecette19=0.000;
  totalht19=0.000;
  totaltva19=0.000;
  totaldt19=0.000;
  totalttc19=0.000; 
  loading: boolean;
  currentUser: any;
  role: string;
  usertype: string;
  deccomptabilite: Deccomptabilite;
  statut: string;
  motif: string;
  firstname: string;
  lastname: string;
  nature: string;
  user: User;
  moisreleve: string;
  anneereleve: string;
  debitmoisprecedent: string;
  creditmoisprecedent: string;
  sousactivite: string;
  private usersSub: Subscription;
  users: User[]=[];
  collab: any[]=[];
  errormsg: any;
  optionValue: any;
  allstatuts: any[];
  sortedallstatuts: any[];
  filtredcollab: any[];
  prenomcollab: any;
  nomcollab: any;
  showbuttons=false;
  constructor(
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private deccompt: DeccomptabiliteService,
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,
    private excelService: ExcelService,

  ) { }

  ngOnInit() {
    this.loading = true;
    this.currentUser = this.tokenStorage.getUser();
    if(this.currentUser.role==='admin'||this.currentUser.role==='supervisor')
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
    this.userservice.getUserById(this.currentUser.userId).then(
      (user: User) => {
        this.currentUser = user;
        this.role=user.role
        console.log(this.currentUser)
      }
    )
    this.route.params.subscribe(
      (params) => {
        this.deccompt.getDeccomptabilitereqById(params.id).then(
          (deccomptabilite: Deccomptabilite) => {
            this.allstatuts=[]
            const sort = new Sort();
            this.loading = false;
            this.deccomptabilite = deccomptabilite;
            this.allstatuts=this.allstatuts.concat(this.deccomptabilite.statutadmin,this.deccomptabilite.statutcollab)
            this.sortedallstatuts=this.allstatuts.sort(sort.startSort('datefin','asc',''));
            if(this.deccomptabilite.affecte)
            {
              this.optionValue=this.deccomptabilite.affecte
            }
            if(this.deccomptabilite.statutcollab.length>0)
            {
 //@ts-ignore
 if(this.deccomptabilite.statutcollab.find(e => e.statutclient==='déposé par le client'))
 {
   this.showbuttons=true
 }
            }
            this.nature=deccomptabilite.nature
            this.moisreleve=deccomptabilite.moisreleve
            this.anneereleve=deccomptabilite.anneereleve
            this.debitmoisprecedent=deccomptabilite.debitmoisprecedent
            this.creditmoisprecedent=deccomptabilite.creditmoisprecedent
            this.totalht=deccomptabilite.totalht
    this.totaltva=deccomptabilite.totaltva
    this.totaldt=deccomptabilite.totaldt
    this.totalttc=deccomptabilite.totalttc
    this.totalht2=deccomptabilite.totalht2
    this.totaltva2=deccomptabilite.totaltva2
    this.totaldt2=deccomptabilite.totaldt2
    this.totalttc2=deccomptabilite.totalttc2
    this.totalrecette=deccomptabilite.totalrecette
    this.totalht3=deccomptabilite.totalht3
    this.totaltva3=deccomptabilite.totaltva3
    this.totaldt3=deccomptabilite.totaldt3
    this.totalttc3=deccomptabilite.totalttc3
    this.totaldebit=deccomptabilite.totaldebit
    this.totalcredit=deccomptabilite.totalcredit
    this.totalsoldemois=deccomptabilite.totalsoldemois
    this.totalsalairebrut=deccomptabilite.totalsalairebrut
    this.totalcnss=deccomptabilite.totalcnss
    this.totalsalaireimposable=deccomptabilite.totalsalaireimposable
    this.totalretenueimpot=deccomptabilite.totalretenueimpot
    this.totalavancepret=deccomptabilite.totalavancepret
    this.totalsalairenet=deccomptabilite.totalsalairenet
    this.totalht219=deccomptabilite.totalht219
  this.totaltva219=deccomptabilite.totaltva219
  this.totaldt219=deccomptabilite.totaldt219
  this.totalttc219=deccomptabilite.totalttc219
  this.totalrecette19=deccomptabilite.totalrecette19
  this.totalht19=deccomptabilite.totalht19
  this.totaltva19=deccomptabilite.totaltva19
  this.totaldt19=deccomptabilite.totaldt19
  this.totalttc19=deccomptabilite.totalttc19
  console.log(this.totalht19)
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
          this.userservice.getUserById(deccomptabilite.userId).then(
            (user: User) => {
              if(user)
              {
                this.user = user;
                this.role=user.role
                this.usertype=user.usertype
                this.firstname=user.firstname
                this.lastname=user.lastname
                this.sousactivite=user.sousactivite
              }
              else
              {
                this.firstname=deccomptabilite.firstname
                this.lastname=deccomptabilite.lastname
                this.sousactivite=deccomptabilite.sousactivite
              }
            }
          )
          }
        )
      }
    )
  }
  filterusers(id:string)
  {
    this.filtredcollab=this.deccompt.filterByValue(this.collab,id)
    if(this.filtredcollab.length>0)
    {
      this.prenomcollab=this.filtredcollab[0].firstname
      this.nomcollab=this.filtredcollab[0].lastname
    }
    
  }
  public payement(): void {
    const self =this
    const data = document.getElementById('payementinvoice');
    html2canvas(data,{scale:2}).then((canvas:any) => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;
      const doc = new jsPDF('p', 'mm');
      doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
       
      doc.save(`facture_${self.deccomptabilite.mois}_${self.deccomptabilite.annee}`);
    });
    
    
    
      } 
  generateExcel()
  {
this.excelService.exportAsExcelFile(this.deccomptabilite.autre1,this.deccomptabilite.autre2,this.deccomptabilite.autre3,
  this.deccomptabilite.autre4,this.deccomptabilite.autre5,this.deccomptabilite.autre6,`Maquette comptable_${this.deccomptabilite.mois}_${this.deccomptabilite.annee}`)
  }
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  }
  affect()
  {
    this.loading = true;
  const deccomptabilite=this.deccomptabilite
  deccomptabilite.affecte =this.optionValue;
  
  this.deccompt.completedeccomptabilitereqById(this.deccomptabilite._id,deccomptabilite).then(
    (data:any) => {
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'fichier comptable affectée avec succès',
        showConfirmButton: false,
        timer: 3000
      });
      this.router.navigate(['admin-board']);
    },
    (error) => {
      this.loading = false;
     
      
    
      
    }
  );
  }
  onDelete() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.deccompt.getDeccomptabilitereqById(params.id).then(
          (data:any) => {
            this.loading = false;
            Swal.fire({
              title: 'Veuillez confirmer la suppression!',
              
              icon: 'info',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer',
              
            }).then((result) => {
              if (result.value) {
                this.deccompt.deletedeccomptabiliteById(params.id);
                this.router.navigate(['admin-board']);
              }
  
            }).catch(() => {
              Swal.fire('opération non aboutie!');
            });
    
        
          }
          
        );
      }
    );
  }
}
