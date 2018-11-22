import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  role$ = new Subject();
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  role = "";
  user: JSON;

  constructor(private http: HttpClient) { }

  //REGISTRAR USUARIO
  registerUser(body){
    this.http.post("https://congresy.herokuapp.com/actors/",body, this.httpOptions).subscribe(response => console.log("BIEN"), 
    error => console.log(error));;
  }

  //LOGIN
  login(username, password){
    this.http.post('https://congresy.herokuapp.com/login?username=' + username + '&password=' + password,
     {}, this.httpOptions).subscribe(response => {console.log("BIEN")}, 
    error => { this.role$.next(this.getUser(username).subscribe())
              });
    localStorage.setItem("user",username);
            
  }

 /* getRole(username: string){
    this.http.get('https://congresy.herokuapp.com/actors/username/'+username).subscribe(
      data=>{this.role = data.role},
      error=>console.log(error));
  }*/

  //GET USER
  getUser(name: string): Observable<User> {
    const url = 'https://congresy.herokuapp.com/actors/username/'+ name;
    return this.http.get<any>(url).pipe(
      tap(data => this.log(`fetched Organizator id=${name}`)),
      catchError(this.handleError<any>(`getOrganizator id=${name}`))
    );
  }

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
export interface User {
  name: string;
  surname: string;
  email: string;
  phone: string;
  id:string;
  role: string;
}

