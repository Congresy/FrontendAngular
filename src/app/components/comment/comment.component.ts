import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() id: string;
  comment: Comment;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getOneById(this.id).subscribe(comment => this.comment = comment);
  }

}
