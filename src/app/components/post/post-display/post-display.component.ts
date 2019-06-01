import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/Post';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../models/Comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  post: Post;
  comments: Comment[] = [];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute,
    private commentService: CommentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getOneById(params['id']).subscribe(post => this.post = post);
    });
  }

  getComments() {
    for (const commentId of this.post.comments) {
      this.commentService.getItemComments(commentId).subscribe(data => {
        this.comments = data;
      });
    }
  }

  isOwn(author: string): boolean {
    if (author === sessionStorage.getItem('userId')) {
      return true;
    } else {
      return false;
    }
  }

}
