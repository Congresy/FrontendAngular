import { Component, OnInit } from '@angular/core';
import { Actor } from '../../../models/Actor';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-administrator-actors',
  templateUrl: './administrator-actors.component.html',
  styleUrls: ['./administrator-actors.component.css']
})
export class AdministratorActorsComponent implements OnInit {

  actors: Actor[] = [];
  constructor(private userService: UsersService) {

    this.userService.getUsers().subscribe(data => this.actors = data);
  }

  ngOnInit() {
  }

}
