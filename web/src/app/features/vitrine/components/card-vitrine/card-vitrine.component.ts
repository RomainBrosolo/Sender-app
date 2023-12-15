import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vitrine',
  templateUrl: './card-vitrine.component.html',
  styleUrls: ['./card-vitrine.component.scss']
})
export class CardVitrineComponent implements OnInit {

  @Input() info = {
    imgURI: "",
    name: "",
    desc: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
