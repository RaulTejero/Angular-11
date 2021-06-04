import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //se visualiza lo que retorna, si es null nada, "hola = "hola", value = "el valor que recibe el pipee"
    const arrValue = value.split('');
    const arrReverso = arrValue.reverse();
    return arrReverso.join('');
  }

}
