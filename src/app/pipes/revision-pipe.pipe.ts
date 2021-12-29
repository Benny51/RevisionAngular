import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revisionPipe',
  pure:true  //---> Si jamais on met ce paramètre du meta data a false cela devient un pipe impure ( voir sylabus du prof)
})
export class RevisionPipePipe implements PipeTransform {

/*  transform(num:number): number {
    return Math.pow(num,2);
  }*/

  /*Pour faire l'exemple du prof, on peut soit envoyer un tableau soit une donnée simple mais il faut faire un ngFor*/

  transform(num:number[]): number[] {
    return num.map(value => Math.pow(value,2));
  }
}
