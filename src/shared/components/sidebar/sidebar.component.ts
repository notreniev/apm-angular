import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'apm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnInit {

  @ViewChild('components')
  private components: ElementRef;

  @ViewChild('utilities')
  private utilities: ElementRef;

  @ViewChild('pages')
  private pages: ElementRef;

  @ViewChild('accordionSidebar')
  private navItem: ElementRef;

  public isCollapsedComponents = true;
  public isCollapsedUtilities = true;
  public isCollapsedPages = true;
  public isCollapsedCharts = true;
  public isMenuCollapsed = true;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
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
      this.renderer.removeClass(this.pages.nativeElement, 'show')
      this.renderer.addClass(this.pages.nativeElement, 'show')
    });
  }

  /**
   * 
   *     // const navItems = this.elRef.nativeElement.querySelectorAll('li')
      // navItems.forEach(element => {
      //   const div = element.querySelector('div')
      //   if (div){
      //     const show = div.classList.contains('collapse')
      //     if (show){
      //       console.log(div)
      //       this.renderer.listen(this.components.nativeElement, 'click', () => {
      //         this.renderer.removeClass(this.utilities.nativeElement, 'show')
      //         this.renderer.removeClass(this.pages.nativeElement, 'show')      
      //         this.renderer.addClass(this.components.nativeElement, 'show')
      //         console.log('this1', div)
      //       })    
      //     }
      //   }
      // });
  
   * 
   * 
   */

  ngOnInit(): void {
  }

}
