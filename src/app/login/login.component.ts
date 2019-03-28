import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text', 'withCredentials': 'true' }) };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  role: string;
  loginForm: FormGroup;
  constructor(private http: HttpClient, private userService: UsersService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  postLogin() {
    this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
    this.userService.getUser(localStorage.getItem('user')).subscribe(data => sessionStorage.setItem('role', data.role));
    this.userService.role$.next(sessionStorage.getItem('role'));
    this.route.navigate(['']);
  }

}
