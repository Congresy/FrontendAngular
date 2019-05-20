import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post_id = '';
  postForm: FormGroup;
  post: Post;

  constructor(private formBuilder: FormBuilder, private postService: PostService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.post_id = params['id'], error => console.log(error));
    if (this.post_id === undefined) {
      this.postForm = this.formBuilder.group({
        post: this.formBuilder.group({
          title: ['', Validators.required],
          body: ['', Validators.required],
          category: ['', Validators.required]
        })
      });
    } else {
      console.log(this.post_id);
      this.postService.getOneById(this.post_id).subscribe(post => {
        this.post = post;
        this.postForm = this.formBuilder.group({
          post: this.formBuilder.group({
            title: [this.post.title, Validators.required],
            body: [this.post.body, Validators.required],
            category: [this.post.category, Validators.required]
          })
        });
      }, error => console.log(error));
    }
  }
  onSubmit() {
    console.log(this.postForm.value);
    if (this.post_id === undefined) {
      this.create(this.postForm.get('post').value);
    } else {
      this.update();
    }
  }

  create(post: Post) {
    let id = '';
    this.postService.create(post).subscribe(data => {
      console.log(data);
      id = data.id;
    }
      , error => console.log(error));
    setTimeout(() => this.postService.public(id).subscribe(res => console.log(res), error => console.log(error)), 2000);
  }

  update() {
    this.post.category = this.postForm.get('post').get('category').value;
    this.post.title = this.postForm.get('post').get('title').value;
    this.post.body = this.postForm.get('post').get('body').value;
    this.postService.edit(this.post).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigateByUrl('/post-list');
  }

}
