import { Component, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionModel } from '../../services/model/question.model';
import { StoreService } from '../../services/store.service';
import { BehaviorSubject, combineLatest, map, Observable, take, tap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './question.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuestionComponent implements OnInit {
  @Input() quiz: string = '';

  questions$!: Observable<QuestionModel[]>;
  isLoading$!: Observable<boolean>;
  currentIndex$ = new BehaviorSubject<number>(0);
  currentQuestion$!: Observable<QuestionModel>;

  constructor(private route: ActivatedRoute, private storeService: StoreService) {}

  nextQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex < 9) {
      this.currentIndex$.next(currentIndex + 1);
    }
  }

  prevQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex > 0) {
      this.currentIndex$.next(currentIndex - 1);
    }
  }

  get options(): Observable<string[]> {
    return this.currentQuestion$.pipe(
      take(1),
      map((item) => {
        return [ ...item.incorrect_answers, item.correct_answer ].sort().reverse();
      })
    );
  }

  get id(): number {
    return this.currentIndex$.value + 1;
  }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.quiz = this.route.snapshot.params['name'];
    this.questions$ = this.storeService.getQuestions();
    this.isLoading$ = this.storeService.getLoadingQuestions();
    this.storeService.loadQuestions(); 
     
    this.currentQuestion$ = combineLatest([ this.questions$, this.currentIndex$ ]).pipe(
      map(([ questions, index ]) => questions?.[index] || { question: '', type: false, difficulty: '', category: '', correct_answer: '', incorrect_answers: [] })
    );
  }
}
