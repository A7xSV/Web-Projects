import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',               // Use component as an attribute
  // selector: '.app-servers',                // Use component as a class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];

  constructor(public snackBar: MdSnackBar) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push('serverName');
    console.log(this.servers);
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created !'; 
  }

  onUpdateServerName(event: Event) {
    /**
     * Not being used
     */
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  openSnackBar(message: string, action: string) {
    message = this.serverCreationStatus;
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}

// Generated this component using Angular CLI 
// Command used : 
// ng generate component servers "OR" ng g c servers