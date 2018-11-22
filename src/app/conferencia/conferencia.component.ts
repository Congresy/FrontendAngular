///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Input, OnInit } from '@angular/core';
import { ConferenciaService, Conferencia, Place } from './conferencia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conference-simple',
  templateUrl: './conferencia-simple.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  conferencias: Conferencia[];
  @Input() conferencia: JSON;
  constructor(public conferenciaService: ConferenciaService, public router: Router
  ) {

  }

  ngOnInit() {
    this.getConferencias();
    console.log(this.conferencias)
  }

  getConferencias(): void {
    this.conferenciaService.getConferencias()
      .subscribe(conferencias => {
        for (let _i = 0; _i < conferencias.length; _i++) {
          this.conferenciaService.getOrganizator(conferencias[_i].organizator).subscribe(data => conferencias[_i].organizator = data.name + " " + data.surname);
        }
        this.conferencias = conferencias;
      });
  }

  viewConf(conferencia: Conferencia) {
    this.router.navigate(['/conferencia/', conferencia.id]);
  }

deleteConf(id: string){
  this.conferenciaService.deleteConf(id).subscribe(res => console.log(res));
  console.log("paso por el controlador")
  //this.router.navigate(["/conferencias"]);
  this.ngOnInit();
}
}


@Component({
  selector: 'app-conference-create',
  templateUrl: './create-conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class CreateConferenciaComponent {
  constructor(
    private conferenciaService: ConferenciaService, private router: Router
  ) {
  }
  crearConferencia(conferencia) {
    this.conferenciaService.createConference(conferencia).subscribe(data => {
      console.log(data)
      this.router.navigate(['/conferencias',])
    });
  }
}

@Component({
  selector: 'app-conference-detailed',
  templateUrl: './conferencia-detailed.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaDetailedComponent implements OnInit {
  id: string;
  conferencia: Conferencia;
  place: Place;
  place_id: string;
  constructor(public conferenciaService: ConferenciaService, private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.conferenciaService.getPlace("5b8749296e0e8600040a62bb").subscribe(data => this.place = data);
    this.conferenciaService.getConf(this.id).subscribe(data => {
    this.conferencia = data
      this.place_id = data.place
    });
    console.log("HOLAAAA" + this.conferencia.id)
    this.conferenciaService.getPlace("5b8749296e0e8600040a62bb").subscribe(data => this.place = data);
    console.log("HOLAAAA" + this.place);

  }

}