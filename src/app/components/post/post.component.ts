import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(posts => {
      const res = posts;
      for (const post of res) {
        const index = res.indexOf(post);
        if (post.authorName === '** Not published yet **') {
          if (index !== -1) {
            res.splice(index, 1);
          }
        }
      }
      this.posts = res;
    }, error => console.log(error));
  }

  delete(id: string) {
    this.postService.delete(id).subscribe(data => {
      for (const post of this.posts) {
        const index = this.posts.indexOf(post);
        if (post.id === id) {
          if (index !== -1) {
            this.posts.splice(index, 1);
          }
        }
      }
    }, error => console.log(error));
  }

  like(id: string) {
    this.postService.like(id).subscribe(data => {
      for (const post of this.posts) {
        if (post.id === id) {
          post.votes = post.votes + 1;
        }
      }
    },
      error => console.log(error));
  }
  unlike(id: string) {
    this.postService.like(id).subscribe(data => {
      for (const post of this.posts) {
        if (post.id === id) {
          post.votes = post.votes - 1;
        }
      }
    },
      error => console.log(error));
  }
}
