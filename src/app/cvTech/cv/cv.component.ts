import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  selectedCV : number = -1;
  cvs : Cv[] ;
  constructor (private cvService : CvService) {
    this.cvs = cvService.getCvs();
  }

  showCV(id: number){
    this.selectedCV = id;
  }
}
