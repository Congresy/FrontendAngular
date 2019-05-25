import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-administrator-posts',
  templateUrl: './administrator-posts.component.html',
  styleUrls: ['./administrator-posts.component.css']
})
export class AdministratorPostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.initialize();
  }

  delete(id: string) {
    this.postService.delete(id).subscribe(() =>
      this.initialize()
      , error => console.log(error));
  }

  initialize() {
    this.postService.getAll().subscribe(data => this.posts = data);
  }

}
