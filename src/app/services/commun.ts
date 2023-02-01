import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

    statuscollab:string[]=['traité']
    statusadmin:string[]=['en cours de supervision','supervisé','en cours de validation','validé','en cours de clôture','clôturé','à rectifié']

  constructor() {

  }
}