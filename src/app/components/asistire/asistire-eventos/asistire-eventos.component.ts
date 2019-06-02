import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Evento } from '../../../models/Evento';

@Component({
  selector: 'app-asistire-eventos',
  templateUrl: './asistire-eventos.component.html',
  styleUrls: ['./asistire-eventos.component.css']
})
export class AsistireEventosComponent implements OnInit {

  eventos: Evento[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getOwn().subscribe(eventos => this.eventos = eventos.sort((a, b) => {
      const dateA = new Date(a.start);
      const dateB = new Date(b.start);
      return dateA.getTime() - dateB.getTime();
    }));
  }

}
