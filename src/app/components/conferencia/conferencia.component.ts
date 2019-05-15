///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ConferenceService } from '../../services/conference.service';
import { Conferencia } from '../../models/Conferencia';
import { Place } from '../../models/Place';
import { Actor } from '../../models/Actor';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-conference-simple',
  templateUrl: './conferencia-simple.component.html',
  styleUrls: ['./conferencia.component.css'],
  providers: [ConferenceService]
})
export class ConferenciaComponent implements OnInit {
  role: string;
  conferencias: Conferencia[] = [];
  id: string;
  own: boolean;
  @Input() conferencia: JSON;
  constructor(public router: Router, private conferenciaService: ConferenceService
    , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.route.params.subscribe(params => {
      if (params['own'] === 'own') {
        this.own = true;
        this.conferenciaService.getUserId();
        this.getMyConfs();
      } else {
        this.getConferencias();
      }
    });
  }

  getMyConfs() {
    this.conferenciaService.fetchMyConferences(sessionStorage.getItem('userId')).subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.conferencias.push(data[i]);
      }
      for (let _i = 0; _i < this.conferencias.length; _i++) {
        this.conferenciaService.getOrganizator(this.conferencias[_i].organizator)
          .subscribe(organizator => this.conferencias[_i].organizator = organizator.name + ' ' + organizator.surname);
      }
    });
  }

  getConferencias(): void {
    this.conferenciaService.getAll()
      .subscribe(conferencias => {
        for (let _i = 0; _i < conferencias.length; _i++) {
          this.conferenciaService.getOrganizator(conferencias[_i].organizator)
            .subscribe(data => conferencias[_i].organizator = data.name + ' ' + data.surname);
        }
        this.conferencias = conferencias;
      });
  }

  delete(id: string) {
    this.conferenciaService.delete(id).subscribe(res => this.ngOnInit());
    this.conferencias = [];
    // this.router.navigate(["/conferencias"]);
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
  own: boolean;
  constructor(public conferenciaService: ConferenceService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.conferenciaService.getConf(this.id).subscribe(async data => {
      this.conferencia = data;
      await sleep(4000);
      this.own = sessionStorage.getItem('userId') === this.conferencia.organizator;
      console.log(this.own);
      this.conferenciaService.getPlace(data.place).subscribe(place => {
        this.place = place;
        console.log(place);
      });
    });
  }

  getGoogleURL() {
    console.log(this.place.address.replace('C/', '').replace(' ', '+') + ',' + this.place.town + ',' + this.place.country);
    return this.sanitizer
      .bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyD98Q94QW9WHOR5L-pbGY-EcZCAkoyLRHE&q=' +
        this.place.address.replace('C/', '') + ',' + this.place.town + ',' + this.place.country);
  }

}
function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}
