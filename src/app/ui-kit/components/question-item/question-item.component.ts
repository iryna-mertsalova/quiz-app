import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from '../../../services/model/question.model';
import { FormControl } from '@angular/forms';
import { QUESTIONS_SIZE } from '../../../utils/constants';

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
  @Output() getSelectedAnswer = new EventEmitter<string>(); 
  
  images: string[] = [
    'avatars/Profile-1.svg',
    'avatars/Profile-2.svg',
    'avatars/Profile.svg',
  ];  
  
  formControl = new FormControl();
  size: number = QUESTIONS_SIZE;

  get selectedAnswer(): string | null | undefined {
    this.getSelectedAnswer.emit(this.formControl.value);
    return this.formControl.value;
  }
  
  get buttonTextLg(): {prev: string, next: string} {
    return {
      prev: 'Prev question',
      next: this.id === this.size ? 'Finish' : 'Next question',
    };
  }

  get buttonTextSm(): {prev: string, next: string} {
    return {
      prev: 'Prev',
      next: this.id === this.size ? 'Finish' : 'Next',
    };
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
    const question = this.item.question;
    const split = Math.floor(question.length / 3);
  
    const startEnd = question.indexOf(' ', split);
    const middleStart = startEnd + 1;
    const middleEnd = question.lastIndexOf(' ', question.length - split);
  
    return {
      start: question.slice(0, startEnd),
      middle: question.slice(middleStart, middleEnd),
      end: question.slice(middleEnd),
    };
  }
}
