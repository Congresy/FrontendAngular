import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../models/Evento';
import { Place } from '../models/Place';
import { PlaceService } from './place.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EventService {

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private placeService: PlaceService) { }

  create(event: Evento): Observable<Evento> {
    return this.http.post<Evento>('https://congresy.herokuapp.com/events', event, httpOptions);
  }

  update(event: Evento): Observable<Evento> {
    return this.http.put<Evento>('https://congresy.herokuapp.com/events/' + event.id, event, httpOptions);
  }

  joinEvent(idEvent: string) {
    this.http.put('https://congresy.herokuapp.com/events/add/' + idEvent + '/participants/' + sessionStorage.getItem('userId'),
      { headers: 'Accept: application/json' }).subscribe();
  }

  getOneById(id: string): Observable<Evento> {
    return this.http.get<Evento>('https://congresy.herokuapp.com/events/' + id, httpOptions);
  }

  generateForm(): FormGroup {
    return this.formBuilder.group({
      event: this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        allowedParticipants: [, Validators.required],
        description: ['', Validators.required],
        speakers: [[], Validators.required],
        start: [, Validators.required],
        end: [, Validators.required],
        conference: ['', Validators.required],
        role: ['', Validators.required],
        participants: [[]]
      }),
      place: this.formBuilder.group({
        id: [],
        postalCode: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        details: ['', Validators.required],
        town: ['', Validators.required]
      })
    });
  }

  generateEditForm(event: Evento, place: Place): FormGroup {
    return this.formBuilder.group({
      event: this.formBuilder.group({
        id: [event.id],
        name: [event.name, Validators.required],
        allowedParticipants: [event.allowedParticipants, Validators.required],
        description: [event.description, Validators.required],
        speakers: [event.speakers, Validators.required],
        start: [event.start, Validators.required],
        end: [event.end, Validators.required],
        conference: [event.conference, Validators.required],
        role: [event.role, Validators.required]
      }),
      place: this.formBuilder.group({
        id: [place.id],
        postalCode: [place.postalCode, Validators.required],
        address: [place.address, Validators.required],
        country: [place.country, Validators.required],
        details: [place.details, Validators.required],
        town: [place.town, Validators.required]
      })
    });
  }
}
