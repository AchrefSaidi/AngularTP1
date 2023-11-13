import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent {

  @Output() showCV = new EventEmitter()
  @Input() cvs : Cv[] = [];

  cvSelected(id: number){
    this.showCV.emit(id);
  }
}
