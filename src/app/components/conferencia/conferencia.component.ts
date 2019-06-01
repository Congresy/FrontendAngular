///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ConferenceService } from '../../services/conference.service';
import { Conferencia } from '../../models/Conferencia';
import { Place } from '../../models/Place';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/Comment';
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
  comments: Comment[];
  participants: String[];
  participantArray: Actor[] = [];
  speakers: string[];
  constructor(public conferenciaService: ConferenceService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer,
    private commentService: CommentService, private userService: UsersService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.conferenciaService.getConf(this.id).subscribe(async data => {
      this.conferencia = data;
      for (const participant of data.participants) {
        this.userService.getOneById(participant).subscribe(parti => {
          this.participantArray.push(parti);
        });
      } if (data.speakersNames !== null) {
        this.speakers = data.speakersNames.split(',');
      }
      this.participants = data.participants;
      await sleep(4000);
      this.own = sessionStorage.getItem('userId') === this.conferencia.organizator;
      console.log(this.own);
      this.conferenciaService.getPlace(data.place).subscribe(place => {
        this.place = place;
        console.log(place);
      });
    });
    this.commentService.getItemComments(this.id).subscribe(res => {
      this.comments = res;
      for (const comment of res) {
        const index = res.indexOf(comment);
        if (comment.text === '** Comment deleted **') {
          if (index !== -1) {
            res.splice(index, 1);
          }
        }
      }
      this.comments = res;
    }, error => console.log(error));
  }

  participar() {
    this.conferenciaService.participar(sessionStorage.getItem('userId'), this.id).subscribe(
      conferencia => { this.conferencia = conferencia; }
    );
  }

  canParticipate(): boolean {

    if (this.conferencia !== undefined) {
      return !this.participants.includes(sessionStorage.getItem('userId'))
        && this.conferencia.allowedParticipants - this.conferencia.seatsLeft > 0;
    } else {
      this.canParticipate();
    }
  }
  getGoogleURL() {
    if (this.place.address !== undefined) {
      return this.sanitizer
        .bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyD98Q94QW9WHOR5L-pbGY-EcZCAkoyLRHE&q=' +
          this.place.address.replace('C/', '') + ',' + this.place.town + ',' + this.place.country);
    } else {
      this.getGoogleURL();
    }
  }

}
function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}
