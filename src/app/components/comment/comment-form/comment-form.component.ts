import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../../models/Comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;
  comment: Comment = new Comment;
  @Input() id: string;

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: this.formBuilder.group({
        title: ['', Validators.required],
        text: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    this.create();
  }

  create() {
    this.comment.commentable = this.id;
    this.comment.title = this.commentForm.get('comment').get('title').value;
    this.comment.text = this.commentForm.get('comment').get('text').value;
    this.commentService.create(this.comment).subscribe(data => console.log(data), error => console.log(error));

  }

}
