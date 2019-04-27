import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: string;
  constructor(private userService: UsersService) {
    this.role = sessionStorage.getItem('role');
  }

  ngOnInit() {
    this.userService.role$.asObservable().subscribe(data => this.role = data);
  }

}
