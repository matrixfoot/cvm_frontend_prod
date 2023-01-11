import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/event.service';
import Swal from 'sweetalert2';
import { Events } from '../models/event.model';
import { Router } from '@angular/router';
import frLocale from '@fullcalendar/core/locales/fr';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-calendar-fiscality',
  templateUrl: './calendar-fiscality.component.html',
  styleUrls: ['./calendar-fiscality.component.scss']
})
export class CalendarFiscalityComponent implements OnInit {

  

  calendarOptions: CalendarOptions;
  error: any;
  events: Events;
  currentUser:any
  constructor(
    public http: HttpClient,
    private apiService: ApiServiceService,
    private router: Router,private token: TokenStorageService
  ) {}

  handleDateClick(arg) {

  }

  onSelectx(event) {

  }

  ngOnInit() {
    this.getAllEvents();
    this.currentUser = this.token.getUser();
  }

  deleteEvent(id) {
    this.apiService.deleteSingleEvent(id).then((data: any) => {});
  }
  deleteall() {
    this.apiService.deleteAllEvents().then(
      (data: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'tous les évènements sont suuprimés avec succès!',
          showConfirmButton: false,
          timer: 6000 
        });
        this.reloadPage()
      });
  }
  viewevent(id) {
    this.apiService.geteventreqById(id).then((data: any) => {});
    this.router.navigate(['view-event/' + id]);
  }
  getNavigation(link){
      
    this.router.navigate([link]);
      
  }

  getAllEvents() {
    this.apiService.getAllEvents().subscribe((data: any) => {
      const self = this;
      this.calendarOptions = {
        initialView: 'dayGridMonth,timeGridWeek,timeGridDay',
        selectable: true,
        editable: false,
        displayEventTime: false,
        locale: frLocale,
        // dateClick: this.handleDateClick.bind(this),
        select: this.handleDateClick.bind(this),
        events: data,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,dayGridlist'
          },
        eventClick(evetData) {
          // tslint:disable-next-line:variable-name
          const event_id = evetData.event._def.extendedProps._id;
          self.viewevent(event_id);
          self.getAllEvents();
        }
      };
    });
  }
  reloadPage (){
    setTimeout(() => window.location.reload(), 1000); 
  }
}
