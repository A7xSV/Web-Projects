import { Directive, ElementRef, Renderer2, OnInit, RendererStyleFlags2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'lightblue';
  // Hostbinding argument takes the property name of the hosting element to bind
  // camelCase as the DOM property doesn't know dashes
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
    this.backgroundColor = this.defaultColor;
  }

  // Function mouseover triggered on the event mentioned in HostListener argument
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.DashCase | RendererStyleFlags2.Important);
    // this.backgroundColor = 'lightblue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
