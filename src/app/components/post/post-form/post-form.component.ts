import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      post: this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
        category: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
    this.create(this.postForm.get('post').value);
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

}
