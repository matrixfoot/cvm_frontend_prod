import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const authurllocal= 'http://localhost:3000/api/users/';
<<<<<<< HEAD
const authurlcloud ='https://filthy-ruby-moose.cyclic.app/api/users/';
=======
const authurlcloud ='https://good-puce-eel-tutu.cyclic.app/api/users/';
>>>>>>> 3dbe58f379b76752bb388cea71d48bb133a1f7db
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  

  
  public userrole$ = new BehaviorSubject<string>('');
  

  constructor(private router: Router,
              private http: HttpClient) {}

  

  register(email:string, password:string,  confirmpassword:string, mobile:string,usertype:string,firstname:string,lastname:string,fonction:string,secteur:string,civilite:string,nature:string,raisonsociale:string,nomsociete:string,clientcode: string,role:string): Observable<any> {
    return this.http.post(authurlcloud + 'signup', {
      email, password, confirmpassword,firstname, lastname,fonction,secteur,civilite,nature,mobile,usertype,raisonsociale,nomsociete,clientcode, role
    }, httpOptions);
    
  }
  

  login(email: string, password: string) 
  : Observable<any> {
    return this.http.post(authurlcloud + 'login', {
      
      email,
      
      password
    }, httpOptions);
  
  }
   
  }
