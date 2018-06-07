import { Component } from '@angular/core';

declare var introJs: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;

  startIntro() {
    introJs().start();
  }

  openModal() {
    $('#myModal').modal();
  }
}
