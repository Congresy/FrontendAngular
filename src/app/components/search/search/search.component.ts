import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../../services/conference.service';
import { EventService } from '../../../services/event.service';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busqueda: string;
  tipo: string;
  resultado: any[];
  mostrar: string;
  constructor(private conferenciaService: ConferenceService, private postService: PostService) { }

  ngOnInit() {
  }

  buscar() {
    switch (this.tipo) {
      case 'conferencia':
        this.conferenciaService.search(this.busqueda).subscribe(conferencias => {
          this.resultado = conferencias;
          this.mostrar = this.tipo;
        },
          error => console.log(error));
        break;
      case 'post':
        this.postService.search(this.busqueda).subscribe(posts => {
          this.resultado = posts;
          this.mostrar = this.tipo;
        })
    }
  }

}
