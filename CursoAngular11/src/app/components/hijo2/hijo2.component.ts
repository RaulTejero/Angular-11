import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {
  // import output y EventEmitter
  @Output() alertaPulsada: EventEmitter<string>
  constructor() {
    // inicializar
    this.alertaPulsada = new EventEmitter();
   }

  ngOnInit(): void {
  }
  onClick(){
    //emitir
    this.alertaPulsada.emit("valor emitido desde hijo 2");
  }

}
