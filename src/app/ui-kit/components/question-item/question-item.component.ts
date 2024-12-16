import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { QuestionModel } from '../../../services/model/question.model';
import { FormControl, Validators } from '@angular/forms';
import { QUESTIONS_SIZE } from '../../../utils/constants';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ui-question-item',
  templateUrl: './question-item.component.html',
})
export class QuestionItemComponent implements OnInit, OnChanges {
  @Input() item: QuestionModel = { question: '', type: false, difficulty: '', category: '', correct_answer: '', incorrect_answers: [] };
  @Input() options: string[] = new Array<string>(4);
  @Input() id: number = 0;
  @Input() selectedAnswer: string = '';
  isNotification$ = new BehaviorSubject<boolean>(false);
  @Output() next = new EventEmitter<void>(); 
  @Output() prev = new EventEmitter<void>(); 
  @Output() getSelectedAnswer = new EventEmitter<string>(); 
  
  formControl = new FormControl();
  size: number = QUESTIONS_SIZE;
  
  images: string[] = [
    'avatars/Profile-1.svg',
    'avatars/Profile-2.svg',
    'avatars/Profile.svg',
  ]; 
  
  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    this.formControl = new FormControl(this.selectedAnswer, Validators.required);
    this.formControl.valueChanges.subscribe((value) => {
      this.getSelectedAnswer.emit(value!);
    });
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
  }
  
  handleNext(): void {
    if (this.formControl.invalid) {
      this.isNotification$.next(true);
      setTimeout(() => {
        this.isNotification$.next(false);
      }, 1500); 
      this.formControl.markAsTouched();
      return;
    }
    this.next.emit();
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
