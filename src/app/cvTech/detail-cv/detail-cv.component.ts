import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {

  @Input() showedCv!: Cv;

  constructor (private embaucheService : EmbaucheService) {

  }

  embaucher () {
    this.embaucheService.embaucher(this.showedCv);
  }
}
