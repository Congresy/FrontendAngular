import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConferenceService } from '../../../services/conference.service';
import { PlaceService } from '../../../services/place.service';
import { Conferencia } from '../../../models/Conferencia';
import { UsersService } from '../../../services/users.service';
import { Actor } from '../../../models/Actor';

@Component({
  selector: 'app-conferencia-form',
  templateUrl: './conferencia-form.component.html',
  styleUrls: ['./conferencia-form.component.css'],
  providers: [PlaceService]
})
export class ConferenciaFormComponent implements OnInit {
  conferenceForm: FormGroup;
  conference_id: String;
  speakers: Actor[] = [];
  constructor(fb: FormBuilder, private conferenciaService: ConferenceService,
    private placeService: PlaceService, private userService: UsersService) {
    this.conferenceForm = this.conferenciaService.generateForm();
  }

  ngOnInit() {
    this.initializeSpeakers();
  }

  onSubmit() {
    console.log(this.conferenceForm.get('conference').value);
    this.conferenciaService.create(this.conferenceForm.get('conference').value).subscribe(res => {
      this.placeService.create(this.conferenceForm.get('place').value, res.id).subscribe(place => {
        console.log('Place: ' + place);
        this.conferenciaService.update(res).subscribe(conf => console.log('Conference: ' + conf));
      });
    });
  }

  initializeSpeakers() {
    this.userService.getUsers().subscribe(data => {
      for (const actor of data) {
        if (actor.role === 'Speaker') {
          this.speakers.push(actor);
        }

      }
    });
  }

}
