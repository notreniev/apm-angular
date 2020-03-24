import { Component, OnInit } from "@angular/core";
import {
  changeDivSize,
  fade,
  flyIn,
  openClose,
  slideIn
} from "src/shared/animations";

@Component({
  selector: "apm-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  animations: [fade, flyIn, openClose, slideIn, changeDivSize]
})
export class SidebarComponent implements OnInit {
  public isMenuCollapsed = false;

  currentState = "initial";

  constructor() {}

  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }

  ngOnInit(): void {}
}
