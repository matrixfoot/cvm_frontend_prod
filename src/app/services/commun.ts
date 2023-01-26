import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

    status:string[]=['Clôturé','Valide','En cours de verification','à rectifié']
  constructor() {

  }
}