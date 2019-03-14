import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
            <footer>
              <span> Congresy, by Jose Prieto </span>
            </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
