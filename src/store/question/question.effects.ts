import { DestroyRef, inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  catchError,
  map,
  of,
  switchMap,
} from 'rxjs';
import * as QuestionActions from './question.actions';
import { ErrorHandleService } from '../../app/services/error.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuestionService } from '../../app/services/question.service';
import { QuestionModel } from '../../app/services/model/question.model';

@Injectable()
export class QuestionEffects {
  constructor(private questionService: QuestionService, private errorService: ErrorHandleService, private store: Store<AppState>, private destroyRef: DestroyRef) {}

  loadQuestions$ = createEffect(() => inject(Actions)
  .pipe(ofType(QuestionActions.loadQuestions),
    switchMap(() => this.store.select(state => state.questions.questions).pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap((questions) => {
        if (questions && questions.length > 0) {
          return of(QuestionActions.loadQuestionsSuccess({ questions }));
        }
        return this.questionService.get(11).pipe(
          map((questions : QuestionModel[]) => QuestionActions.loadQuestionsSuccess({ questions })),
          catchError((error) => {
            this.errorService.handleError(error); 
            return of(QuestionActions.loadQuestionsFail({ error }));
          })
        );    
      })
    ))));
}
