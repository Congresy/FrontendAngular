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
  }

  ngOnInit() {
    this.initialize();
  }

  delete(id: string) {
    this.userService.delete(id).subscribe(() =>
      this.initialize()
      , error => console.log(error));
  }

  initialize() {
    this.userService.getUsers().subscribe(data => {
      this.actors = data;
    });
    this.userService.getBannedUsers().subscribe(data => {
      for (const actor of data) {
        this.actors.push(actor);
      }
    }, error => console.log(error));
  }

  isBanned(actor: Actor): boolean { return actor.banned; }

  ban(id: string, action: string) {
    this.userService.ban(id, action).subscribe(data => {
      console.log(data);
      for (const actor of this.actors) {
        if (actor.id === id) {
          actor.banned = !actor.banned;
        }
      }
    }, error => console.log(error));
  }
}
