import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ConferenciaService {

  private conferencesUrl = 'https://congresy.herokuapp.com/conferences/detailed?order=name';
  private createConferenceUrl = 'https://congresy.herokuapp.com/conferences';
  private organizatorUrl = 'https://congresy.herokuapp.com/actors/';
  constructor (private http: HttpClient) {}

  getConferencias(): Observable<Array<JSON>> {
    return this.http.get<JSON[]>(this.conferencesUrl, {headers: httpOptions.headers})
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
// TODO eliminar objeto conferencia
//  createConference (conference: Conferencia): Observable<Conferencia> {
//     const conf = {
//       'name': conference.name,
//       'organizator': conference.organizator,
//       'theme': conference.theme,
//       'allowedParticipants': conference.allowedParticipants,
//       'price': Number(conference.price),
//       'start': conference.start,
//       'end': conference.end,
//       'speakersNames': conference.speakersNames
//     };
//     console.log(conf);
//     return this.http.post<Conferencia>(this.createConferenceUrl, conference, httpOptions).pipe(
//       tap((confe: Conferencia) => this.log(`added Conference w/ id=${confe.id}`)),
//       catchError(this.handleError<Conferencia>('createConference'))
//     );
//   }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ConferenceService: ' + message);
  }
}

// export interface Conferencia {
//   name: string;
//   theme: string;
//   comments: Array<string>;
//   organizator: string;
//   price: number;
//   popularity: number;
//   allowedParticipants: number;
//   description: string;
//   speakersNames: string;
//   start: string;
//   end: string;
//   id: string;
// }

export interface Organizator {
  name: string;
}
