import { Component } from '@angular/core';
import { Caracteristique } from './app.caracteristique';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  <caracteristique [title]="'gfdgd'" [bigTitle]="'AAA'"></caracteristique>
  `,
   directives:[Caracteristique]
})
export class AppComponent { }
