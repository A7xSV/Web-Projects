import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Emulated, Native
})
// Styles will now be applied globally
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input enables parent components to bind to this property (A property that you can now set out of this component).
  // @Input() element: {type: string, name: string, content: string}; // element is the property of this element just like disabled is for a button HTML element. We bind to this property to get the data.

  // Aliasing for usage outside this component
  @Input('srvElement') element: {type: string, name: string, content: string}; // Not needed now
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraphContent') paragraph: ElementRef; // Projected content reference used by ContentChild

  constructor() { 
    console.log('Constructor called');
  }

  // The only lifecycle hook that receives an argument
  ngOnChanges(changes: SimpleChanges) {
    // When a bound property changes (@Input() variables)
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Heading: ' + this.header.nativeElement.textContent); // DOM value hasn't been entered yet.
    console.log('Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // Whenever Angular change detection system runs
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Heading: ' + this.header.nativeElement.textContent);    
    console.log('Paragraph: ' + this.paragraph.nativeElement.textContent);    
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
