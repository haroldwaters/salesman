import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { WordlistComponent } from './wordlist.component';



@NgModule({
  imports: [
    MatListModule,
    CommonModule
  ],
  declarations: [
    WordlistComponent
  ],
  exports: [WordlistComponent]

})
export class WordlistModule { }
