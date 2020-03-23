import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[apmRender]"
})
export class RenderDirective implements OnInit {
  classe: string = "show";
  toggleFlag = false;

  @Input() id: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("click")
  performTask() {
    this.toggleFlag = this.toggleFlag === true ? false : true;

    const elementRoot = this.renderer.selectRootElement(`${this.id}`, true);
    if (this.toggleFlag) {
      this.renderer.addClass(elementRoot, this.classe);
    } else {
      this.renderer.removeClass(elementRoot, this.classe);
    }
  }

  ngOnInit() {}
}
