import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paire'
})
export class PairePipe implements PipeTransform {

  transform(listOfNums:number[],nameFnWanted:string): number[] {
    const fn =(nameFnWanted.trim().toLowerCase() =='even')?
      (num:any) => num % 2 == 0:
      (num:any) => num % 2 != 0;

    return listOfNums.filter(num=> fn(num));
  }

}
