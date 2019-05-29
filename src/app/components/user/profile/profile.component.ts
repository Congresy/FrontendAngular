import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  user: any;

  constructor(private http: HttpClient, private userService: UsersService) {
  }
  ngOnInit() {
    this.user = this.userService.getUser(localStorage.getItem('user')).subscribe(data => this.user = data);
  }
}
