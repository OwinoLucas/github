import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("mouseover") onHover() {
    this.highlight("grey")
  }

  @HostListener("mouseout") onMouseOut() {
    this.highlight("white")
  }

  private highlight(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
