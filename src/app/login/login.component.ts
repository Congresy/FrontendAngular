import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {catchError} from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  postLogin(user: HTMLInputElement, pass: HTMLInputElement) {
    const body = {
      'username': user.value,
      'password': pass.value
    };
    console.log(body);
    this.http.post('https://congresy.herokuapp.com/login', body, httpOptions).subscribe(data => console.log(data));
  }
}
