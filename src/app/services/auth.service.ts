import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
authurllocal: 'http://localhost:3000/api/';
const authurlcloud ='https://cvm-backend.herokuapp.com/api/'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;
  

  
  public userrole$ = new BehaviorSubject<string>('');
  

  constructor(private router: Router,
              private http: HttpClient) {}

  createNewUser(email:string, password:string,  firstname:string,lastname:string,fonction:string,secteur:string,civilite:string,raisonsociale:string,nomsociete:string,clientcode: string,role:string) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        authurlcloud +'signup',
        { email: email, password: password, firstname:firstname, lastname:lastname,fonction:fonction,secteur:secteur,civilite:civilite,raisonsociale:raisonsociale,nomsociete:nomsociete,clientcode:clientcode, role:role })
        .subscribe(
          () => {
            this.login(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        authurlcloud+'login',
        { email: email, password: password })
        .subscribe(
          (authData: {  role:string,accessToken: string, userId: string }) => {
            this.token = authData.accessToken;
            this.userId = authData.userId;
            this.userrole$.next(authData.role);
            
  
            this.isAuth$.next(true);
            
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }


}
