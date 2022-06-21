import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    
    
    constructor(private http: HttpClient) { }
    private users: User[] = [
    
    ];
    public users$ = new Subject<User[]>();
    
    getAll() {
        this.http.get('https://backendmanagementapp.herokuapp.com/api/users').subscribe(
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
          

          this.http.get('https://backendmanagementapp.herokuapp.com/api/users/' + id).subscribe(
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
          
            
          
          this.http.put('https://backendmanagementapp.herokuapp.com/api/users/' + id, user).subscribe(
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
        this.http.delete('https://backendmanagementapp.herokuapp.com/api/users/'+ id).subscribe(
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