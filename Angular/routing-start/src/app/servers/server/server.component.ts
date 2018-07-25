import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id']; // Since the URL params are parsed as a string, the plus(+) sign can be used to convert it to a number
    // this.server = this.serversService.getServer(id);
    // console.log('outside', this.route);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log('inside', this.route);
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    console.log(this.route);
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      } 
    ); 
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    // Use 'merge' for queryParamsHandling, if adding more params while navigating
  }
}
