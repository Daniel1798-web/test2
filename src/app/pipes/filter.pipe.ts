import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(lista:any, texto:string){
    return lista.filter(user => user.name.toUpperCase().includes(texto.toUpperCase()))
  }

}
