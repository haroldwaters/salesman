import { Component } from '@angular/core';

export type ViewType = 'buyer' | 'seller'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'salesman-game';
  public viewType: ViewType = 'seller';

  public setType(viewType?: ViewType) {
    if (viewType) {
      this.viewType = viewType;
    }
  }
}
