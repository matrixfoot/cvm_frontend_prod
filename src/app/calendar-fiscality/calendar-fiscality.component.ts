import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/event.service';
import Swal from 'sweetalert2';
import { Events } from '../models/event.model';
import { Router } from '@angular/router';
import frLocale from '@fullcalendar/core/locales/fr';
@Component({
  selector: 'app-calendar-fiscality',
  templateUrl: './calendar-fiscality.component.html',
  styleUrls: ['./calendar-fiscality.component.scss']
})
export class CalendarFiscalityComponent implements OnInit {

  

  calendarOptions: CalendarOptions;
  error: any;
  events: Events;
  constructor(
    public http: HttpClient,
    private apiService: ApiServiceService,
    private router: Router
  ) {}

  handleDateClick(arg) {

  }

  onSelectx(event) {

  }

  ngOnInit() {
    this.getAllEvents();
  }

  deleteEvent(id) {
    this.apiService.deleteSingleEvent(id).then((data: any) => {});
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
          Swal.fire({
            title: 'Actions Possibles',
            
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Consulter',
            timer: 30000,
          }).then((result) => {
            if (result.value) {
              self.viewevent(event_id);
              
              self.getAllEvents();
            }

          }).catch(() => {
            Swal.fire('Failed!', 'There was something went wrong.');
          });
        }
      };
    });
  }
}
