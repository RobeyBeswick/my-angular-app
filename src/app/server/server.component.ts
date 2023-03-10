import { Component } from '@angular/core';

@Component({
  // Add metadata
  // html selector
  selector: 'app-server',
  // html to go into selector
  templateUrl: './server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent {
  // typescript class
  // Here I can hardcode values
  serverId: number = 10;
  private serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerstatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
