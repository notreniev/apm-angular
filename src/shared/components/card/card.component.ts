import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('titulo') titulo: string = 'teste'

  // @Input('title') title: string = ''
  // @Input('subtitle') subtitle: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
