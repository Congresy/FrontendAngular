import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
import { ActorWrapper } from '../../../../models/ActorWrapper';
import { UserAccount } from '../../../../models/UserAccount';
import { Actor } from '../../../../models/Actor';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  @Input() id: string;
  profileForm: FormGroup;
  user: ActorWrapper = new ActorWrapper;
  constructor(private formBuilder: FormBuilder, private userService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.user.actor = new Actor;
    this.user.userAccount = new UserAccount;
    this.userService.getOneById(sessionStorage.getItem('userId')).subscribe(data => {
      this.user.actor = data;
    }, error => console.log(error));
    this.profileForm = this.formBuilder.group({
      email: [, Validators.required],
      phone: [, Validators.required],
      photo: [, Validators.required]
    });
  }

  onSubmit() {
    this.update();
  }

  update() {

    console.log(this.profileForm.value);
    this.user.actor.email = this.profileForm.get('email').value;
    this.user.actor.photo = this.profileForm.get('photo').value;
    this.user.actor.phone = this.profileForm.get('phone').value;
    this.user.actor.conferences = [];
    this.user.actor.followers = [];
    this.user.actor.following = [];
    this.user.actor.events = [];
    this.user.actor.posts = [];
    this.user.actor.friends = [];
    this.user.actor.comments = [];
    this.user.actor.socialNetworks = [];
    this.user.actor.place = '';
    this.userService.getUserAccount(localStorage.getItem('user')).subscribe(data => {
      console.log(data);
      this.user.userAccount = data;
    },
      error => console.log(error));
    console.log(this.user);
    setTimeout(() => this.userService.update(sessionStorage.getItem('userId'), this.user).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('');
    }, error => console.log(error)), 2000);
  }

}
