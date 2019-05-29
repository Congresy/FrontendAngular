import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Banner } from '../models/Banner';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const urlBase = 'https://congresy.herokuapp.com/announcements';

@Injectable()
export class BannerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(urlBase, httpOptions);
  }

  getOneById(id: string): Observable<Banner> {
    return this.http.get<Banner>(urlBase + '/' + id, httpOptions);
  }

  create(banner: Banner): Observable<Banner> {
    return this.http.post<Banner>(urlBase, banner, httpOptions);
  }

  update(banner: Banner): Observable<Banner> {
    return this.http.post<Banner>(urlBase, banner, httpOptions);
  }

  delete(id: string): Observable<Banner> {
    return this.http.delete<Banner>(urlBase + '/' + id);
  }
}
