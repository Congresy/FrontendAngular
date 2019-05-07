import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conferencia } from '../models/Conferencia';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Actor } from '../models/Actor';
import { Place } from '../models/Place';
import { of } from 'rxjs/observable/of';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PlaceService } from './place.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ConferenceService {
  public conferencias: Conferencia[];
  id: string;
  place: Place;

  // del antiguo servicio
  private conferencesUrl = 'https://congresy.herokuapp.com/conferences';
  private createConferenceUrl = 'https://congresy.herokuapp.com/conferences';
  private organizatorUrl = 'https://congresy.herokuapp.com/actors/';
  private placeUrl = 'https://congresy.herokuapp.com/places/';
  constructor(private http: HttpClient, private fb: FormBuilder, private placeService: PlaceService) { }

  fetchMyConferences(id: string) {
    return this.http.get('https://congresy.herokuapp.com/conferences/own/' + id + '?value=upcoming');
  }
  // getMyConferences(id: string): Observable<Object> {
  //   return this.http.get('https://congresy.herokuapp.com/conferences/own/' + id + '?value=upcoming');
  // }

  getUserId(): string {
    this.http.get('https://congresy.herokuapp.com/actors/search/' + localStorage.getItem('user'),
      { headers: httpOptions.headers }).subscribe(data => {
        this.id = data[0].id;
        sessionStorage.setItem('userId', data[0].id);
      });
    return this.id;
  }

  // del antiguo servicio

  getAll(): Observable<Array<Conferencia>> {
    return this.http.get<Conferencia[]>(this.conferencesUrl, { headers: httpOptions.headers })
      .pipe(
        tap(conferences => this.log(`fetched conferences`)),
        catchError(this.handleError('getConferences', []))
      );
  }
  getOrganizator(id: string): Observable<Actor> {
    const url = this.organizatorUrl + id;
    return this.http.get<Actor>(url).pipe(
      tap(_ => this.log(`fetched Organizator id=${id}`)),
      catchError(this.handleError<Actor>(`getOrganizator id=${id}`))
    );
  }

  getConf(id: string): Observable<Conferencia> {
    return this.http.get<any>('https://congresy.herokuapp.com/conferences/detailed/' + id, { headers: httpOptions.headers })
      .pipe(
        tap(conferences => this.log(`fetched conferences`)),
        catchError(this.handleError('getConferences', []))
      );
  }

  getPlace(id: string): Observable<Place> {
    console.log('IDIDID: ' + id);
    return this.http.get<any>(this.placeUrl + id, { headers: new HttpHeaders({ 'Accept': 'application/json' }) })
      .pipe(
        tap(places => this.log(`fetched place`)),
        catchError(this.handleError('getPlaces', []))
      );
  }

  create(conference: Conferencia): Observable<Conferencia> {
    conference.speakersNames = conference.speakersNames.toString();
    conference.seatsLeft = conference.allowedParticipants;
    return this.http.post<Conferencia>(this.createConferenceUrl, conference, httpOptions).pipe(
      tap((confe: Conferencia) => this.log(`added Conference w/ id=${confe.id}`)),
      catchError(this.handleError<Conferencia>('createConference'))
    );
  }

  update(conference: Conferencia): Observable<Conferencia> {
    conference.speakersNames = conference.speakersNames.toString();
    return this.http.put<Conferencia>(this.createConferenceUrl + '/' + conference.id, conference, httpOptions);
  }

  delete(id: string) {
    return this.http.delete(this.conferencesUrl + '/' + id);
  }

  generateForm(): FormGroup {
    return this.fb.group({
      conference: this.fb.group({
        name: ['', Validators.required],
        theme: ['', Validators.required],
        organizator: [sessionStorage.getItem('userId')],
        price: [, Validators.required],
        allowedParticipants: [, Validators.required],
        description: ['', Validators.required],
        speakersNames: ['', Validators.required],
        start: [, Validators.required],
        end: [, Validators.required],
      }),
      place: this.fb.group({
        postalCode: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        details: ['', Validators.required],
        town: ['', Validators.required]
      })
    });
  }

  generateEditForm(conferencia: Conferencia, place: Place): FormGroup {
    return this.fb.group({
      conference: this.fb.group({
        name: [conferencia.name, Validators.required],
        theme: [conferencia.theme, Validators.required],
        price: [conferencia.price, Validators.required],
        allowedParticipants: [conferencia.allowedParticipants, Validators.required],
        description: [conferencia.description, Validators.required],
        speakersNames: ['', Validators.required],
        start: [conferencia.start, Validators.required],
        end: [conferencia.end, Validators.required],
        id: [conferencia.id]
      }),
      place: this.fb.group({
        postalCode: [place.postalCode, Validators.required],
        address: [place.address, Validators.required],
        country: [place.country, Validators.required],
        details: [place.details, Validators.required],
        town: [place.town, Validators.required],
        id: [place.id]
      })
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ConferenceService: ' + message);
  }
}



