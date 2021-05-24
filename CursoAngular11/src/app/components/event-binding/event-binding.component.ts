import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  text: string;
  number1: number;
  number2: number;
  resultSuma: number | string;
  initial: number;
  valueSelect: string;
  valueInput: string;

  constructor() {

    this.text = "pulsa";
    this.number1 = 10;
    this.number2 = 45;
    this.resultSuma = `Resultado de suma ${this.number1} + ${this.number2}`;
    this.initial = 10;
    this.valueSelect = "";
    this.valueInput = "";

  }

  ngOnInit(): void {


  }
  suma() {
    this.resultSuma = this.number1 + this.number2
    return this.resultSuma;
  }

  chrono() {

    const setChrono = setInterval(() => {
      this.initial--
      if (this.initial === 0) {
        clearInterval(setChrono);
        setTimeout(() => { this.initial = 10 }, 3000)
      }
    }, 1000)
  }

  onClick(e) {
    let cambio = "pulsado";
    console.log(cambio);
    this.text = cambio;
    console.log(e.target);
  }
  onChange(e) {
    console.log(e.target.value);
    this.valueSelect = e.target.value;

  }
  onMouseenter(e) {
    e.target.style.backgroundColor = "red";
  }
  onMouseout(e) {
    e.target.style.backgroundColor = "initial";
  }
  onInput(e) {
    this.valueInput= e.target.value
  }
}
