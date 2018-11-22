import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  username: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  photo: string;
  constructor(private http: HttpClient, private userService: UsersService) { 
  }

  ngOnInit() {
  }

  postUser(){
    const body = {
      userAccount: { username: this.username, password: this.password
      },
      actor: { name: this.name, surname: this.surname,email: this.email,
               photo: this.photo, phone: this.phone, role: "User"
      }
    };
    this.userService.registerUser(body);
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./user.component.css']
})
export class ProfileComponent implements OnInit {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  user:any;

  constructor(private http: HttpClient, private userService: UsersService) { 
  }
  ngOnInit() {
    this.user = this.userService.getUser(localStorage.getItem("user")).subscribe(data=>this.user=data);
  }
}
