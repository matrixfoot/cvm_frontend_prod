import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { DeccomptabiliteService } from '../services/dec-comptabilite';
import { interval, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Sort } from '../_helpers/sort';


@Component({
  selector: 'app-view-contactreq',
  templateUrl: './view-contactreq.component.html',
  styleUrls: ['./view-contactreq.component.scss']
})
export class ViewContactreqComponent implements OnInit {
public contact: Contact;
  public errormsg:string;
  public loading: boolean;
  public optionValue:any
  currentUser: any;
  private usersSub: Subscription;
  users: User[]=[];
  collab: any[]=[];
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
    private cont: ContactService,
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
        this.cont.getContactreqById(params.id).then(
          (contact: Contact) => {
            this.allstatuts=[]
            const sort = new Sort();
            this.loading = false;
            this.contact = contact;
            this.allstatuts=this.allstatuts.concat(this.contact.statutadmin,this.contact.statutcollab)
            this.sortedallstatuts=this.allstatuts.sort(sort.startSort('datefin','asc',''));
            
            if(this.contact.affecte)
            {
              this.optionValue=this.contact.affecte
              this.filterusers(this.contact.affecte)
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
  affect()
  {
    this.loading = true;
  const contactreq = new Contact();
  
  contactreq.statutadmin=this.contact.statutadmin
  contactreq.statutcollab=this.contact.statutcollab
  contactreq.affecte =this.optionValue;
  contactreq.statutadmin.push
  //@ts-ignore
  ({
    statut:'affecté',
    motif:'',
    datefin:Date.now(),
    duree:this.countdown,     
  })
  contactreq.statutcollab.push
  //@ts-ignore
  ({
    statutcoll:'en cours de traitement',
    motifcoll:'',
    datefin:Date.now(),
    duree:'',     
  })
  this.cont.modifycontactreqById(this.contact._id,contactreq).then(
    (data:any) => {
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'réclamation affectée avec succès',
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
    const contactreq = new Contact;
    
                  contactreq.statutadmin=this.contact.statutadmin
                  contactreq.statutcollab=this.contact.statutcollab
                   //@ts-ignore
  if(this.contact.statutadmin.length>0)
  {
    //@ts-ignore
    if(this.contact.statutadmin[this.contact.statutadmin.length-1].statut=='en cours de supervision')
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'supervisé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation modifiée avec succès',
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          contactreq.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation modifiée avec succès',
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
    if(this.contact.statutadmin[this.contact.statutadmin.length-1].statut=='en cours de validation')
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'validé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation modifiée avec succès',
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          contactreq.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
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
    if(this.contact.statutadmin[this.contact.statutadmin.length-1].statut=='en cours de clôture')
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'clôturé',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation modifiée avec succès',
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
          contactreq.statutadmin.push
          //@ts-ignore
          ({
            statut:'à rectifier',
            motif:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          contactreq.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'en cours de traitement',
            motifcoll:'',
            datefin:Date.now(),
            duree:'',     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation modifiée avec succès',
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
    const contactreq = new Contact;
    
                  contactreq.statutadmin=this.contact.statutadmin
                  contactreq.statutcollab=this.contact.statutcollab
                   //@ts-ignore
  if(this.contact.statutcollab.length>0)
  {
    //@ts-ignore
    if(this.contact.statutcollab[this.contact.statutcollab.length-1].statutcoll!='traité')
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
          contactreq.statutcollab.push
          //@ts-ignore
          ({
            statutcoll:'traité',
            motifcoll:result.value,
            datefin:Date.now(),
            duree:this.countdown,     
          })
          this.cont.modifycontactreqById(this.contact._id,contactreq).then(
            (data:any) => {
              this.loading = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'réclamation traité avec succès',
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
    const contactreq = new Contact;
    
                  this.contact.statutcollab.pop()
                  contactreq.statutadmin=this.contact.statutadmin
                  contactreq.statutcollab=this.contact.statutcollab
      this.cont.modifycontactreqById(this.contact._id,contactreq).then(
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
    const contactreq = new Contact;
   
                  this.contact.statutadmin.pop()
                  contactreq.statutadmin=this.contact.statutadmin
                  contactreq.statutcollab=this.contact.statutcollab
      this.cont.modifycontactreqById(this.contact._id,contactreq).then(
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
  reloadPage(): void {
  
    window.location.reload();
    
  }
  }
