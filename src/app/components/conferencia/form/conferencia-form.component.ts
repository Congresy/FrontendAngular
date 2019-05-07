import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConferenceService } from '../../../services/conference.service';
import { PlaceService } from '../../../services/place.service';
import { Conferencia } from '../../../models/Conferencia';
import { UsersService } from '../../../services/users.service';
import { Actor } from '../../../models/Actor';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Place } from '../../../models/Place';

@Component({
  selector: 'app-conferencia-form',
  templateUrl: './conferencia-form.component.html',
  styleUrls: ['./conferencia-form.component.css'],
  providers: [PlaceService]
})
export class ConferenciaFormComponent implements OnInit {
  conferenceForm: FormGroup;
  conference_id: string;
  speakers: Actor[] = [];
  conferencia: Conferencia;
  place: Place;
  edit: boolean;
  constructor(fb: FormBuilder, private conferenciaService: ConferenceService,
    private placeService: PlaceService, private userService: UsersService,
    private activatedRoute: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.conference_id = params['id']);
    this.initializeSpeakers();
    if (this.conference_id) {
      this.conferenciaService.getConf(this.conference_id).toPromise().then((conferencia) => {
        this.conferencia = conferencia;
      }).then((conferencia) => {
        this.placeService.getOneById(this.conferencia.place).toPromise().then((place) => {
          this.place = place;
          console.log(this.conferencia.name);
          this.conferenceForm = this.conferenciaService.generateEditForm(this.conferencia, this.place);
        });
      });
    } else {
      this.conferenceForm = this.conferenciaService.generateForm();
    }
  }

  onSubmit() {
    if (this.conferenceForm.get('conference').get('id') === null) {
      console.log('No entra en el else');
      this.createConference();
    } else {
      this.updateConference();
    }


  }

  createConference() {
    this.conferenciaService.create(this.conferenceForm.get('conference').value).subscribe(res => {
      this.placeService.create(this.conferenceForm.get('place').value, res.id).subscribe(place => {
        console.log('Place: ' + place);
        this.conferenciaService.update(res).subscribe(conf => console.log('Conference: ' + conf));
        this.route.navigateByUrl('/conferencia/' + res.id);
      });
    });
  }

  updateConference() {
    this.conferenciaService.update(this.conferenceForm.get('conference').value).subscribe(conferencia => console.log(conferencia));
    this.placeService.update(this.conferenceForm.get('place').value).subscribe(place => console.log(place));
    this.route.navigateByUrl('/conferencia/' + this.conference_id);
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

