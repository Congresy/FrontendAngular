///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ConferenceService } from '../../services/conference.service';
import { Conferencia } from '../../models/Conferencia';
import { Place } from '../../models/Place';

@Component({
  selector: 'app-conference-simple',
  templateUrl: './conferencia-simple.component.html',
  styleUrls: ['./conferencia.component.css'],
  providers: [ConferenceService]
})
export class ConferenciaComponent implements OnInit {
  role: string;
  conferencias: Conferencia[];
  id: string;
  @Input() conferencia: JSON;
  constructor(public router: Router, private cs: ConferenceService
    , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.route.params.subscribe(params => {
      if (params['own'] === 'own') {
        this.cs.getUserId();
        this.getMyConfs();
      } else {
        this.getConferencias();
      }
    });
    console.log(this.conferencias);
  }

  getMyConfs() {
    this.conferencias = this.cs.getMyConferences(sessionStorage.getItem('userId'));
  }

  getConferencias(): void {
    this.cs.getConferencias()
      .subscribe(conferencias => {
        for (let _i = 0; _i < conferencias.length; _i++) {
          this.cs.getOrganizator(conferencias[_i].$organizator)
            .subscribe(data => conferencias[_i].$organizator = data.$name + ' ' + data.$surname);
        }
        this.conferencias = conferencias;
      });
  }

  viewConf(conferencia: Conferencia) {
    this.router.navigate(['/conferencia/', conferencia.$id]);
  }

  deleteConf(id: string) {
    this.cs.deleteConf(id).subscribe(res => this.ngOnInit());
    // this.router.navigate(["/conferencias"]);
  }

  test() {
    this.cs.getUserId();
  }
}


@Component({
  selector: 'app-conference-create',
  templateUrl: './create-conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class CreateConferenciaComponent {
  constructor(
    private conferenciaService: ConferenceService, private router: Router
  ) {
  }
  crearConferencia(conferencia) {
    this.conferenciaService.createConference(conferencia).subscribe(data => {
      console.log(data);
      this.router.navigate(['/conferencias',]);
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
  constructor(public conferenciaService: ConferenceService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.conferenciaService.getConf(this.id).subscribe(data => {
      this.conferencia = data;
      this.conferenciaService.getPlace(data.$place).subscribe(data => this.place = data);
    });

  }

  getGoogleURL() {
    console.log(this.place.$address.replace('C/', '').replace(' ', '+') + ',' + this.place.$town + ',' + this.place.$country);
    return this.sanitizer
      .bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyD98Q94QW9WHOR5L-pbGY-EcZCAkoyLRHE&q=' +
        this.place.$address.replace('C/', '') + ',' + this.place.$town + ',' + this.place.$country);
  }
}
