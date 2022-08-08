import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-due-date-timeline',
  templateUrl: './due-date-timeline.component.html',
  styleUrls: ['./due-date-timeline.component.scss'],
  
})
export class DueDateTimelineComponent implements OnInit {
  usertype:string;
  currentUser: any;
 
  constructor(private token: TokenStorageService) {
    
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.usertype=this.currentUser.usertype;
  }

}
