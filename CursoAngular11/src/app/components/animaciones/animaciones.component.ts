import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
  // añadir animaciones 
  animations: [
    trigger('animacionCabiaColor', [
      state('stop', style({
        'background-color': 'red'
      })),
      state('para', style({
        'background-color': 'yellow',
        'transform': 'scale(2)'
      })),
      state('pasa', style({
        'background-color': 'green'
      })),
      transition('*=>*', animate(4000)),
      // transition('para=>stop', animate(1000)
      // transition('para=>stop', animate(".5s ease-in"))
      transition('void =>*', [
        //  void antes de arrancar la animacion 
        style({ 'transform': 'translateX(-100%)' }),
        animate(4000)
      ])
    ])
  ]
})
export class AnimacionesComponent implements OnInit {
  estado: string;
  constructor() {
    this.estado = "pasa";
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.estado === "pasa") {
        this.estado = "para";
      } else if (this.estado === "para") {
        this.estado = "stop";
      } else if (this.estado === "stop") {
        this.estado = "pasa"
      }
    }, 3000)
  }

}
