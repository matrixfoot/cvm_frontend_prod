
export class Deccomptabilite {
  userId: string;
  _id:string;
  nature:string;
  registrecommerce:string;
  matriculefiscale:string;
  codetva:string;
  codegenre:string;
  raisonsociale:string;
  adresse:string;
  codepostal:string;
  activite:string;
  sousactivite:string;
  datearretactivite:string;
  regimefiscalimpot:string;
  firstname:string;
  lastname:string;
  codedeclaration:string;
  mois:string;
  annee:string;
  debitmoisprecedent:string;
  creditmoisprecedent:string
  moisreleve:string
  anneereleve:string
  totalht:number
  totaltva:number
  realtotaltva:number
  totaldt:number
  totalttc:number
  totalht19:number
  totaltva19:number
  realtotaltva19:number
  totaldt19:number
  totalttc19:number
  totalht0:number
  totaltva0:number
  realtotaltva0:number
  totaldt0:number
  totalttc0:number
  totalht019:number
  totaltva019:number
  realtotaltva019:number
  totaldt019:number
  totalttc019:number
  totalht2:number
  totaltva2:number
  totaldt2:number
  totalttc2:number
  totalht219:number
  totaltva219:number
  totaldt219:number
  totalttc219:number
  totalrecette:number
  totalrecette19:number
  totalht3:number
  totaltva3:number
  totaldt3:number 
  totalttc3:number
  totaldebit:number
  totalcredit:number
  totalsoldemois:number
  totalsalairebrut:number
  totalcnss:number
  totalsalaireimposable:number
  totalretenueimpot:number
  totalavancepret:number
  totalsalairenet:number
  affecte:string;
  dateaffectation:string;
  created:Date;
  updated: Date;
  dateouverturedossier:number
  statutadmin:string[]
  statutcollab:string[]
autre0:Autre0[]
autre1:Autre[]
autre2:Autre2[]
autre3:Autre3[]
autre4:Autre4[]
autre5:Autre5[]
autre6:Autre6[]
}
export interface Autre0 {
  type:string,
  jour: string,
  date: string,
  numeronote:string,
  montantht:string,
  montantht19:string,
  montanttva:string,
  montanttva19:string,
  montantdt:string,
  montantttc:string,
  montantttc19:string,
  client:string,
  autreclient:string,

}
export interface Autre {
        type:string,
        jour: string,
        date: string,
        numeronote:string,
        montantht:string,
        montantht19:string,

        montanttva:string,
        montanttva19:string,

        montantdt:string,
        montantttc:string,
        montantttc19:string,

        client:string,
        autreclient:string,

}
export interface Autre2 {
      type:string,
      jour: string,
      date: string,
      recette:string,
      recette19:string,

      montantht:string,
      montantht19:string,

      montanttva:string,
      montanttva19:string,

      montantdt:string,
      montantttc:string,
      montantttc19:string,
}
export interface Autre3 {
      type:string,
      jour: string,
      date: string,
      fournisseur:string,
      autrefournisseur:string,
      numerofacture:string,
      natureachat:string,
      autrenatureachat:string,
      montantht:string,
      montanttva:string,
      montantdt:string,
      montantttc:string,
      reglement:string,
      ficheUrl:string,
      contientfiche:boolean
}
export interface Autre4 {
  type:string,
      jour: string,
      date: string,
      debit:string,
      credit:string,
}
export interface Autre5 {
  type:string,
  annee: string,
  mois: string,
  ficheUrl:string,
  contientfiche:boolean

}
export interface Autre6 {
  type:string,
      matricule: string,
      nomprenom: string,
      salairebrut:string,
      montantcnss:string,
      montantimposable:string,
      montantretenue:string,
      montantavance:string,
      salairenet:string,
      reglement:string,
      ficheUrl:string,
      contientfiche:boolean
    }