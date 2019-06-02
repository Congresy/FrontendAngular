import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../../../models/Conferencia';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-asistire-conferencias',
  templateUrl: './asistire-conferencias.component.html',
  styleUrls: ['./asistire-conferencias.component.css']
})
export class AsistireConferenciasComponent implements OnInit {

  conferencias: Conferencia[] = [];
  constructor(private conferenciaService: ConferenceService) { }

  ngOnInit() {
    this.getOwn();
  }

  getOwn() {
    this.conferenciaService.getAll().subscribe(conferencias =>
      this.conferencias = conferencias.filter(conferencia => conferencia.participants.includes(sessionStorage.getItem('userId'))));
  }

}
