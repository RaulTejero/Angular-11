import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './models/data.model';
import { DataArrayService } from './services/data-array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [DataArrayService] esto sirve por si quieres que solo use ese servicio
})
export class AppComponent implements OnInit {
  data: Data[];
  numero: string;
  //importo router para navegar a la ruta por parametro de a funcion
  // importo un DataArrayService de dados locales
  constructor(private router: Router, private dataService: DataArrayService) {
    this.data = [];
    this.numero = "55";
  }

  ngOnInit() {
    // data = al funcion getAll del servicio 
    this.data = this.dataService.getAll();
    console.log(this.data);

  }

  // funcion para ir a una ruta 
  onclick(pRuta: string) {
    if (pRuta === "info/") {
      const ruta = pRuta+this.numero+"/detalles";
      this.router.navigate([ruta])
    } else {
      this.router.navigate([pRuta]);
    }
    
  }
  createData(){
    this.dataService.create(new Data("ghfgh",4,"erg",true));
    this.data = this.dataService.getAll();
  }
async dataFalse(){
   console.log("funtiona");
   try {
     this.data = await this.dataService.activosFalse()
   } catch (error) {
     console.log(error);
     
   }
      

  }
}
