import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Evento } from '../../../models/Evento';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  evento: Evento;
  id: string;
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventService.getOneById(params['id']).subscribe(data => this.evento = data);
    });
  }

}
