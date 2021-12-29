import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})

export class TemplateReferenceComponent implements OnInit {
  @ViewChild('nom_de_la_variable') templateRefenceFromDomToComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void
  {
    console.log(
      this.templateRefenceFromDomToComponent.nativeElement.innerHTML + " Je suis ici"
    );
  }

}
