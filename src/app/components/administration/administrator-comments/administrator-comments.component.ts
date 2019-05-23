import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/Comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-administrator-comments',
  templateUrl: './administrator-comments.component.html',
  styleUrls: ['./administrator-comments.component.css']
})
export class AdministratorCommentsComponent implements OnInit {

  comments: Comment[] = [];
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getAll().subscribe(data => this.comments = data);
  }

}
