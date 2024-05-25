import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, CardButtonComponent],
  exports: [CardComponent],
})
export class CardsModule {}
