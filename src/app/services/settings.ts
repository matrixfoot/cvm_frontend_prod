import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { Carousel } from '../models/settings';
const API_URL_test = 'http://localhost:3000/api/settings/';
const API_URL_cloud= 'https://cvm-backend-pqmj.onrender.com/api/settings/'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({ providedIn: 'root' })
export class CarouselService {
    
    
    constructor(private http: HttpClient) { }
    private carousels: Carousel[] = [];
    public carousels$ = new Subject<Carousel[]>();
 

    getCarouselalldata() {
        this.http.get(API_URL_test).subscribe(
          (carousels: Carousel[]) => {
            if (carousels) {
              this.carousels = carousels;
              this.emitCarousels();
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    
      emitCarousels() {
        this.carousels$.next(this.carousels);
      }
      getCarouseldataById(id: string) {
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
     
   
      
    
      create(carousel: Carousel, image: File) {
        return new Promise((resolve, reject) => {
          const carouselData = new FormData();
          carouselData.append('carousel', JSON.stringify(carousel));
          carouselData.append('image', image, carousel.titre);
          this.http.post(API_URL_test+'createcarouseldata', carouselData).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
     
    
     
    
      modify(id: string, carousel: Carousel, image: File | string) {
        return new Promise((resolve, reject) => {
          let carouseldata: Carousel | FormData;
          if (typeof image === 'string') {
            carousel.ficheUrl = image;
            carouseldata = carousel;
          } else {
            carouseldata = new FormData();
            carouseldata.append('carousel', JSON.stringify(carousel));
            carouseldata.append('image', image, carousel.titre);
          }
          this.http.put(API_URL_test + id, carouseldata).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      deletecarouseldataById(id: string) {
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
      
      
    }
