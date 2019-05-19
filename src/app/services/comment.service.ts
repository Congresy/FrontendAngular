import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../models/Comment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const urlBase = 'https://congresy.herokuapp.com/comments';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comment> {
    return this.http.get<Comment>(urlBase, httpOptions);
  }
}
