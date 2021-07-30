import { NgModule } from '@angular/core';
import { WordlistModule } from '../wordlist/wordlist.module';
import { BuyerComponent } from './buyer.component';



@NgModule({
  imports: [
    WordlistModule,
  ],
  declarations: [BuyerComponent],
  exports: [BuyerComponent],
})
export class BuyerModule { }
