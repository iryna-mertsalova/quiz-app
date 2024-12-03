import { Component, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute } from '@angular/router';
import { QUIZ_DATA } from '../../test-data/quiz';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './question.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuizComponent implements OnInit {
  @Input() quiz: string = '';
  quiz_data = QUIZ_DATA;
  currentIndex: number = 0;
  
  constructor(private route: ActivatedRoute) {}

  nextQuestion() {
    if (this.currentIndex < this.quiz_data.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.quiz = this.route.snapshot.params['name'];
  }
}
