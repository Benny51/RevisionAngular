import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {


  //Variable qui va être affichée par interpolation
  num1:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
