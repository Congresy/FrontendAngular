import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../../../models/Conferencia';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-administrator-conferences',
  templateUrl: './administrator-conferences.component.html',
  styleUrls: ['./administrator-conferences.component.css']
})
export class AdministratorConferencesComponent implements OnInit {

  conferences: Conferencia[] = [];
  constructor(private conferenciaService: ConferenceService) { }

  ngOnInit() {
    this.conferenciaService.getAll().subscribe(data => this.conferences = data);
  }

}
