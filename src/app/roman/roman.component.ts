import { Component } from '@angular/core';

@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.css']
})
export class RomanComponent {

  roman(arabic: number): string {
    if (arabic < 4) {
      let arabicStr = '';
      for (let i = arabic; i > 0; i--) {
        arabicStr += 'I';
      }
      return arabicStr;
    } else if (arabic === 4) {
      return 'IV';
    } else if (arabic === 5) {
      return 'V';
    } else if (arabic < 9) {
      return 'V' + this.roman(arabic - 5);
    } else if (arabic === 9) {
      return this.roman(arabic - 8) + 'X' ;
    } else if (arabic === 10) {
      return 'X';
    } else if (arabic % 10 === 0 && arabic < 40) {
      let arabicten = '';
      const count = arabic / 10;
      for (let i = 1; i <= count; i++) {
        arabicten += 'X';
      }
      return arabicten;
    } else if (arabic < 40) {
      return this.roman(arabic - (arabic % 10)) + this.roman(arabic % 10);
    } else if (arabic < 50) {
      return 'XL' + this.roman(arabic % 10);
    } else if (arabic < 90) {
      return 'L' + this.roman(arabic - 50);
    } else if (arabic < 100) {
      return 'XC' + this.roman(arabic % 10);
    } else if (arabic === 100) {
      return 'C';
    }
  }

}
