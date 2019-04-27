import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { ConferenceService } from './conference.service';

@Injectable()
export class UsersService {
    role$ = new Subject<string>();
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    role = '';
    user: JSON;
    base_url = 'https://congresy.herokuapp.com/actors/';

    constructor(private http: HttpClient, private cs: ConferenceService) { }

    // REGISTRAR USUARIO
    registerUser(body) {
        this.http.post(this.base_url, body, this.httpOptions).subscribe(response => console.log('BIEN'),
            error => console.log(error));
    }

    // LOGIN
    login(username, password) {
        this.http.post('https://congresy.herokuapp.com/login?username=' + username + '&password=' + password,
            {}, this.httpOptions).subscribe(response => { console.log('BIEN'); },
                error => {
                    this.getUser(username).subscribe(user => this.role$.next(user.role));
                });
        localStorage.setItem('user', username);
    }

    getUsers(): Observable<Array<any>> {
        return this.http.get<any[]>(this.base_url, { headers: this.httpOptions.headers })
            .pipe(
                tap(users => this.log(`fetched users`)),
                catchError(this.handleError('getUsers', []))
            );
    }
    /* getRole(username: string){
       this.http.get('https://congresy.herokuapp.com/actors/username/'+username).subscribe(
         data=>{this.role = data.role},
         error=>console.log(error));
     }*/

    // GET USER
    getUser(name: string): Observable<User> {
        const url = 'https://congresy.herokuapp.com/actors/username/' + name;
        return this.http.get<any>(url).pipe(
            tap(data => this.log(`fetched user id=${name}`)),
            catchError(this.handleError<any>(`getUser id=${name}`))
        );
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
export interface User {
    name: string;
    surname: string;
    email: string;
    phone: string;
    id: string;
    role: string;
}

