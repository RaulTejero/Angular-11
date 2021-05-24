import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  campoTextoVariable: string;
  constructor() {
    this.campoTextoVariable = "NgModel por defecto"
  }
 

  ngOnInit(): void {
  }

}
