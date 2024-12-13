import { Component, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionModel } from '../../services/model/question.model';
import { StoreService } from '../../services/store.service';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  take,
} from 'rxjs';
import { QUESTIONS_SIZE } from '../../utils/constants';
import { CanComponentDeactivate } from '../../guards/can-deactivate.interface';
import { ModalWindowModel } from '../../services/model/modal.model';
import { ModalWindowService } from '../../services/modal.service';
import { ModalRoutes } from '../../utils/modal-routes.enum';
import { decodeText } from '../../utils/decode-html';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './question.component.html',
  imports: [ UIKitModule, CommonModule ],
})
export class QuestionComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
  @Input() quiz: string = '';

  questions$!: Observable<QuestionModel[]>;
  isLoading$!: Observable<boolean>;
  isNotification$ = new BehaviorSubject<boolean>(false);
  currentIndex$ = new BehaviorSubject<number>(0);
  currentQuestion$!: Observable<QuestionModel>;
  answers: string[] = new Array<string>(QUESTIONS_SIZE);
  
  modalWindowState$ = new BehaviorSubject<boolean>(false);
  modalWindowChoice$ = new BehaviorSubject<boolean>(false);
  modalWindowData$ = new BehaviorSubject<ModalWindowModel>({ page: '', title: '', text: '', link: '' });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
    private modalService: ModalWindowService
  ) {}

  canDeactivate(): Observable<boolean> {
    if (this.currentIndex$.value == QUESTIONS_SIZE) {
      this.modalWindowData$ = new BehaviorSubject<ModalWindowModel>(this.modalService.getData(ModalRoutes.Finish));
    }
    const item = event?.target as HTMLElement;
    this.modalWindowData$ = new BehaviorSubject<ModalWindowModel>(this.modalService.getData(item.textContent!));
    this.modalWindowState$.next(true);
    if (this.modalWindowState$.value && this.modalWindowChoice$.value) {
      return of(true);
    }
    return of(false);
  }

  handleModalResponse(confirm: boolean): void {
    if (confirm) {
      this.modalWindowChoice$.next(true);
      this.router.navigateByUrl(this.modalWindowData$.value.link);
    } else {
      this.modalWindowChoice$.next(false);
    }
    this.modalWindowState$.next(false);
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
    this.quiz = this.activeRoute.snapshot.params['id'];
    this.questions$ = this.storeService.getQuestions();
    this.isLoading$ = this.storeService.getLoadingQuestions();
    this.storeService.loadQuestions(Number.parseInt(this.quiz));

    this.currentQuestion$ = combineLatest([
      this.questions$,
      this.currentIndex$,
    ]).pipe(
      map(
        ([ questions, index ]) => {
          const question = questions?.[index] || {
            question: '',
            type: false,
            difficulty: '',
            category: '',
            correct_answer: '',
            incorrect_answers: [],
          };
          return this.decodeQuestion(question);
        }
      ),
    );
  }

  private decodeQuestion(question: QuestionModel): QuestionModel {
    return {
      ...question,
      question: decodeText(question.question),
      category: decodeText(question.category),
      correct_answer: decodeText(question.correct_answer),
      incorrect_answers: question.incorrect_answers.map(decodeText),
    };
  }

  nextQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex < QUESTIONS_SIZE - 1) {
      this.currentIndex$.next(currentIndex + 1);
    } else {
      this.router.navigateByUrl(this.modalWindowData$.value.link);
    }
  }

  prevQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex > 0) {
      this.currentIndex$.next(currentIndex - 1);
    } else {
      this.isNotification$.next(true);
      setTimeout(() => {
        this.isNotification$.next(false);
      }, 2000); 
    }
  }

  setSelectedAnswer(value: string): void {
    this.answers[this.currentIndex$.value] = value;
  }
}
