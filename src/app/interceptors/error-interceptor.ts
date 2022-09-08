import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    
    private router: Router,private Auth: TokenStorageService,
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
          }
          else {
            console.log('this is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${JSON.stringify( error.error.error)}`;
          }
          if (error.status===415 ){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: JSON.stringify( error.error.error.message),
            confirmButtonText: 'Se reconnecter',
            timer: 30000,
          }).then((result) => {
            if (result.value) {
              this.Auth.signOut();
              this.reloadPage();
              this.router.navigate(['login']);
            }

          }).catch(() => {
            Swal.fire('Failed!', 'There was something went wrong.');
          })
        }
          else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: JSON.stringify( error.error.error),
            })};
          return throwError(errorMsg);
        })
      )
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 3500);
    
    
  }
}