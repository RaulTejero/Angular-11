import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// Uni Tests : probar funciones internas
// Integration tests: probar diferentes elementros entre si 
// end to end. simulacion de usuario real 

// prueba en servicio  postsService y componente httpclient