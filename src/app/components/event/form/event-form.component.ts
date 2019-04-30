import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Evento, NewEvento } from './../../../models/Evento';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./../event.component.css']
})
export class EventFormComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  eventForm: FormGroup;
  constructor(private fb: FormBuilder, private dp: DatePipe, private http: HttpClient) {

    this.eventForm = this.createFormGroupWithBuilderAndModel(fb);
  }

  ngOnInit() {

  }

  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group(new NewEvento());
    // return formBuilder.group({
    //   'name': ['']
    // });
  }

  onSubmit() {

    this.eventForm.controls.start.setValue(this.dp.transform(new Date(this.eventForm.controls.start.value), 'dd/MM/yyyy hh:mm'));
    this.eventForm.controls.end.setValue(this.dp.transform(new Date(this.eventForm.controls.end.value), 'dd/MM/yyyy hh:mm'));
    this.eventForm.controls.conference.setValue('5b87489e6e0e8600040a62b6');
    this.eventForm.controls.place.setValue('5b888df57ff5040004bb8838');
    this.eventForm.controls.seatsLeft.setValue(this.eventForm.controls.allowedParticipants.value);
    this.eventForm.controls.speakers.setValue([this.eventForm.controls.speakers.value]);
    this.eventForm.controls.participants.setValue([]);
    console.log(this.eventForm.value);
    this.http.post('https://congresy.herokuapp.com/events', JSON.stringify(this.eventForm.value), this.httpOptions)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
