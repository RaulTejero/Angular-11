import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapalib',
  templateUrl: './mapalib.component.html',
  styleUrls: ['./mapalib.component.css']
})
export class MapalibComponent implements OnInit {
  latitud : number;
  longitud: number;


  constructor() {
    this.latitud = 14;
    this.longitud = 34;
   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)// coordenadas
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    })
    
     
  }

}


// 1º npm install @agm/core
// 2 app.module importar agmcoreModule