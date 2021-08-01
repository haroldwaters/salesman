import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { WordList } from './wordlist';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css'],
})
export class WordlistComponent implements OnInit {
  @ViewChild(MatSelectionList)
  private selectionList?: MatSelectionList

  @Input('maxSelected')
  public maxSelected?: number = 1;

  @Input('wordList')
  public wordList: WordList = [];

  @Input('maxSize')
  public maxSize: number = 5;

  public displayedWords: WordList = []
  public selectedWords: string[] = [];

  public ngOnInit(): void {
    this.loadWords();
  }

  public loadWords() {
    for (let i = this.maxSize - this.displayedWords.length; i > 0; i--) {
      const index = Math.floor(Math.random() * this.wordList.length);
      this.displayedWords.push(this.wordList[index])
    }
  }

  public canDiscard() {
    return this.selectedWords.length !== 2;
  }

  public discardWords() {
    if (this.selectionList != null) {
      const selectedWords = this.selectionList
          .options
          .filter(o => o.selected)
          .map(o => o.value)

      // Filter our internal list to remove the discarded words
      this.wordList = this.wordList
        .filter(w => !selectedWords.includes(w.content))

      this.displayedWords = this.displayedWords
        .filter(w => !selectedWords.includes(w.content))
      this.selectedWords = [];
    }
    this.loadWords()
  }

  public wordSelected(e: MatSelectionListChange): void {
    // Grab the last two _only_
    this.selectedWords = e.source.selectedOptions.selected
      .map((option) => option.value)
      .slice(-2)

    for (const option of e.source.selectedOptions.selected) {
      if (option.selected && !this.selectedWords.includes(option.value)) {
        option.toggle()
      }
    }
  }
}
