import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'frontend';
  @ViewChild('collapseUtilities', { static: false }) utilities: ElementRef
  @ViewChild('collapsePages', { static: false }) pages: ElementRef
  @ViewChild("collapseComponents", { static: false }) componentes: ElementRef;

  public isCollapsedComponents = true;
  public isCollapsedUtilities = true;
  public isCollapsedPages = true;
  public isCollapsedCharts = true;
  public isMenuCollapsed = true;


  constructor(){
  }

  ngAfterViewInit(){

  }

  ngOnInit(){
  }

}
