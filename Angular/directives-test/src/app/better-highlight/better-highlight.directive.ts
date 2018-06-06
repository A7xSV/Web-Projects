import { Directive, ElementRef, Renderer2, OnInit, RendererStyleFlags2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // Hostbinding argument takes the property name of the hosting element to bind
  // camelCase as the DOM property doesn't know dashes
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
  }

  // Function mouseover triggered on the event mentioned in HostListener argument
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
