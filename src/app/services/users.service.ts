import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { ConferenceService } from './conference.service';
import { Actor } from '../models/Actor';
import { UserAccount } from '../models/UserAccount';
import { ActorWrapper } from '../models/ActorWrapper';

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
        this.getUser(username).subscribe(data => sessionStorage.setItem('userId', data.id));
        localStorage.setItem('user', username);
    }

    getUsers(): Observable<Actor[]> {
        return this.http.get<Actor[]>(this.base_url, { headers: this.httpOptions.headers })
            .pipe(
                tap(users => this.log(`fetched users`)),
                catchError(this.handleError('getUsers', []))
            );
    }

    getBannedUsers(): Observable<Actor[]> {
        return this.http.get<Actor[]>(this.base_url + 'banned', this.httpOptions);
    }

    delete(id: string) {
        return this.http.delete(this.base_url + id);
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

    getOneById(id: string): Observable<Actor> {
        return this.http.get<Actor>(this.base_url + id, this.httpOptions);
    }

    getUserAccount(username: string): Observable<UserAccount> {
        return this.http.get<UserAccount>(this.base_url + 'userAccount/' + username, this.httpOptions);
    }

    update(id: string, actor: ActorWrapper): Observable<Actor> {
        return this.http.put<Actor>(this.base_url + id, actor, this.httpOptions);
    }

    ban(id: string, action: string): Observable<Actor> {
        return this.http.put<Actor>(this.base_url + 'ban/' + id + '?action=' + action, this.httpOptions);
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
    photo: string;
}

