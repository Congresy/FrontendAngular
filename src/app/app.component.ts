import { Component, OnInit } from '@angular/core';
import {ConferenciaService, Conferencia} from './conferencia/conferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  conferencias: Conferencia[];
  constructor(
    public conferenciaService: ConferenciaService
  ) {
  }
  ngOnInit() {
      this.getConferencias();
    }

  getConferencias(): void {
    this.conferenciaService.getConferencias()
      .subscribe(conferencias => {
        for (let _i = 0; _i < conferencias.length; _i++) {
          this.conferenciaService.getOrganizator(conferencias[_i].organizator).subscribe(data => conferencias[_i].organizator = data.name);
        }
        this.conferencias = conferencias;
      });
  }


}
