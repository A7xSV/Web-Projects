import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  title = 'the first-project app';
}

// Use back-ticks for multi line template/styles
// Inverted commas only allow for a single line string
// One template whereas styles can be multiple, hence an array