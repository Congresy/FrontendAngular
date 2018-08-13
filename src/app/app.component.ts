import { Component, OnInit } from '@angular/core';
import {ConferenciaService} from './conferencia/conferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  conferencias: JSON[];
  constructor(
    public conferenciaService: ConferenciaService
  ) {
  }
  ngOnInit() {
      this.getConferencias();
    }

  getConferencias(): void {
    this.conferenciaService.getConferencias()
      .subscribe(data => {
        for (let _i = 0; _i < data.length; _i++) {
          this.conferenciaService.getOrganizator(data[_i]['organizator']).subscribe(conf => data[_i]['organizator'] = conf.name);
        }
        this.conferencias = data;
      });
  }


}
