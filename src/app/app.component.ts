import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from './conferencia/conferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    public conferenciaService: ConferenciaService
  ) {
  }
  ngOnInit() {
  }

}
