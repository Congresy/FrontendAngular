import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {catchError} from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text' })};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  postLogin() {
    this.http.post('https://congresy.herokuapp.com/login?username=' + this.username + '&password=' + this.password,
     {}, httpOptions).subscribe(data => console.log(data),
    error => console.log(error));
  }
}
