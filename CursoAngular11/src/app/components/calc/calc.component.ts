import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  value: string;
  clear: boolean;
  constructor() {
    this.value = "";
    this.clear = true;
  }
  ngOnInit(): void {
  }
    onClick(e) {
      if (this.clear === true) {
        this.value += e.target.textContent;
      console.log(this.value);
      } else {
        this.value = "";
        this.clear = true;
      }
      
    }
    onCalc(){
      this.value = eval(this.value);
      this.clear = false;
    }

}
