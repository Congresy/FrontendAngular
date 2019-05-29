import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConferenceService } from '../../services/conference.service';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Component({
  selector: 'app-list-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [ConferenceService, EventService]
})
export class EventComponent implements OnInit {

  // GET /events/all/conferences/{idConference}
  @Input() conf: string;
  @Input() own: boolean;
  eventos: any[];
  constructor(private http: HttpClient, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('https://congresy.herokuapp.com/events/all/conferences/' + this.conf, { headers: httpOptions.headers })
      .subscribe(data => this.eventos = data);
    console.log('Conferencia' + this.conf);
  }

  unirse(idEvento: string) {
    this.eventService.joinEvent(idEvento);
  }
  navigateCreate() {
    this.router.navigate(['/event-create', this.conf]);
  }

  imParticipant(participants: Array<string>) {
    return participants.includes(sessionStorage.getItem('userId'));
  }
}

