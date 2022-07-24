import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CondidateService } from '../services/condidate.service';
import { stringify } from 'querystring';
import { MustMatch } from '../_helpers/must-match.validator';
import { Condidate } from '../models/condidate.model';
import { mimeType } from '../_helpers/mime-type.validator';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  condidateform: FormGroup;
  loading = false;
  public imagePreview: string;
  
  fileUploaded = false;
  errorMessage: string;
  successmessage:string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cond: CondidateService) { }

  ngOnInit() {

    
    this.condidateform = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      
      firstname: [null, Validators.required],
      confirmemail: [null, Validators.required],
      mobile: [null, Validators.required],
      confirmmobile: [null, Validators.required],
      
      lastname: [null, Validators.required],
      
      adresse: [null,Validators.required],
      
      description: [null, Validators.required],
      image: [null, Validators.required, mimeType]
      
    },
    {
      validator: [MustMatch('email','confirmemail'),MustMatch('mobile','confirmmobile')]
    });
  }

  onSubmit() {
    this.loading = true;
    const condidate = new Condidate();
  condidate.email = this.condidateform.get('email').value;
    
  condidate.mobile = this.condidateform.get('mobile').value;
    
  condidate.firstname = this.condidateform.get('firstname').value;
  condidate.lastname = this.condidateform.get('lastname').value;
  condidate.adresse = this.condidateform.get('adresse').value;
  condidate.description = this.condidateform.get('description').value;
    
    condidate.ficheUrl = '';
    
    this.cond.create(condidate, this.condidateform.get('image').value).then(
      (data:any) => {
        this.condidateform.reset();
        this.loading = false;
        this.successmessage=data.message;
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.condidateform.get('image').patchValue(file);
    this.condidateform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.condidateform.get('image').valid) {
        this.imagePreview = reader.result as string;
        this.fileUploaded = true;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
    
  }
}