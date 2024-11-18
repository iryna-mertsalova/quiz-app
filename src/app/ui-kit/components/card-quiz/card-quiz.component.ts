import { Component, Input } from '@angular/core';
import { CardItemStyle } from '../../constants/card-item';

@Component({
  selector: 'app-card-quiz',
  templateUrl: './card-quiz.component.html',
})
export class CardQuizComponent {
  @Input() name: string = '';
  @Input() id: number = 0;
  @Input() styles: CardItemStyle = { icon: '', color: '' };
}
