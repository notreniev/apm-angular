import { Component, Input, OnInit } from "@angular/core";
import { Card } from "src/shared/models/card.model";

@Component({
  selector: "apm-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input("card") card: Card;

  constructor() {}

  ngOnInit(): void {}
}
