import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from '../../../services/model/question.model';

@Component({
  selector: 'app-ui-question-item',
  templateUrl: './question-item.component.html',
})
export class QuestionItemComponent {
  @Input() item: QuestionModel = { id: 0, question: '', answers: [] };
  
  @Output() next = new EventEmitter<void>(); 
  @Output() prev = new EventEmitter<void>(); 

  images: string[] = [
    'avatars/Profile-1.svg',
    'avatars/Profile-2.svg',
    'avatars/Profile.svg',
  ];  

  getFormattedText(): { start: string, middle: string, end: string } {
    const isShortQuestion = this.item.question.length <= 20;
    const middleStart = this.item.question.indexOf(' ', this.item.question.indexOf(' ') + 2);
    const middleEnd = this.item.question.lastIndexOf(isShortQuestion ? '?' : ' ');

    return {
      start: this.item.question.slice(0, middleStart),
      middle: this.item.question.slice(middleStart, middleEnd),
      end: this.item.question.slice(middleEnd),
    };
  }
}
