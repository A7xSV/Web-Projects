import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    console.log('Loading Servers...', 'Navigating programmatically');
    console.log(this.route);
    // By default, unlike the routerLink, the navigate method does not know the route on which it sits. Thus navigates relative to the root by deafult unless explicitly mentioned
    this.router.navigate(['/servers', id, 'edit'], {relativeTo: this.route, queryParams: {allowEdit: '1'}, fragment: 'loaded'});
  }

  onLogin() {
    this.authService.logIn();
  }

  onLogout() {
    this.authService.logOut();
  }
}
