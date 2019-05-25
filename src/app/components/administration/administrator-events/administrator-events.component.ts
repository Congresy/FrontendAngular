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
    this.initialize();
  }

  delete(id: string) {
    this.eventService.delete(id).subscribe(() =>
      this.initialize()
      , error => console.log(error));
  }

  initialize() {
    this.eventService.getAll().subscribe(data => this.events = data);
  }

}
