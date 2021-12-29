import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  first_name: string ="";
  dateOfBirth: Date | undefined;

  pattern : string ="\d{2}\/\d{2}\/\d{4}";

  constructor() { }

  ngOnInit(): void {
  }

}
