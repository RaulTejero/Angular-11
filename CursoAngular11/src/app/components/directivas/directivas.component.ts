import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  parrafoColor: any;
  color: any;
  valueRange: string;
  clase: string;
  claseBoolean: boolean;
  nombres:any[];
  opcionNumero: number|string;
  constructor() {
    this.parrafoColor = {
      color: "green"
    }
    this.color = {
      color: "red",
      fontSize: "50px",
      fontWeight: "bold"
    };
    this.valueRange = "";
    this.clase = "clase1";
    this.claseBoolean = true;
    this.nombres = [
      {primerNombre:"Alvaro",segundoNombre:"Toro"},
      {primerNombre:"Pepe Juan",segundoNombre:"Martinez"}
    ]
    this.opcionNumero = 1;
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.claseBoolean) {
        this.clase = " clase2";
        this.claseBoolean = !this.claseBoolean;
      } else {
        this.clase = " clase1";
        this.claseBoolean = !this.claseBoolean;
      }

    }, 2000)
  }
  onInput(e) {
    this.valueRange = e.target.value;
    this.color.fontSize = this.valueRange + "px";
  }
  onChange(e) {
    this.opcionNumero = e.target.value;
    console.log(this.opcionNumero);
  }


}
