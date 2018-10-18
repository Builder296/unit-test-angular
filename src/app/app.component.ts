import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeautBNK47';

  gamePlay(gameNo: number): string {
    let word: string;
    if (gameNo % 4 === 0) {
      word = 'Error';
    } else if (gameNo % 10 === 3) {
     word = 'Hello';
    } else {
      word = 'Win';
    }
    return word;
  }
}
