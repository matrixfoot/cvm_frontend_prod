import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { Deccomptabilite } from '../models/dec-comptabilite';
const API_URL_test= 'http://localhost:3000/api/deccomptabilite/';
const API_URL_cloud= 'https://good-puce-eel-tutu.cyclic.app/api/deccomptabilite/'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({ providedIn: 'root' })
export class DeccomptabiliteService {
    
    
    constructor(private http: HttpClient) { }
    private deccomptabilites: Deccomptabilite[] = [
    
    ];
    public deccomptabilites$ = new Subject<Deccomptabilite[]>();
 

    getdeccomptabilites() {
        this.http.get(API_URL_cloud).subscribe(
          (deccomptabilites: Deccomptabilite[]) => {
            if (deccomptabilites) {
              this.deccomptabilites = deccomptabilites;
              this.emitdeccomptabilites();

            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    
      emitdeccomptabilites() {
        this.deccomptabilites$.next(this.deccomptabilites);
      }
      getDeccomptabilitereqById(id: string) {
        return new Promise((resolve, reject) => {
          

          this.http.get(API_URL_cloud + id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error); 
            }
          );
        });
      }
      getdeccomptabilite(userId: string) {
        return new Promise((resolve, reject) => {
          this.http.post(API_URL_cloud  ,{userId}).subscribe(
            (deccomptabilites: Deccomptabilite[]) => {
              if (deccomptabilites) {
                this.deccomptabilites = deccomptabilites;
                this.emitdeccomptabilites();
              }
            },
            (error) => {
              console.log(error);
            }
          );
        });
      }
      
    geexistenttdeccomptabilite(userId: string,annee:string,mois:string) 
    {
return new Promise((resolve, reject) => {
        this.http.post(API_URL_cloud+'anneemois/',{userId,annee,mois}).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error); 
          }
        );
      });

      }
      create(deccomptabilite: Deccomptabilite, image3: File[], image5: File[], image6: File[]) {
        return new Promise((resolve, reject) => {
          const deccomptabiliteData = new FormData();
          deccomptabiliteData.append('deccomptabilite', JSON.stringify(deccomptabilite));
          
            for (let i = 0; i < image3.length; i++)
            {
              deccomptabiliteData.append('image', image3[i],'t'+deccomptabilite.autre3[i].type+deccomptabilite.autre3[i].numerofacture+deccomptabilite.mois+deccomptabilite.annee); 
            }
          
         
            for (let i = 0; i < image5.length; i++)
            {
              deccomptabiliteData.append('image', image5[i],'t'+deccomptabilite.autre5[i].type+deccomptabilite.autre5[i].annee+deccomptabilite.autre5[i].mois); 
            }
          
            for (let i = 0; i < image6.length; i++)
            {
              deccomptabiliteData.append('image', image6[i],'t'+deccomptabilite.autre6[i].type+deccomptabilite.autre6[i].matricule+deccomptabilite.mois+deccomptabilite.annee); 
            }
          console.log(deccomptabiliteData)
          
        
          this.http.post(API_URL_cloud+'/createdeccomptabilite/', deccomptabiliteData).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      createwithoutfile(deccomptabilite: Deccomptabilite) {
        return new Promise((resolve, reject) => {
          
          this.http.post(API_URL_cloud+'/createdeccomptabilite/', deccomptabilite).subscribe(
            (response) => {
              resolve(response);

            },
            (error) => {
              reject(error);
            },
          );
        });
      }
    
     
    
      modify(id: string, deccomptabilitereq: Deccomptabilite, image: File | string) {
        return new Promise((resolve, reject) => {
          let deccomptabilitereqData: Deccomptabilite | FormData;
          if (typeof image === 'string') {
            
            deccomptabilitereqData = deccomptabilitereq;
          } else {
            deccomptabilitereqData = new FormData();
            deccomptabilitereqData.append('deccomptabilitereq', JSON.stringify(deccomptabilitereq));
            deccomptabilitereqData.append('image', image, deccomptabilitereq.annee+deccomptabilitereq.mois);
          }
          this.http.put(API_URL_cloud + id, deccomptabilitereqData).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      modifydeccomptabilitereqById(id: string, deccomptabilite: Deccomptabilite) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+ id, deccomptabilite).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        }); 
      }
      completedeccomptabilitereqById(id: string, deccomptabilite: Deccomptabilite) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+'modify/'+ id, deccomptabilite).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
    
      deletedeccomptabiliteById(id: string) {
        return new Promise((resolve, reject) => {
          this.http.delete(API_URL_cloud+ id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }  
      deletedeccomptabilites() {
        return new Promise((resolve, reject) => {
          this.http.delete(API_URL_cloud).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
    }
