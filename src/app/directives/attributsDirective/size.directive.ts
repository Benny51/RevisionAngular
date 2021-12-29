import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements OnInit{

  //This component will receive the data of this input
  @Input()  appSize:number | string = 0;

  constructor(public el:ElementRef,public renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement,"font-size",this.processSize(this.appSize)+"px");
  }

  processSize(size:number|string)
  {
    return parseInt((size)? size.toString() : "12px");
  }

}
