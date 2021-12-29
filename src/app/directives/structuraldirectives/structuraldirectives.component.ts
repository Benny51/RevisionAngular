import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {

  isDisplay:boolean = true;

  arrayOfNumber:number[] = [0,1,2,3,4,5,6,7,8,9,10];
  arrayWithInd:number[] = [10,9,8,7,6,5,4,3,2,1,0];
  constructor() { }

  ngOnInit(): void {
  }

  changeStateToBoolForDisplayMessage()
  {
    this.isDisplay = !this.isDisplay;
  }

}
