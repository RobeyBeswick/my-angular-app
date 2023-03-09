import { Component } from '@angular/core';
// import {fo}

@Component({
  // must be unique
  selector: 'app-root', // Angular information needded to replace part in index.html
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css', ],\
  // can use the internal or external styles
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {}
