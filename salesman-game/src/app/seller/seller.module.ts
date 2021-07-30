import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { WordlistModule } from '../wordlist/wordlist.module';



@NgModule({
  imports: [
    WordlistModule,
  ],
  declarations: [
    SellerComponent,
  ],
  exports: [
    SellerComponent,
  ],
})
export class SellerModule { }
