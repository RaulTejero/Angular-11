// para que funcione el componente necesita estar importado y declarado en app.module.ts, normalmente se hace automaticamente.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
