import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTable: boolean = true;
  mobileQuery: MediaQueryList;
  
    fillerNav = Array(4).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  
    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    toggleTable() {
      this.showTable = !this.showTable;
    }
}