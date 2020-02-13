import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[apmRender]'
})
export class RenderDirective implements OnInit {

  classe: string = 'show'
  toggleFlag = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('click')
  performTask() {
    this.toggleFlag = (this.toggleFlag === true) ? false : true;

    console.log('this.toggleFlag', this.toggleFlag)
    if (this.toggleFlag) {
      this.renderer.addClass(this.el.nativeElement, this.classe);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.classe);
    }
  }

  ngOnInit() {
  }
}
