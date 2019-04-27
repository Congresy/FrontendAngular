import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conferencia } from '../models/Conferencia';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Actor } from '../models/Actor';
import { Place } from '../models/Place';
import { of } from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ConferenceService {
  conferencias: Conferencia[];
  id: string;

  // del antiguo servicio
  private conferencesUrl = 'https://congresy.herokuapp.com/conferences';
  private createConferenceUrl = 'https://congresy.herokuapp.com/conferences';
  private organizatorUrl = 'https://congresy.herokuapp.com/actors/';
  private placeUrl = 'https://congresy.herokuapp.com/places/';
  constructor(private http: HttpClient) { }

  getMyConferences(id: string): Conferencia[] {
    this.http.get('https://congresy.herokuapp.com/conferences/own/' + id + '?value=upcoming')
      .subscribe(data => {
        console.log(data);
      });
    return this.conferencias;
  }

  getUserId(): string {
    this.http.get('https://congresy.herokuapp.com/actors/search/' + localStorage.getItem('user'),
      { headers: httpOptions.headers }).subscribe(data => {
        this.id = data[0].id;
        sessionStorage.setItem('userId', data[0].id);
      });
    return this.id;
  }

  joinEvent(idEvent: string) {
    this.getUserId();
    console.log(this.id);
    this.http.put('https://congresy.herokuapp.com/events/add/' + idEvent + '/participants/' + this.id,
      { headers: 'Accept: application/json' }).subscribe();
  }

  // del antiguo servicio

  getConferencias(): Observable<Array<Conferencia>> {
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
    return this.http.get<any>(this.placeUrl + id, { headers: new HttpHeaders({ 'Accept': 'application/json' }) })
      .pipe(
        tap(places => this.log(`fetched place`)),
        catchError(this.handleError('getPlaces', []))
      );
  }

  // TODO eliminar objeto conferencia
  createConference(conference: Conferencia): Observable<Conferencia> {
    const conf = {
      'name': conference.$name,
      'organizator': conference.$organizator,
      'theme': conference.$theme,
      'allowedParticipants': conference.$allowedParticipants,
      'price': Number(conference.$price),
      'start': conference.$start,
      'end': conference.$end,
      'speakersNames': conference.$speakersNames
    };
    console.log(conf);
    return this.http.post<Conferencia>(this.createConferenceUrl, conference, httpOptions).pipe(
      tap((confe: Conferencia) => this.log(`added Conference w/ id=${confe.$id}`)),
      catchError(this.handleError<Conferencia>('createConference'))
    );
  }

  deleteConf(id: string) {
    return this.http.delete(this.conferencesUrl + '/' + id);
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


