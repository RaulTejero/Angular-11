import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  mensajePadre:string[];

  constructor() {
    this.mensajePadre = ["mensaje 1 desde el componente padre para el hijo 1 @input","mensaje 2 desde el componente padre para el hijo 1 @input"]
   }

  ngOnInit(): void {
  }
  alertaDesdeElHijo2(e){
    this.mensajePadre[2] = e;
    
  }

}
