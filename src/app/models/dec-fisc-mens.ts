export class Decfiscmens {
   
    userId: string;
    email: string;
    _id:string;
    registrecommerce:string;
    matriculefiscale:string;
    codetva:string;
    codegenre:string;
    raisonsociale:string;
    adresse:string;
    codepostal:string;
    activite:string;
datearretactivite:string;

    firstname:string;
    lastname:string;
    codedeclaration:string;
    mois:string;
    annee:string;

    created:Date;
    
  updated: Date;

  impottype1: {
type:string;
traitementetsalaire:{
salairebrut:number;
salaireimposable:number;
retenuealasource:number;
contributionsociale:number;
}
location:{
    montantbrut:number;
    taux:number;
    montantnet:number;
    montantretenue:number;
}
honoraire:{
    montantbrut:number;
    taux:number;
    montantnet:number;
    montantretenue:number;
}
montant1000:{
    montantbrut:number;
    taux:number;
    montantnet:number;
    montantretenue:number;
}
autre:{
    titre:string;
    montant:number;
    description:string;
}
  }
      
    }