export class Userdeleted {
    
    userId: string;
    email: string;
    _id:string;
    Firstname:string;
    Lastname:string;
    password: string;
    confirmpassword: string;
    firstname:string;
    lastname:string;
    mobile:string;
    usertype:string;
    fonction:string;
    secteur:string;
    civilite:string;
    nature:string;
    natureactivite:string;
    activite:string
    sousactivite:string
    regimefiscalimpot:string
    regimefiscaltva:string
    matriculefiscale:string
    adresseactivite:string
    codepostal:string
    raisonsociale:string;
    nomsociete:string;
    clientcode: string;
    role: string;
    accessToken: string;
    verified:Date;
    created:Date;
    acceptTerms:Boolean;
    droitcompta:string
    rolesuperviseur:string

  resetToken: Boolean;
  passwordReset:Boolean;
  updated: Date;
  desactive:{statut: string, date:Date};
  deleted:Date;
      
    }