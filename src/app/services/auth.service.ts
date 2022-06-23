import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
authurllocal: 'http://localhost:3000/api/';
const authurlcloud ='https://cvm-backend.herokuapp.com/api/';
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

  

  register(email:string, password:string,  firstname:string,lastname:string,fonction:string,secteur:string,civilite:string,raisonsociale:string,nomsociete:string,clientcode: string,role:string): Observable<any> {
    return this.http.post(authurlcloud + 'signup', {
      email, password, firstname, lastname,fonction,secteur,civilite,raisonsociale,nomsociete,clientcode, role
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
