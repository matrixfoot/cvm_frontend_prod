import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { CondidateService } from '../services/condidate.service';
import { Condidate } from '../models/condidate.model';
import { interval, Subscription } from 'rxjs';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import Swal from 'sweetalert2';
import { Sort } from '../_helpers/sort';

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
  filtredcollab: any[];
  prenomcollab: any;
  nomcollab: any;
  allstatuts: any[];
  sortedallstatuts: any[];
  public countdown=0
  public interval$ = interval(1000);
  selected: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cond: CondidateService,
    private token: TokenStorageService,private userservice: UserService,private deccompt:DeccomptabiliteService){}

  
  ngOnInit() {
    this.loading = true;
    this.currentUser = this.token.getUser();
    if(this.currentUser.role==='admin'||this.currentUser.role==='supervisor')
    {
      this.interval$.subscribe(value => this.countdown=value), this.countdown=0
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
            this.allstatuts=[]
            const sort = new Sort();
            this.loading = false;
            this.condidate = condidate;
            this.allstatuts=this.allstatuts.concat(this.condidate.statutadmin,this.condidate.statutcollab)
            this.sortedallstatuts=this.allstatuts.sort(sort.startSort('datefin','asc',''));
            if(this.condidate.affecte)
            {
              this.optionValue=this.condidate.affecte
            }
            
          }
        );
      }
    );
    
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
  getNavigation(link, id){
      
    this.router.navigate([link + '/' + id]);
      
  } 
  affect() {
    this.loading = true;
    const condidate = new Condidate();
    condidate.statutadmin=this.condidate.statutadmin
    condidate.statutcollab=this.condidate.statutcollab
    condidate.affecte =this.optionValue;
    condidate.statutadmin.push
    //@ts-ignore
    ({
      statut:'affecté',
      motif:'',
      datefin:Date.now(),
      duree:this.countdown,     
    })
    condidate.statutcollab.push
    //@ts-ignore
    ({
      statutcoll:'en cours de traitement',
      motifcoll:'',
      datefin:Date.now(),
      duree:'',     
    })
    this.cond.modifycondidateById(this.condidate._id,condidate).then(
      (data:any) => {
        this.loading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'candidature affectée avec succès',
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
  async decideadmin()
  {
    this.loading = true;
    const condidate = new Condidate();
    
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
                   //@ts-ignore
  if(this.condidate.statutadmin.length>0)
  {
    //@ts-ignore
    if(this.condidate.statutadmin[this.condidate.statutadmin.length-1].statut=='en cours de supervision')
    { 
      Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme supervisé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
        }).then((result) => {
        if (result.isConfirmed) {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'supervisé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature modifiée avec succès',
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
        else if (result.isDenied)
        {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          condidate.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature modifiée avec succès',
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
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    //@ts-ignore
    if(this.condidate.statutadmin[this.condidate.statutadmin.length-1].statut=='en cours de validation')
    { 
      await Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme validé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
      }).then((result) => {
        if (result.isConfirmed) 
        {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'validé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature modifiée avec succès',
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
        else if (result.isDenied)
        {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          condidate.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
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
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    //@ts-ignore
    if(this.condidate.statutadmin[this.condidate.statutadmin.length-1].statut=='en cours de clôture')
    { 
      Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme clôturé',
        cancelButtonText: 'Annuler',
        denyButtonText: 'à rectifier',
        
        }).then((result) => {
        if (result.isConfirmed) {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'clôturé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature modifiée avec succès',
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
        else if (result.isDenied)
        {
          condidate.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          condidate.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature modifiée avec succès',
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
        
        }).catch(() => {
        Swal.fire('opération non aboutie!');
        });
    }
    
  }
   
  }
  async traite()
  {
    this.loading = true;
    const condidate = new Condidate();
    
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
                   //@ts-ignore
  if(this.condidate.statutcollab.length>0)
  {
    //@ts-ignore
    if(this.condidate.statutcollab[this.condidate.statutcollab.length-1].statutcoll!='traité')
    { 
      await Swal.fire({
        title: 'Veuillez choisir entre les alternatives suivantes!',
        input: 'text',
        inputLabel: 'motif(facultatif)',
        inputValue: '',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#555',
        confirmButtonText: 'marquer comme traité',
        cancelButtonText: 'Annuler',
        
      }).then((result) => {
        if (result.isConfirmed) 
        {
          condidate.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'traité',
            motifcoll:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cond.modifycondidateById(this.condidate._id,condidate).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'candidature traité avec succès',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate(['collab-board']);
            },
            (error) => {
              this.loading = false;
              
              window.scrollTo(0, 0);  
            }
          );
        }
     
      
    }
      )
  }
    else
    {
      this.router.navigate(['collab-board']);
    }
  }
   
  }
  update(e){
    this.selected = e.target.value   
    if(this.selected=='supprimer le dernier statut collaborateur')
    {
      this.deletestatutcollab()
    }
    else
    {
      this.deletestatutadmin()
    }
  }
  deletestatutcollab()
  {
    this.loading = true;
    const condidate = new Condidate();
    
                  this.condidate.statutcollab.pop()
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
      this.cond.modifycondidateById(this.condidate._id,condidate).then(
        (data:any) => {
          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'statut collaborateur supprimé avec succès',
            showConfirmButton: false,
            timer: 3000
          });
          this.reloadPage()
        },
        (error) => {
          this.loading = false;
          
          window.scrollTo(0, 0);  
        }
      ); 

  }
  deletestatutadmin()
  {
    this.loading = true;
    const condidate = new Condidate();
   
                  this.condidate.statutadmin.pop()
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
      this.cond.modifycondidateById(this.condidate._id,condidate).then(
        (data:any) => {
          this.loading = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'statut admin supprimé avec succès',
            showConfirmButton: false,
            timer: 3000
          });
          this.reloadPage()
        },
        (error) => {
          this.loading = false;
          
          window.scrollTo(0, 0);  
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
  reloadPage(): void {
  
    window.location.reload();
    
  }
  }
