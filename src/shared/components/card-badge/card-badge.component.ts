import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apm-card-badge',
  templateUrl: './card-badge.component.html',
  styleUrls: ['./card-badge.component.css']
})
export class CardBadgeComponent implements OnInit {

  @Input() color: any;

  constructor() { }

  ngOnInit(): void {
  }

}
