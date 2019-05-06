import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../models/Evento';
import { ConferenceService } from './conference.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EventService {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  create(event: Evento): Observable<Evento> {
    return this.http.post<Evento>('https://congresy.herokuapp.com/events', event, httpOptions);
  }

  joinEvent(idEvent: string) {
    this.http.put('https://congresy.herokuapp.com/events/add/' + idEvent + '/participants/' + sessionStorage.getItem('userId'),
      { headers: 'Accept: application/json' }).subscribe();
  }

  generateForm(): FormGroup {
    return this.formBuilder.group({
      event: this.formBuilder.group({
        name: ['', Validators.required],
        allowedParticipants: [, Validators.required],
        description: ['', Validators.required],
        speakersNames: ['', Validators.required],
        start: [, Validators.required],
        end: [, Validators.required],
        conference: ['', Validators.required],
        role: ['', Validators.required]
      }),
      place: this.formBuilder.group({
        postalCode: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        details: ['', Validators.required],
        town: ['', Validators.required]
      })
    });
  }
}
