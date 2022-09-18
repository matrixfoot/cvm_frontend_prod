export class User {
    
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
resetToken: Boolean;
passwordReset:Boolean;
updated: Date;
desactive:{statut: string, date:Date};
restaured:Date;
    
  }