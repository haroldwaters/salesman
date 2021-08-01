import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { WordlistComponent } from './wordlist.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatListModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [
    WordlistComponent
  ],
  exports: [WordlistComponent]

})
export class WordlistModule { }
