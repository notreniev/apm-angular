import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public isCollapsedComponents = true;
  public isCollapsedUtilities = true;
  public isCollapsedPages = true;
  public isCollapsedCharts = true;
  public isMenuCollapsed = true;
}
