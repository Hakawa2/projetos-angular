import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  getFullPrice() {
    console.log('arroz');
    return 'R$ 100,00';
  }
}
