import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from '../../../services/model/question.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-question-item',
  templateUrl: './question-item.component.html',
})
export class QuestionItemComponent {  
  @Input() item: QuestionModel = { question: '', type: false, difficulty: '', category: '', correct_answer: '', incorrect_answers: [] };
  @Input() options: string[] = new Array<string>(4);
  @Input() id: number = 0;
  @Output() next = new EventEmitter<void>(); 
  @Output() prev = new EventEmitter<void>(); 
  
  images: string[] = [
    'avatars/Profile-1.svg',
    'avatars/Profile-2.svg',
    'avatars/Profile.svg',
  ];  
  
  formControl = new FormControl();

  get selectedAnswer(): string | null | undefined {
    return this.formControl.value;
  }

  handlePrev(): void {
    this.prev.emit();
    this.formControl.reset();
  }
  
  handleNext(): void {
    this.next.emit();
    this.formControl.reset();
  }

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
