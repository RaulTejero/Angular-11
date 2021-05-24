import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
 @Input() mensaje:string;
  constructor() { 
    this.mensaje = "Hijo numero 1"
  }

  ngOnInit(): void {
  }

}
