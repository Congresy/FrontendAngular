import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
const urlBase = 'https://congresy.herokuapp.com/posts';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(urlBase, httpOptions);
  }

  getOneById(id: string): Observable<Post> {
    return this.http.get<Post>(urlBase + '/' + id, httpOptions);
  }

  create(post: Post): Observable<Post> {
    const res: Post = post;
    post.authorId = sessionStorage.getItem('userId');
    const date = new Date();
    post.posted = date.toLocaleDateString('en-GB') + ' ' + (date.getHours() < 10 ? '0' : '').toString() + date.getHours()
      + ':' + (date.getMinutes() < 10 ? '0' : '').toString() + date.getMinutes();
    post.views = 0;
    post.comments = [];
    post.draft = false;
    post.authorName = '';
    post.votes = 0;
    console.log(res);

    return this.http.post<Post>(urlBase, res, httpOptions);
  }

  edit(post: Post): Observable<Post> {
    return this.http.put<Post>(urlBase + '/' + post.id, post, httpOptions);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(urlBase + '/' + id);
  }

  public(id: string): Observable<Post> {
    return this.http.put<Post>(urlBase + '/public/' + id, httpOptions);
  }

  like(id: string): Observable<Post> {
    return this.http.put<Post>(urlBase + '/votes/' + id + '?action=add', httpOptions);
  }

  unlike(id: string): Observable<Post> {
    return this.http.put<Post>(urlBase + '/votes/' + id + '?action=delete', httpOptions);
  }

  search(keyword: string): Observable<Post[]> {
    return this.http.get<Post[]>(urlBase + '/search/' + keyword, httpOptions);
  }
}
