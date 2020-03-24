import { Component, OnInit } from "@angular/core";

@Component({
  selector: "apm-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public isMenuCollapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
