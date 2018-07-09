import {Component, Input, OnInit} from '@angular/core';
import {Conferencia, ConferenciaService} from './conferencia.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent {

  @Input() conferencia: Conferencia;
  constructor(
  ) {
  }
}
