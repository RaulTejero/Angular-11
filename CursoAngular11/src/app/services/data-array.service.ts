import { Injectable } from '@angular/core';
import { Data } from '../models/data.model'
// disponible para todos los componentes
@Injectable({
  providedIn: 'root'
})
export class DataArrayService {
  data: Data[];
  constructor() {
    this.data = [
      new Data("dfsdf", 3, "red", true),
      new Data("sdf", 4, "greeen", true),
      new Data("soyfalse", 7, "greeen", false),
    ]
  }
  // funcion del servicio 
  getAll() {
    return this.data
  }
  create(dataNew: Data) {
    this.data.push(dataNew)
  }

  // con promesaS
  activosFalse(): Promise<Data[]> {
    const result = new Promise<Data[]>((resolve, reject) => {
      const data: Data[] = []
      for (const dataAtivo of this.data) {
        if (!dataAtivo.activo) {
          data.push(dataAtivo)
        }
      }
      resolve(data);
    });
    return result
  }
  activosFalse2(): Promise<Data[]> {
    return new Promise<Data[]>((resolve, reject) => {
      const dataActivo = this.data.filter(elem => {
        return !elem.activo; //si el flase metelo en la constante
      });
      resolve(dataActivo);
    })
  }
  activosFalse3(): Promise<Data[]> {
    return new Promise<Data[]>((resolve, reject) => {
      resolve( this.data.filter(elem => !elem.activo));
    })
  }

}
