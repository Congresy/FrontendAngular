import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../models/Comment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const urlBase = 'https://congresy.herokuapp.com/comments';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(urlBase, httpOptions);
  }

  getItemComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(urlBase + '/commentable/' + id, httpOptions);
  }

  delete(id: string) {
    return this.http.delete<Comment[]>(urlBase + '/' + id);
  }

  create(comment: Comment) {
    comment.author = sessionStorage.getItem('userId');
    comment.responses = [];
    comment.thumbsDown = 0;
    comment.thumbsUp = 0;
    const date = new Date();
    comment.sentMoment = date.toLocaleDateString('en-GB') + ' ' + (date.getHours() < 10 ? '0' : '').toString() + date.getHours()
      + ':' + (date.getMinutes() < 10 ? '0' : '').toString() + date.getMinutes();
    console.log(comment);
    return this.http.post<Comment>(urlBase + '/' + comment.commentable + '/' + comment.author, comment, httpOptions);
  }
}
