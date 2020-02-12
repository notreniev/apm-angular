import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/shared/models/card.model';

@Component({
  selector: 'apm-card-progress-bar',
  templateUrl: './card-progress-bar.component.html',
  styleUrls: ['./card-progress-bar.component.css']
})
export class CardProgressBarComponent implements OnInit {

  @Input('card') card: Card

  constructor() { }

  ngOnInit(): void {
    //console.log('this.card', this.card)
  }

}
