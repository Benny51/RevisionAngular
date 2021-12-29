import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsPhoneNumberService {

  constructor() { }

  public isPhoneNumber(phoneNumber:string):boolean
  {
    return /^(?:0|\+32)(?: ?\d?)+$/.test(phoneNumber);
  }

  /*
  * La seule nouveauté est le décorateur Injectable qui signifie que ce service pourra être injecté
  * dans un autre élément.
  * */
}
