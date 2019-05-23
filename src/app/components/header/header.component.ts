import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: string;
  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.userService.role$.asObservable().subscribe(data => this.role = data);
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.userService.role$.next(sessionStorage.getItem('role'));
    this.router.navigateByUrl('/');
  }
}
