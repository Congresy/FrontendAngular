import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConferenceService } from '../../../services/conference.service';
import { PlaceService } from '../../../services/place.service';
import { Conferencia } from '../../../models/Conferencia';
import { UsersService } from '../../../services/users.service';
import { Actor } from '../../../models/Actor';
import { ActivatedRoute, Router } from '@angular/router';
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
  confName = '';
  constructor(private fb: FormBuilder, private conferenciaService: ConferenceService,
    private placeService: PlaceService, private userService: UsersService,
    private activatedRoute: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.conference_id = params['id']);
    this.initializeSpeakers();
    if (this.conference_id) {
      this.conferenciaService.getConf(this.conference_id).subscribe(conferencia => {
        this.conferencia = conferencia;
        this.confName = conferencia.name;
        this.placeService.getOneById(conferencia.place).subscribe(place => {
          this.place = place;
          this.conferenceForm = this.conferenciaService.generateEditForm(this.conferencia, this.place);
          console.log(conferencia.name);
        }, error => console.log(error));
      });

    } else {
      this.conferenceForm = this.conferenciaService.generateForm();
    }
  }

  onSubmit(value: any) {
    console.log("POSIBLE VALOR DEL NOMBRE" + (<HTMLInputElement>document.getElementById('name')).value);
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
    console.log(this.confName);
    const conference = this.conferenceForm.get('conference').value;
    conference.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.conferenciaService.update(conference).subscribe(conferencia => console.log(conferencia));
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

  generateEditForm(conferencia: Conferencia, place: Place) {
    this.conferenceForm = this.fb.group({
      conference: this.fb.group({
        theme: [conferencia.theme, Validators.required],
        price: [conferencia.price, Validators.required],
        allowedParticipants: [conferencia.allowedParticipants, Validators.required],
        description: [conferencia.description, Validators.required],
        speakersNames: ['', Validators.required],
        start: [conferencia.start, Validators.required],
        end: [conferencia.end, Validators.required],
        id: [conferencia.id],
        organizator: [sessionStorage.getItem('userId')],
        name: ['', Validators.required],
      }),
      place: this.fb.group({
        postalCode: [place.postalCode, Validators.required],
        address: [place.address, Validators.required],
        country: [place.country, Validators.required],
        details: [place.details, Validators.required],
        town: [place.town, Validators.required],
        id: [place.id]
      })
    });
    this.conferenceForm.get('conference').get('name').setValue(this.conferencia.name);
  }

}

