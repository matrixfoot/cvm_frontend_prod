
export class Deccomptabilite {
  userId: string;
  _id:string;
codedeclaration:string;
  nature:string;
  activite:string;
  sousactivite:string;
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
  totalht2:number
  totaltva2:number
  totaldt2:number
  totalttc2:number
  totalrecette:number
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
  totalht219: number;
  totaltva219: number;
  totaldt219: number;
  totalttc219: number;
  totalrecette19: number;
  totalht19: number;
  totaltva19: number;
  totaldt19: number;
  totalttc19: number;
  statut:string;
  motif:string;
  affecte:string;
    dateaffectation:Date;
  created:Date;
updated: Date;
autre1:Autre[]
autre2:Autre2[]
autre3:Autre3[]
autre4:Autre4[]
autre5:Autre5[]
autre6:Autre6[]
}

export interface Autre {
        type:string,
        jour: string,
        date: string,
        numeronote:string,
        montantht:string,
        montanttva:string,
        montantdt:string,
        montantttc:string,
        reglement:string,
}
export interface Autre2 {
      type:string,
      jour: string,
      date: string,
      recette:string,
      montantht:string,
      montanttva:string,
      montantdt:string,
      montantttc:string,
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