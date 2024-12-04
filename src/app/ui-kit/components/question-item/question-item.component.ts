import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from '../../../services/model/question.model';
import { FormControl, FormGroup } from '@angular/forms';

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
  
  form = new FormGroup({
    selectedOption: new FormControl<string | null>(null),
  });

  get selectedAnswer() {
    return this.form.get('selectedOption')?.value;
  }

  handlePrev(): void {
    this.prev.emit();
    this.form.reset();
  }
  
  handleNext(): void {
    this.next.emit();
    this.form.reset();
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
