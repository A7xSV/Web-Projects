import { Component } from '@angular/core';

// Meta data for this class (Tells Angular what to do with the class) 
// Transforms the class into something else(Component here), using the decorator which has to be imported
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? '#BDE2BD' : 'mistyrose';   
  }
}