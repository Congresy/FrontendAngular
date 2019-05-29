import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Evento } from '../../../models/Evento';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../models/Comment';
import { Conferencia } from '../../../models/Conferencia';
import { ConferenceService } from '../../../services/conference.service';
import { Actor } from '../../../models/Actor';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  evento: Evento;
  id: string;
  comments: Comment[];
  conference: Conferencia;
  participants: Actor[] = [];
  speakers: Actor[] = [];
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute,
    private commentService: CommentService, private conferenciaService: ConferenceService,
    private userService: UsersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventService.getOneById(params['id']).subscribe(data => {
        this.evento = data;
        for (const participant of data.participants) {
          this.userService.getOneById(participant).subscribe(parti => this.participants.push(parti));
        } if (data.speakers !== null) {
          for (const speaker of data.speakers) {
            this.userService.getOneById(speaker).subscribe(speak => this.speakers.push(speak));
          }
        }
        setTimeout(() => this.conferenciaService.getConf(data.conference).subscribe(conf => this.conference = conf), 2000);

      });
    });
    this.getParticipants();
    this.commentService.getItemComments(this.id).subscribe(data => this.comments = data, error => console.log(error));
  }
  isOwn() {
    return this.conference.organizator === sessionStorage.getItem('userId');
  }
  getParticipants() {

  }


}
