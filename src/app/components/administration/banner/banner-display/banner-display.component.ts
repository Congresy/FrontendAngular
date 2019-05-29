import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../../models/Banner';
import { BannerService } from '../../../../services/banner.service';

@Component({
  selector: 'app-banner-display',
  templateUrl: './banner-display.component.html',
  styleUrls: ['./banner-display.component.css']
})
export class BannerDisplayComponent implements OnInit {

  banner: Banner;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.getAll().subscribe(data => {
      this.banner = data[Math.floor(Math.random() * data.length)];
    }, error => console.log(error));
  }




}
