import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {IsPhoneNumberService} from "./is-phone-number.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  constructor(private isPhoneNumberService:IsPhoneNumberService) { }

  phone:string = "";
  correctPhoneNumber:boolean = false;

  ngOnInit(): void {
  }

  verify():boolean
  {
    if(this.isPhoneNumberService.isPhoneNumber(this.phone))
    {
      return this.correctPhoneNumber = true;
    }
    return this.correctPhoneNumber = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert("Je suis la");
  }

  ngOnDestroy(): void {
  }

}
