import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  username: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  photo: string;
  role: string;
  roles: String[] = ['User', 'Organizator'];
  constructor(private http: HttpClient, private userService: UsersService) {
  }

  ngOnInit() {
  }

  postUser() {
    const body = {
      userAccount: {
        username: this.username, password: this.password
      },
      actor: {
        name: this.name, surname: this.surname, email: this.email,
        photo: this.photo, phone: this.phone, role: this.role
      }
    };
    this.userService.registerUser(body);
  }
}

