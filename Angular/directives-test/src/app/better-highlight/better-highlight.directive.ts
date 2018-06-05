import { Directive, ElementRef, Renderer2, OnInit, RendererStyleFlags2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
  }

  // Function mouseover triggered on the event mentioned in HostListener argument
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
