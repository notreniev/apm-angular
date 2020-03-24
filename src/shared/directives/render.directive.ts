import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[apmToggleMenu]"
})
export class RenderDirective implements OnInit {
  classe: string = "show";
  toggleFlag = false;

  @Input("apmToggleMenu") elementId: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("click")
  performTask() {
    this.toggleFlag = this.toggleFlag === true ? false : true;

    const elementRoot = this.renderer.selectRootElement(
      `#${this.elementId}`,
      true
    );
    if (this.toggleFlag) {
      this.renderer.addClass(elementRoot, this.classe);
    } else {
      this.renderer.removeClass(elementRoot, this.classe);
    }
  }

  ngOnInit() {}
}
