import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  //boolean that means if the message is displayed or not
  //Basicly the message is not displayed
  isMessageDisplayed:boolean = false;
  messagebyInterpolation:string = "Je suis un nouveau message";

  constructor() { }

  ngOnInit(): void {
  }

  displayMessage() {
    this.isMessageDisplayed =!this.isMessageDisplayed;
  }

  try($event: any) {
    //We recup all information of the button with $event (on this function)
    console.log($event.target.innerHTML);
  }
}
