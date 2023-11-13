import { Injectable } from '@angular/core';
import { Cv } from './model/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauches : Cv[];

  constructor() {
    this.embauches = [];
   }
   getEmbauche() : Cv[]{
    return this.embauches;
  }
  embaucher(cv : Cv) : void {
    const index = this.embauches.indexOf(cv);
    if (index < 0) {
      this.embauches.push(cv);
    }else{
      alert(`${cv.name} est deja embauché`);
    }
  }
}
