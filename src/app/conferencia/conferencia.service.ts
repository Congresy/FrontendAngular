import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ConferenciaService {

  private conferencesUrl = 'https://congresy.herokuapp.com/conferences/detailed?order=name';
  private organizatorUrl = 'https://congresy.herokuapp.com/actors/';
  constructor (private http: HttpClient) {}

  getConferencias(): Observable<Conferencia[]> {
    return this.http.get<Conferencia[]>(this.conferencesUrl, {headers: httpOptions.headers})
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

  // getUser(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.get<User>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<User>(`getUser id=${id}`))
  //   );
  // }

  // addUser (user: User): Observable<User> {
  //   return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
  //     tap((user: User) => this.log(`added User w/ id=${user.id}`)),
  //     catchError(this.handleError<User>('addUser'))
  //   );
  // }

  // deleteUser (id: string): Observable<User> {
  //   const url = `${this.usersUrl}/${id}`;

  //   return this.http.delete<User>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted user id=${id}`)),
  //     catchError(this.handleError<User>('deleteUser'))
  //   );
  // }

  // updateUser (user: User): Observable<null> {
  //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
  //     tap(_ => this.log(`updated user id=${user.id}`)),
  //     catchError(this.handleError<any>('updateUser'))
  //   );
  // }

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

export interface Conferencia {
  name: string;
  theme: string;
  comments: Array<string>;
  organizator: string;
  id: string;
}

export interface Organizator {
  name: string;
}
