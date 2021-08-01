import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.css']
})
export class ScoreCounterComponent  {
  public score: number = 0;

  public changeScore(increment: number): void {
    this.score = this.score + increment < 0 ? 0 : this.score + increment;
  }
}
