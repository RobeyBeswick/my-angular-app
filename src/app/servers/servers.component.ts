import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // select by element (The best for full components)
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // select by classs
  templateUrl: './servers.component.html',
  // you can directly define html code to this part using template instead of templateUrl
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  // AllowNewServer is a component property. It is a property of the
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  // Here We have added a new servers array
  servers = ['test-server-1', 'test-server-2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    // We add whatever server we have to the array
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
