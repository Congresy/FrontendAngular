import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';
import { UsersService } from '../../services/users.service';
import { Actor } from '../../models/Actor';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() id: string;
  comment: Comment;
  author: Actor;
  constructor(private commentService: CommentService, private userService: UsersService) { }

  ngOnInit() {
    this.commentService.getOneById(this.id).subscribe(comment => {
    this.comment = comment;
      this.userService.getOneById(comment.author).subscribe(author => this.author = author);
    });

  }

}
