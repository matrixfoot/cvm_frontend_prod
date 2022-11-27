import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { Deccomptabilite } from '../models/dec-comptabilite';
const API_URL_test = 'http://localhost:3000/api/deccomptabilite/';
const API_URL_cloud= 'https://cvm-backend-pqmj.onrender.com/api/deccomptabilite/'
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
        this.http.get(API_URL_test).subscribe(
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
          

          this.http.get(API_URL_test + id).subscribe(
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
          this.http.post(API_URL_test  ,{userId}).subscribe(
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
        this.http.post(API_URL_test+'anneemois/',{userId,annee,mois}).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error); 
          }
        );
      });

      }
      
      create(deccomptabilite: Deccomptabilite) {
        return new Promise((resolve, reject) => {
          
          this.http.post(API_URL_test+'createdeccomptabilite', deccomptabilite).subscribe(
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
          this.http.put(API_URL_test + id, deccomptabilitereqData).subscribe(
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
          
            
          
          this.http.put(API_URL_test+ id, deccomptabilite).subscribe(
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
          
            
          
          this.http.put(API_URL_test+'modify/'+ id, deccomptabilite).subscribe(
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
          this.http.delete(API_URL_test+ id).subscribe(
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
          this.http.delete(API_URL_test).subscribe(
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
