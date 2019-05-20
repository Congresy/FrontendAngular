import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Evento } from '../../../models/Evento';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  evento: Evento;
  id: string;
  comments: Comment[];
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute,
    private commentService: CommentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventService.getOneById(params['id']).subscribe(data => this.evento = data);
    });
    this.commentService.getItemComments(this.id).subscribe(data => this.comments = data, error => console.log(error));
  }


}
