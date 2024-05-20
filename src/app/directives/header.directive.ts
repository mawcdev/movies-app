import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective implements OnInit {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  ngOnInit(): void {
    
  }

}
