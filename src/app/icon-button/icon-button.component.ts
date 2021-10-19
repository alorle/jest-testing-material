import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <button mat-icon-button matTooltip="Favorito">
      <mat-icon>favorite</mat-icon>
    </button>
  `,
  styles: [],
})
export class IconButtonComponent {}
