import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/shared/models/card.model';

@Component({
  selector: 'apm-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  @Input('card') card: Card

  constructor() { }

  ngOnInit(): void {
  }

}
