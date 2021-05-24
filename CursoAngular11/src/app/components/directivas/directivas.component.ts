import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
parrafoColor:any;
color: any;
valueRange: string;
  constructor() {
    this.parrafoColor = {
      color: "green"
    }
    this.color = {
      color:"red",
      fontSize: "50px",
      fontWeight: "bold"
    };
    this.valueRange = ""
   }

  ngOnInit(): void {
  }
 onInput(e){
   this.valueRange = e.target.value;
   this.color.fontSize = this.valueRange+"px";
 }

}
