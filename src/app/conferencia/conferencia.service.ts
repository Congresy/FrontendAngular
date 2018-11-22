import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ConferenciaService {

  private conferencesUrl = 'https://congresy.herokuapp.com/conferences';
  private createConferenceUrl = 'https://congresy.herokuapp.com/conferences';
  private organizatorUrl = 'https://congresy.herokuapp.com/actors/';
  private placeUrl = 'https://congresy.herokuapp.com/places/';
  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Array<Conferencia>> {
    return this.http.get<Conferencia[]>(this.conferencesUrl, { headers: httpOptions.headers })
      .pipe(
        tap(conferences => this.log(`fetched conferences`)),
        catchError(this.handleError('getConferences', []))
      );
  }
  getOrganizator(id: string): Observable<Organizator> {
    const url = this.organizatorUrl + id;
    return this.http.get<Organizator>(url).pipe(
      tap(_ => this.log(`fetched Organizator id=${id}`)),
      catchError(this.handleError<Organizator>(`getOrganizator id=${id}`))
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
      'name': conference.name,
      'organizator': conference.organizator,
      'theme': conference.theme,
      'allowedParticipants': conference.allowedParticipants,
      'price': Number(conference.price),
      'start': conference.start,
      'end': conference.end,
      'speakersNames': conference.speakersNames
    };
    console.log(conf);
    return this.http.post<Conferencia>(this.createConferenceUrl, conference, httpOptions).pipe(
      tap((confe: Conferencia) => this.log(`added Conference w/ id=${confe.id}`)),
      catchError(this.handleError<Conferencia>('createConference'))
    );
  }

  deleteConf(id: string){
    return this.http.delete(this.conferencesUrl+"/"+id);
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

export interface Conferencia {
  name: string;
  theme: string;
  comments: Array<string>;
  organizator: string;
  price: number;
  popularity: number;
  allowedParticipants: number;
  description: string;
  speakersNames: string;
  start: string;
  end: string;
  id: string;
  place: string;
}

export interface Place {
  address: string;
  country: string;
  details: string;
  id: string;
  postalCode: string;
  town: string;
}

export interface Organizator {
  name: string;
  surname: string;
}
