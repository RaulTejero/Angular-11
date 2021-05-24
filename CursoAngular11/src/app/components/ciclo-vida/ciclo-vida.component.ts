import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {
  mensahe1: string;

  @Input() textoInput: string;

  constructor() {
    // el primero que se inicia, para inicializar propiedades
    console.log("constructor");
    this.mensahe1 = "1º variable inizializada en elconstructor, lo uso para iniciar variavles"
  }

  // ngOnChanges(){
  // se ejecuta automatico, trabaja entre el contructor y onInit, tambien se puede llamar desde aquir
  // }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.textoInput);
    
    // se ejecuta despues de cargar el html 

  }

  ngOnInit(): void {
    console.log("ngOninit");
    // se ejecuta nada mas cargar el componente 

  }
  ngOnDestroy(){
    // se ejecuta cuando el componente ya no se usa 
  }

}
