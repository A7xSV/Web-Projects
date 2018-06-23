import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLoadServers() {
    console.log('Loading Servers...', 'Navigating programmatically');
    console.log(this.route);
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
