import { Component } from '@angular/core';
import { WordList } from '../wordlist/wordlist';
import { nouns } from './nouns';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  public readonly wordList: WordList = nouns;
}
