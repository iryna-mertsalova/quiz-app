import { Component, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionModel } from '../../services/model/question.model';
import { StoreService } from '../../services/store.service';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  take,
} from 'rxjs';
import { QUESTIONS_SIZE } from '../../utils/constants';

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
  answers: string[] = new Array<string>(QUESTIONS_SIZE);

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
  ) {}

  nextQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex < QUESTIONS_SIZE - 1) {
      this.currentIndex$.next(currentIndex + 1);
    }
  }

  prevQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex > 0) {
      this.currentIndex$.next(currentIndex - 1);
    }
  }

  getSelectedAnswer(value: string): void {
    this.answers[this.currentIndex$.value] = value;
  }

  get options(): Observable<string[]> {
    return this.currentQuestion$.pipe(
      take(1),
      map((item) => {
        return [ ...item.incorrect_answers, item.correct_answer ]
        .sort()
        .reverse();
      }),
    );
  }

  get id(): number {
    return this.currentIndex$.value + 1;
  }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.quiz = this.route.snapshot.params['id'];
    this.questions$ = this.storeService.getQuestions();
    this.isLoading$ = this.storeService.getLoadingQuestions();
    this.storeService.loadQuestions(Number.parseInt(this.quiz));

    this.currentQuestion$ = combineLatest([
      this.questions$,
      this.currentIndex$,
    ]).pipe(
      map(
        ([ questions, index ]) => questions?.[index] || {
          question: '',
          type: false,
          difficulty: '',
          category: '',
          correct_answer: '',
          incorrect_answers: [],
        },
      ),
    );
  }
}
