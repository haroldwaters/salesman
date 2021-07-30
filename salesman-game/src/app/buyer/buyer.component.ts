import { Component } from '@angular/core';
import { WordList } from '../wordlist/wordlist';
import { subjects } from './subjects';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {
  public readonly wordList: WordList = subjects;
}
