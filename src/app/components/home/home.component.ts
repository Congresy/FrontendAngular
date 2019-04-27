import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { ConferenceService } from '../../services/conference.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    confsNum: number;
    usersNum: number;
    users: Map<String, String> = new Map();
    constructor(private userService: UsersService, private conferenciaService: ConferenceService) {
    }

    ngOnInit() {
        this.conferenciaService.getConferencias().subscribe(confs => {
            this.confsNum = confs.length;
            this.userService.getUsers().subscribe(users => this.usersNum = users.length);
        });
        this.userService.getUsers().subscribe(data => data.forEach(x => this.users.set(x.id, x.name)));
        console.log('USERS: ' + this.users);
    }
}

