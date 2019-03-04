import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../services/users.service';
import { ConferenciaService } from '../conferencia/conferencia.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    confsNum: number;
    usersNum: number;

    constructor(private userService: UsersService, private conferenciaService: ConferenciaService) {
    }

    ngOnInit() {
        this.conferenciaService.getConferencias().subscribe(confs => { this.confsNum = confs.length;
        this.userService.getUsers().subscribe(users => this.usersNum = users.length); });
    }


}
