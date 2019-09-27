import { Component } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string[] = ['', '', '', '', '', '', '', '', ''];
  isX: boolean;
  winCase: any;
  tickArray: number[];
  isWin: boolean;
  constructor() {
    this.isX = true;
    this.winCase = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6], [2, 5, 8], [1, 4, 7]];
    this.isWin = false;
  }

  tick(index) {
    if (this.isWin) {
      return;
    }
    if (this.data[index]) {
      return;
    }
    if (this.isX) {
      this.data[index] = 'X';
    } else {
      this.data[index] = 'O';
    }
    if (!this.checkWin()) {
      this.isX = !this.isX;
    }
  }

  checkWin() {
    this.tickArray = [];
    this.data.forEach((node, i) => {
      if (node === 'X' && this.isX) {
        this.tickArray.push(i);
      } else if (node === 'O' && !this.isX) {
        this.tickArray.push(i);
      }
    });
    this.winCase.forEach((win, i) => {
      if (win.every(element => this.tickArray.indexOf(element) > -1)) {
        this.isWin = true;
      }
    });
    return this.isWin;
  }

  reset() {
    this.isX = true;
    this.isWin = false;
    this.data = ['', '', '', '', '', '', '', '', ''];
  }
}
