import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'frontend';

  @ViewChild('components') 
   private components: ElementRef;

   @ViewChild('utilities') 
   private utilities: ElementRef;

   @ViewChild('pages') 
   private pages: ElementRef;

  public isCollapsedComponents = true;
  public isCollapsedUtilities = true;
  public isCollapsedPages = true;
  public isCollapsedCharts = true;
  public isMenuCollapsed = true;

  constructor(private renderer: Renderer2){
  }

  ngAfterViewInit(){
    this.renderer.listen(this.components.nativeElement.parentNode, 'click', () => {
      this.renderer.removeClass(this.components.nativeElement, 'show')
      this.renderer.removeClass(this.utilities.nativeElement, 'show')
      this.renderer.removeClass(this.pages.nativeElement, 'show')
      this.renderer.addClass(this.components.nativeElement, 'show')
    });

    this.renderer.listen(this.utilities.nativeElement.parentNode, 'click', () => {
      this.renderer.removeClass(this.components.nativeElement, 'show')
      this.renderer.removeClass(this.utilities.nativeElement, 'show')
      this.renderer.removeClass(this.pages.nativeElement, 'show')
      this.renderer.addClass(this.utilities.nativeElement, 'show')
    });

    this.renderer.listen(this.pages.nativeElement.parentNode, 'click', () => {
      this.renderer.removeClass(this.components.nativeElement, 'show')
      this.renderer.removeClass(this.utilities.nativeElement, 'show')
      this.renderer.addClass(this.pages.nativeElement, 'show')
    });

  }

  ngOnInit(){
  }

}
