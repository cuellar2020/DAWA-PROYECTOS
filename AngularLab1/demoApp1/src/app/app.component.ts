import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos = [
    {codigo:1,descripcion:'coronita',precio:'0.50'},
    {codigo:2,descripcion:'oreo',precio:'0.80'}
  ];


}
