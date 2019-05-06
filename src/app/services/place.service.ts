import { Injectable } from '@angular/core';
import { Place } from '../models/Place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable()
export class PlaceService {

  constructor(private http: HttpClient) { }

  create(place: Place, id: String): Observable<Place> {
    return this.http.post<Place>('https://congresy.herokuapp.com/places/' + id, place, httpOptions);
  }
}
