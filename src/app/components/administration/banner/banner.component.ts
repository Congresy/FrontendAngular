import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../models/Banner';
import { BannerService } from '../../../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners: Banner[];
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.getAll().subscribe(banners => this.banners = banners, error => console.log(error));
  }

  delete(id: string) {
    console.log(id);
    this.bannerService.delete(id).subscribe(data => {
      for (const banner of this.banners) {
        const index = this.banners.indexOf(banner);
        if (banner.id === id) {
          if (index !== -1) {
            this.banners.splice(index, 1);
          }
        }
      }
    }, error => console.log(error));

  }
}
