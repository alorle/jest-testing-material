import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-icon-button></app-icon-button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'jest-testing-material';
}
