import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // select by element (The best for full components)
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // select by classs
  // templateUrl: './servers.component.html',
  // you can directly define html code to this part using template instead of templateUrl
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
