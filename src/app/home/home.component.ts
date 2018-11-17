import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role = "";
  constructor(private userService: UsersService) { 
    this.userService.getUser(localStorage.getItem("user")).subscribe(data => this.role = data["role"]);
    sessionStorage.setItem("role", this.role);
  }

  ngOnInit() {
  }

}
