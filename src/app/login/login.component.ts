import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text', 'withCredentials':'true' })};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  role: string;
  constructor(private http: HttpClient, private userService: UsersService, private route: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
  }

  postLogin(){
    this.userService.login(this.username, this.password);
    this.route.navigate([""]);
  }
  
}
