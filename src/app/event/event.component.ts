import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  //GET /events/all/conferences/{idConference}
  @Input() conf: string;
  eventos: any[];
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any[]>('https://congresy.herokuapp.com/events/all/conferences/' + this.conf, { headers: httpOptions.headers })
    .subscribe(data => this.eventos = data);
  }

}
