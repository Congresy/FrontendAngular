import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Evento, NewEvento } from './../../../models/Evento';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./../event.component.css'],
  providers: [EventService]
})
export class EventFormComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  eventForm: FormGroup;
  roles: String[] = ['Workshop', 'Ordinary', 'Social event', 'Invitation'];
  constructor(private fb: FormBuilder, private dp: DatePipe, private http: HttpClient, private eventService: EventService) {
  }

  ngOnInit() {
    this.eventForm = this.eventService.generateForm();
  }

  onSubmit() {

    this.eventForm.get('event').get('start').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('start').value),
      'dd/MM/yyyy hh:mm'));
    this.eventForm.get('event').get('end').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('end').value),
      'dd/MM/yyyy hh:mm'));
    this.eventForm.get('event').get('conference').setValue('5cd01e4c803a060004a04ee3');
    console.log(this.eventForm.value);
    this.eventService.create(this.eventForm.get('event').value).subscribe(evento => console.log(evento));
  }
}
