///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {ConferenciaService} from './conferencia.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent {

  @Input() conferencia: JSON;
  constructor(
  ) {
  }
}

@Component({
  selector: 'app-conference-create',
  templateUrl: './create-conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class CreateConferenciaComponent {
  constructor(
    public conferenciaService: ConferenciaService
  ) {
  }
  // crearConferencia(conferencia) {
  //   console.log(conferencia);
  //   this.conferenciaService.createConference(conferencia).subscribe(data => console.log(data));
  // }
}
