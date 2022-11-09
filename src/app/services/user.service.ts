import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { Userdeleted } from '../models/user-deleted.model';
const API_URL_test = 'http://localhost:3000/api/users/';
const API_URL_cloud= 'https://cvm-backend-pqmj.onrender.com/api/users/'
@Injectable({ providedIn: 'root' })
export class UserService {
    
    
    constructor(private http: HttpClient) { }
    private users: User[] = [
    
    ];
    private usersdeleted: Userdeleted[] = [
    
    ];
    public users$ = new Subject<User[]>();
    public usersdeleted$ = new Subject<Userdeleted[]>();
 





    
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
      getAlldeleted() {
        this.http.get(API_URL_cloud+'deletedusers/all/').subscribe(
          (usersdeleted: Userdeleted[]) => {
            if (usersdeleted) {
              this.usersdeleted = usersdeleted;
              
              this.emitusersdeleted();
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
      emitusersdeleted() {
        this.usersdeleted$.next(this.usersdeleted);
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
      getUserdeletedById(id: string) {
        return new Promise((resolve, reject) => {
          

          this.http.get(API_URL_cloud + 'deleteduser/'+id).subscribe(
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
      completeUserById(id: string, user: User) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+'complete/'+id, user).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      desactivateUser(id: string, user: User) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+'desactivate/'+id, user).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      deletetemporarUser(id: string) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.delete(API_URL_cloud+'temporardelete/'+id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      restaureUser(id: string) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.delete(API_URL_cloud+'restaure/'+id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      activateUser(id: string, user: User) {
        return new Promise((resolve, reject) => {
          
            
          
          this.http.put(API_URL_cloud+'activate/'+id, user).subscribe(
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

    forgotPassword(email: string) 
  {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL_cloud+ 'forgot-password', { email }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
  validateResetToken(token: string) 
  {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL_cloud+ 'validate-reset-token', { token }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
  resetPassword(token: string, password: string, confirmPassword: string) 

  {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL_cloud+ 'reset-password', { token, password, confirmPassword }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getuserbyfirstname(firstname: string) 
  {
    
      this.http.post(API_URL_cloud+ 'filteruserfirstname', { firstname }).subscribe(
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
  getuserbylastname(lastname: string) 
  {
    
      this.http.post(API_URL_cloud+ 'filteruserlastname', { lastname }).subscribe(
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
  getuserbyemail(email: string) 
  {
    
      this.http.post(API_URL_cloud+ 'filteruseremail', { email }).subscribe(
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
  }