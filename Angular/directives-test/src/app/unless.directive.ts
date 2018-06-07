import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // The setter with the 'set' keyword turns this to a method though it technically still is a property
  // The setter of the property is a method which gets executed whenever the property changes 
  @Input() set appUnless(condition: boolean) {
    // The condition is the value the property would have gotten the usual way
    if (!condition) {
      // Creates a view in this View Container
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }

  // Injected for information on 'what' template to display and 'where' to render that
  // vcRef marks the place where the directive is used in the document. Visible in developer tools
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
