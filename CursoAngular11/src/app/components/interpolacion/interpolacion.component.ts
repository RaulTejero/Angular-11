import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {
  message:string;

  constructor() {
    this.message ="Soy una interpolacion{{}}";

    setTimeout(()=>{
      this.message = " He cambiado a los 5 seg"
    },3000);
   }

  ngOnInit(): void {
  }

  printOk(){
    return "OK";
  }
}
