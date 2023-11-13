import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors : string[] = ["red", "blue", "green", "yellow", "lightgrey", "lightblue", "purple", "pink", "gold"] ;

  @HostBinding('style.color') color : string = ''
  @HostBinding('style.borderColor') bcColor : string = ''

  @HostListener('keyup') keyup(){
    const rand = Math.floor(Math.random() * (this.colors.length - 1));
    this.color = this.colors[rand];
    this.bcColor = this.colors[rand];
  }

  constructor() { }

}
