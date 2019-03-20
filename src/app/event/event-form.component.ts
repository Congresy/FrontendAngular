import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Evento } from '../models/Evento';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  template: `
  <form style="margin-top: 150px;" [formGroup]="eventForm" (ngSubmit)="onSubmit()" novalidate>
    <mat-form-field><input matInput formControlName="name"  type="text" placeholder="Nombre" required></mat-form-field>
    <mat-form-field><input matInput formControlName="description" type="text" placeholder="Descripción" required></mat-form-field>
    <mat-form-field><input matInput formControlName="allowedParticipants" type="number" min="0" placeholder="Cupos" required></mat-form-field>
    <mat-form-field><input matInput formControlName="speakers" type="text" placeholder="Ponentes" required></mat-form-field>
    <mat-form-field><input matInput formControlName="start" type="date" placeholder="Inicio" required></mat-form-field>
    <mat-form-field><input matInput formControlName="end" type="date" placeholder="Fin" required></mat-form-field>
  <button type="submit" [disabled]="eventForm.pristine">Save</button>
</form>
  `,
  styleUrls: ['./event.component.css']
})
export class EventFormComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  eventForm: FormGroup;
  constructor(private fb: FormBuilder, private dp: DatePipe, private http:HttpClient) {

    this.eventForm = this.createFormGroupWithBuilderAndModel(fb);
  }

  ngOnInit() {

  }

  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group(new Evento());
  }

  onSubmit() {
    
    this.eventForm.controls.start.setValue(this.dp.transform(new Date(this.eventForm.controls.start.value),'dd/MM/yyyy hh:mm'));
    this.eventForm.controls.end.setValue(this.dp.transform(new Date(this.eventForm.controls.end.value),'dd/MM/yyyy hh:mm'));
    this.eventForm.controls.conference.setValue("5b87489e6e0e8600040a62b6");
    this.eventForm.controls.place.setValue("5b888df57ff5040004bb8838")
    this.eventForm.controls.seatsLeft.setValue(this.eventForm.controls.allowedParticipants.value);
    console.log(this.eventForm.value)
    this.http.post('https://congresy.herokuapp.com/events', JSON.stringify(this.eventForm.value), this.httpOptions).subscribe(data => console.log(data), error => console.log(error));
  }


}