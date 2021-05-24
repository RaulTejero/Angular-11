import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  campoTextoVariable: string;
  constructor() {
    this.campoTextoVariable = "NgModel por defecto"
  }
  onClick() {
    console.log("ngmodel");
    this.campoTextoVariable = "He cambiado con el button"
  }
}
