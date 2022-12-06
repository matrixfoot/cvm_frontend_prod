
export class Deccomptabilite {
  userId: string;
  _id:string;
codedeclaration:string;
  nature:string;
  mois:string;
  annee:string;
  statut:string;
  motif:string;
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
      ficheUrl:string
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
  ficheUrl:string
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
      ficheUrl:string
    }