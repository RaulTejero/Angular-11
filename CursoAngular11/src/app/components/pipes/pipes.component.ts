import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  precio: number;
  decimal: number;
  date: Date;
  porcient: number;
  text: string;
  slicePipe: string[];
  // asinc pipe 
  prom: Promise<any>;
  promPostService : Promise<any>;
  constructor(private servicePost: PostsService) {
    this.precio = 3344.554;
    this.decimal = 34.78963464654;
    this.date = new Date;
    this.porcient = Math.random();
    this.text = "Esto es un texto de Pepe";
    this.slicePipe = ["perro", "gato", "pajaro", "pez", "ballena", "tortuga"];
    this.prom = new Promise<any>((resolve, reject)=> {
      setTimeout(() => {
        resolve("Promesa desoues de 4 s")
      }, 4000);
    });
    this.promPostService = this.servicePost.getAll();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date;
    }, 1000);
  }

}
