import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL_test = 'http://localhost:3000/api/users/';
const API_URL_cloud= 'https://cvm-backend.herokuapp.com/api/users/'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL_cloud + ':id', { responseType: 'text' });
  }
  
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL_cloud , { responseType: 'text' });
  }
}