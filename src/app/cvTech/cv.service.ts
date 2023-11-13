import { Injectable } from '@angular/core';
import { Cv } from './model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvs: Cv[] = [
    new Cv(
      0, "Saidi", "Achref", 22, 15017629, "Student", "rotating_card_profile3.png"
    ),
    new Cv(
      1, "Saidi", "Imen", 23, 15013247, "Student", "rotating_card_profile.png"
    ),
  ];
  public getCvs(): Cv[] {
    return this.cvs;
  }

  constructor() { }

  
}
