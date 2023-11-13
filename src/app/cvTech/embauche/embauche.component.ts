import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  cvEmbauche : Cv[] ;

  constructor (private embaucheService : EmbaucheService) {
    this.cvEmbauche = this.embaucheService.getEmbauche();
  }

}
