import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { stringify } from 'querystring';

import { Contact } from '../../models/contact.model';
import { mimeType } from '../../_helpers/mime-type.validator';
import { AlertService } from '../../_helpers/alert.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  


  contactform: FormGroup;
  loading = false;
  public imagePreview: string;
  
  fileUploaded = false;
  errorMessage: string;
  successmessage:string;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cont: ContactService,
    private alertService: AlertService) { }

  ngOnInit() {

    
    this.contactform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
      firstname: ['', Validators.required],
      
      mobile: ['', Validators.required],
      
      
      lastname: ['', Validators.required],
      
      
      
      description: ['', Validators.required],
      image: ['', mimeType]
      
   
    });
  }
  get f() { return this.contactform.controls; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.contactform.invalid) {
      
     return this.loading = false;
  }
    const contactreq = new Contact();
    contactreq.email = this.contactform.get('email').value;
    
    contactreq.mobile = this.contactform.get('mobile').value;
    
    contactreq.firstname = this.contactform.get('firstname').value;
    contactreq.lastname = this.contactform.get('lastname').value;
  
    contactreq.description = this.contactform.get('description').value;
   
    contactreq.ficheUrl = '';
    
    this.cont.create(contactreq, this.contactform.get('image').value).then(
      (data:any) => {
        this.contactform.reset();
        this.loading = false;
        this.alertService.success('Votre requête a été envoyé avec succès!');
        window.scrollTo(0, 0);
      },
      (error) => {
        this.loading = false;
        this.alertService.error(error.error.error);
        window.scrollTo(0, 0);
      }
    );
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.contactform.get('image').patchValue(file);
    this.contactform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.contactform.get('image').valid) {
        this.imagePreview = reader.result as string;
        this.fileUploaded = true;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
    
  }
  onReset() {
    this.submitted = false;
    this.contactform.reset();
}
}