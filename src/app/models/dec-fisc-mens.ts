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
statut:string;
motif:string;
type:string;
traitementetsalaire:{
salairebrut:string;
salaireimposable:string;
retenuealasource:string;
contributionsociale:string;
}
location:{
    type:string;
    montantbrut:string;
    taux:string;
    montantnet:string;
    montantretenue:string;
}
honoraire:{
    type:string;
    montantbrut:string;
    taux:string;
    montantnet:string;
    montantretenue:string;
}
montant1000:{
    type:string;
    montantbrut:string;
    taux:string;
    montantnet:string;
    montantretenue:string;
}
autre:{
    titre:string;
    montant:string;
    description:string;
}
  }
      
    }