import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConferenceService } from '../../services/conference.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Component({
  selector: 'app-list-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [ConferenceService]
})
export class EventComponent implements OnInit {

  // GET /events/all/conferences/{idConference}
  @Input() conf: string;
  eventos: any[];
  constructor(private http: HttpClient, private cs: ConferenceService) { }

  ngOnInit() {

    this.http.get<any[]>('https://congresy.herokuapp.com/events/all/conferences/' + this.conf, { headers: httpOptions.headers })
      .subscribe(data => this.eventos = data);
  }

  unirse(idEvento: string) {
    this.cs.joinEvent(idEvento);
  }

}

