import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private userService: UsersService) { 
  }

  ngOnInit() {
  }

}
