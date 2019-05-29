import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Conferencia } from '../../../../models/Conferencia';
import { ConferenceService } from '../../../../services/conference.service';
import { BannerService } from '../../../../services/banner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Banner } from '../../../../models/Banner';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.css']
})
export class BannerFormComponent implements OnInit {
  banner: Banner;
  bannerForm: FormGroup;
  conferences: Conferencia[];
  edit = false;
  constructor(private formBuilder: FormBuilder, private conferenciaService: ConferenceService,
    private bannerService: BannerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.conferenciaService.getAll().subscribe(conferences => this.conferences = conferences, error => console.log(error));
    if (this.router.url.includes('create')) {
      this.bannerForm = this.formBuilder.group({
        banner: this.formBuilder.group({
          url: [, Validators.required],
          picture: [, Validators.required],
          idConference: [, Validators.required],
          description: [, Validators.required]
        })
      });
    } else if (this.router.url.includes('edit')) {
      let id = '';
      this.activatedRoute.params.subscribe(params => id = params['id']);
      this.bannerService.getOneById(id).subscribe(banner => {
        this.bannerForm = this.formBuilder.group({
          banner: this.formBuilder.group({
            url: [banner.url, Validators.required],
            picture: [banner.picture, Validators.required],
            idConference: [banner.idConference, Validators.required],
            description: [banner.description, Validators.required]
          })
        });
      }, error => console.log(error));

    }
  }
  onSubmit() {
    if (this.router.url.includes('create')) {
      console.log(this.bannerForm.value);
      this.bannerService.create(this.bannerForm.get('banner').value).subscribe(banner => {
        console.log(banner);
        this.router.navigateByUrl('banners');
      },
        error => console.log(error));
    } else {
      this.bannerService.update(this.bannerForm.get('banner').value).subscribe(banner => this.router.navigateByUrl('banners'));
    }
  }

}
