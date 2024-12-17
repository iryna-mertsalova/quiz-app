import { Component, HostListener, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionModel } from '../../services/model/question.model';
import { StoreService } from '../../services/store.service';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  of,
  take,
} from 'rxjs';
import { QUESTIONS_SIZE } from '../../utils/constants';
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
export class QuestionComponent implements OnInit {
  @Input() quiz: string = '';

  questions$!: Observable<QuestionModel[]>;
  isLoading$!: Observable<boolean>;
  currentIndex$ = new BehaviorSubject<number>(0);
  currentQuestion$!: Observable<QuestionModel>;
  answers$ = new BehaviorSubject<string[]>([]);
  
  modalWindowState$ = new BehaviorSubject<boolean>(false);
  modalWindowChoice$ = new BehaviorSubject<boolean>(false);
  modalWindowData$ = new BehaviorSubject<ModalWindowModel>({ page: '', title: '', text: '', link: '' });

  private nextRoute: string = '';
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
    private modalService: ModalWindowService
  ) {}

  canDeactivate(): Observable<boolean> {
    if (this.currentIndex$.value == QUESTIONS_SIZE) {
      this.nextRoute = '/finish';
    }
    
    this.modalWindowData$ = new BehaviorSubject<ModalWindowModel>(this.modalService.getData(this.nextRoute));
    this.modalWindowState$.next(true);
    if (this.modalWindowState$.value && this.modalWindowChoice$.value) {
      return of(true);
    }
    return of(false);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: BeforeUnloadEvent): void {
    $event.preventDefault();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
      event.preventDefault();
      this.nextRoute = ModalRoutes.Refresh;
      this.modalWindowData$ = new BehaviorSubject<ModalWindowModel>(this.modalService.getData(ModalRoutes.Refresh));
      this.modalWindowState$.next(true);
    }
  }

  handleModalResponse(confirm: boolean): void {
    if (confirm) {
      if (this.nextRoute == ModalRoutes.Refresh) {
        window.location.reload();
      } else {
        this.modalWindowChoice$.next(true);
        this.router.navigateByUrl(this.modalWindowData$.value.link);
      }
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

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.nextRoute = event.url;
    });
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
      this.router.navigateByUrl('/finish');
    }
  }

  prevQuestion(): void {
    const currentIndex = this.currentIndex$.value;
    if (currentIndex > 0) {
      this.currentIndex$.next(currentIndex - 1);
    }    
  }

  setSelectedAnswer(value: string): void {
    this.answers$.getValue()[this.currentIndex$.value] = value;
  }
}
