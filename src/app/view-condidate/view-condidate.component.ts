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
import { CommunService } from '../services/commun';

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
    private token: TokenStorageService,private userservice: UserService,private commun: CommunService,private deccompt:DeccomptabiliteService){}

  
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
    this.commun.getcurrenttime().then(
      async (data:any) => {
        condidate.statutadmin.push
        //@ts-ignore
        ({
          statut:'affect??',
          motif:'',
          datefin:data,
          duree:this.countdown,     
        })
        condidate.statutcollab.push
        //@ts-ignore
        ({
          statutcoll:'en cours de traitement',
          motifcoll:'',
          datefin:data,
          duree:'',     
        })
        this.cond.modifycondidateById(this.condidate._id,condidate).then(
          (data:any) => {
            this.loading = false;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'candidature affect??e avec succ??s',
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
    )

  }
  async decideadmin()
  {
    this.loading = true;
    const condidate = new Condidate();
    
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
                  this.commun.getcurrenttime().then(
                    async (data:any) => {
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
                         confirmButtonText: 'marquer comme supervis??',
                         cancelButtonText: 'Annuler',
                         denyButtonText: '?? rectifier',
                         
                         }).then((result) => {
                         if (result.isConfirmed) {
                           condidate.statutadmin.push
                           //@ts-ignore
                           ({
                             statut:'supervis??',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature modifi??e avec succ??s',
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
                             statut:'?? rectifier',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           condidate.statutcollab.push
                           //@ts-ignore
                           ({
                             statutcoll:'en cours de traitement',
                             motifcoll:'',
                             datefin:data,
                             duree:'',     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature modifi??e avec succ??s',
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
                         Swal.fire('op??ration non aboutie!');
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
                         confirmButtonText: 'marquer comme valid??',
                         cancelButtonText: 'Annuler',
                         denyButtonText: '?? rectifier',
                         
                       }).then((result) => {
                         if (result.isConfirmed) 
                         {
                           condidate.statutadmin.push
                           //@ts-ignore
                           ({
                             statut:'valid??',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature modifi??e avec succ??s',
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
                             statut:'?? rectifier',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           condidate.statutcollab.push
                           //@ts-ignore
                           ({
                             statutcoll:'en cours de traitement',
                             motifcoll:'',
                             datefin:data,
                             duree:'',     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'd??claration modifi??e avec succ??s',
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
                         Swal.fire('op??ration non aboutie!');
                         });
                     }
                     //@ts-ignore
                     if(this.condidate.statutadmin[this.condidate.statutadmin.length-1].statut=='en cours de cl??ture')
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
                         confirmButtonText: 'marquer comme cl??tur??',
                         cancelButtonText: 'Annuler',
                         denyButtonText: '?? rectifier',
                         
                         }).then((result) => {
                         if (result.isConfirmed) {
                           condidate.statutadmin.push
                           //@ts-ignore
                           ({
                             statut:'cl??tur??',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature modifi??e avec succ??s',
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
                             statut:'?? rectifier',
                             motif:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           condidate.statutcollab.push
                           //@ts-ignore
                           ({
                             statutcoll:'en cours de traitement',
                             motifcoll:'',
                             datefin:data,
                             duree:'',     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature modifi??e avec succ??s',
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
                         Swal.fire('op??ration non aboutie!');
                         });
                     }
                     
                   }
                    }
                  )

   
  }
  async traite()
  {
    this.loading = true;
    const condidate = new Condidate();
    
                  condidate.statutadmin=this.condidate.statutadmin
                  condidate.statutcollab=this.condidate.statutcollab
                  this.commun.getcurrenttime().then(
                    async (data:any) => {
                   //@ts-ignore
                   if(this.condidate.statutcollab.length>0)
                   {
                     //@ts-ignore
                     if(this.condidate.statutcollab[this.condidate.statutcollab.length-1].statutcoll!='trait??')
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
                         confirmButtonText: 'marquer comme trait??',
                         cancelButtonText: 'Annuler',
                         
                       }).then((result) => {
                         if (result.isConfirmed) 
                         {
                           condidate.statutcollab.push
                           //@ts-ignore
                           ({
                             statutcoll:'trait??',
                             motifcoll:result.value,
                             datefin:data,
                             duree:this.countdown,     
                           })
                           this.cond.modifycondidateById(this.condidate._id,condidate).then(
                             (data:any) => {
                               this.loading = false;
                               Swal.fire({
                                 position: 'center',
                                 icon: 'success',
                                 title: 'candidature trait?? avec succ??s',
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
                  )

   
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
            title: 'statut collaborateur supprim?? avec succ??s',
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
            title: 'statut admin supprim?? avec succ??s',
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
