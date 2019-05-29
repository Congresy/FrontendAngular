import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../../../models/Evento';
import { PlaceService } from '../../../services/place.service';
import { Place } from '../../../models/Place';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./../event.component.css'],
  providers: [EventService]
})
export class EventFormComponent implements OnInit {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  eventForm: FormGroup;
  roles: String[] = ['Workshop', 'Ordinary', 'Social Event', 'Invitation'];
  evento: Evento;
  evento_id: string;
  new: boolean;
  conf_id = '';
  constructor(private fb: FormBuilder, private dp: DatePipe, private http: HttpClient,
    private eventService: EventService, private activatedRoute: ActivatedRoute,
    private placeService: PlaceService, private router: Router) {

  }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params.subscribe(params => {
        this.evento_id = params['id'];
        this.eventService.getOneById(params['id']).toPromise().then((data) => {
          console.log('data del service: ' + data.place);
          this.placeService.getOneById(data.place).toPromise().then((place) => {
            this.eventForm = this.eventService.generateEditForm(data, place);
          });
        });
      });
    } else if (this.router.url.includes('create')) {
      this.activatedRoute.params.subscribe(data => this.conf_id = data['id']);
      this.new = true;
      this.eventForm = this.eventService.generateForm();
    }
    // this.activatedRoute.params.subscribe(params => {
    //   this.evento_id = params['id'];
    //   console.log(params['id']);
    //   if (params['id']) {
    //     this.eventService.getOneById(params['id']).toPromise().then((data) => {
    //       console.log('data del service: ' + data.place);
    //       this.placeService.getOneById(data.place).toPromise().then((place) => {
    //         this.eventForm = this.eventService.generateEditForm(data, place);
    //       });
    //     });
    //   } else {
    //     this.new = true;
    //     this.eventForm = this.eventService.generateForm();
    //   }
    // });
    console.log(this.evento);
  }

  onSubmit() {
    console.log(this.new);
    if (this.new) {
      this.create();
    } else {
      this.edit();
    }
  }

  create() {
    let evento: Evento;
    let place: Place;
    this.eventForm.get('event').get('start').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('start').value),
      'dd/MM/yyyy hh:mm'));
    this.eventForm.get('event').get('end').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('end').value),
      'dd/MM/yyyy hh:mm'));
    this.eventForm.get('event').get('conference').setValue(this.conf_id);
    console.log(this.eventForm.value);
    evento = this.eventForm.get('event').value;
    // evento.place = '';
    place = this.eventForm.get('place').value;
    evento.seatsLeft = evento.allowedParticipants;
    evento.speakers = [];
    console.log(evento);
    this.eventService.create(evento).subscribe(data => {
      console.log(data.id);
      this.placeService.create(place, data.id).toPromise().then(res => {
        data.place = res.id;
        console.log(data);
        this.eventService.update(data).subscribe(rtdo => console.log(rtdo));
        this.router.navigateByUrl('/event/' + data.id);
      });
    });
  }

  edit() {
    this.eventForm.get('event').get('start').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('start').value),
      'dd/MM/yyyy hh:mm'));
    this.eventForm.get('event').get('end').setValue(this.dp.transform(new Date(this.eventForm.get('event').get('end').value),
      'dd/MM/yyyy hh:mm'));
    const evento: Evento = this.eventForm.get('event').value;
    evento.speakers = [];
    this.eventService.update(evento).subscribe(data => console.log(data));
    this.placeService.update(this.eventForm.get('place').value).subscribe(data => console.log(data));
    this.router.navigateByUrl('/event/' + evento.id);

  }
}
