import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {

  @Output() itemClick = new EventEmitter()
  @Input() cv! : Cv;

  onClick(id: number){
    this.itemClick.emit(id)
  }
}
