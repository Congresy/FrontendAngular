import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../models/Evento';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-administrator-events',
  templateUrl: './administrator-events.component.html',
  styleUrls: ['./administrator-events.component.css']
})
export class AdministratorEventsComponent implements OnInit {

  events: Evento[] = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(data => this.events = data);
  }

}
