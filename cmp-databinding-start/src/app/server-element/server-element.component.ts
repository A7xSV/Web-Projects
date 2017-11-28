import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Emulated, Native
})
// Styles will now be applied globally
export class ServerElementComponent implements OnInit, OnChanges {
  // @Input enables parent components to bind to this property (A property that you can now set out of this component).
  // @Input() element: {type: string, name: string, content: string};

  // Aliasing for usage outside this component
  @Input('srvElement') element: {type: string, name: string, content: string}; // Not needed now
  @Input() name;

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
  }

}
