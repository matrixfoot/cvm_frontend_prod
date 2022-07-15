import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
const API_URL_test = 'http://localhost:3000/api/users/';
const API_URL_cloud= 'https://cvm-backend.herokuapp.com/api/users/'
@Injectable({ providedIn: 'root' })
export class UserService {
    
    
    constructor(private http: HttpClient) { }
    private users: User[] = [
    
    ];
    public users$ = new Subject<User[]>();
 





    
    getAll() {
        this.http.get(API_URL_cloud).subscribe(
          (users: User[]) => {
            if (users) {
              this.users = users;
              this.emitusers();
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    
      emitusers() {
        this.users$.next(this.users);
      }
   
    
      
      getUserById(id: string) {
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
    
      modifyUserById(id: string, user: User) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+ id, user).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
   
    deleteUserById(id: string) {
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
    verifyEmail(token: string) 
    {
      return new Promise((resolve, reject) => {
        this.http.post(API_URL_cloud+ 'verify-email', { token }).subscribe(
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