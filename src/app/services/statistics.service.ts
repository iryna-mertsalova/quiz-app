import { Observable } from 'rxjs';
import { CHART_DATA } from '../test-data/chart.data';
import { QuestionModel } from './model/question.model';
import { Injectable } from '@angular/core';
import { ChartModel } from './model/chart.modal';
import { QuizResultModel } from './model/quiz-result.model';
import { decodeText } from '../utils/decode-html';
import { QUESTIONS_SIZE, SECONDS, STORAGE_KEYS } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
  get getQuizResult(): QuizResultModel | null {
    return this.getFromStorage<QuizResultModel | null>(
      STORAGE_KEYS.QUIZ_RESULT,
      null
    );
  }

  get getStatisticData(): ChartModel[] {
    return this.getFromStorage<ChartModel[]>(
      STORAGE_KEYS.CHART,
      CHART_DATA
    );
  }

  initDefaultStatistic() {
    if (!localStorage.getItem(STORAGE_KEYS.CHART)) {
      this.saveToStorage(STORAGE_KEYS.CHART, CHART_DATA);
    }
  }

  initScore(questions$: Observable<QuestionModel[]>, answers: string[]): number {
    let result: number = 0;
  
    questions$.subscribe((questions) => {
      questions.forEach((question, index) => {
        const isCorrect = decodeText(question.correct_answer) === answers[index];
        if (isCorrect) {
          result++;
        }
      });
    }).unsubscribe();
    return result;
  }  

  initResult(data: QuizResultModel): void {
    this.saveToStorage(STORAGE_KEYS.QUIZ_RESULT, data);

    const statistics = this.getStatisticData;
    statistics[0].count++;
    statistics[1].count += QUESTIONS_SIZE;

    const rightAnswers = parseInt(statistics[1].additionalData[0].value) || 0;
    const wrongAnswers = parseInt(statistics[1].additionalData[1].value) || 0;
    statistics[1].additionalData[0].value = `${rightAnswers + data.score} right`;
    statistics[1].additionalData[1].value = `${
      wrongAnswers + (QUESTIONS_SIZE - data.score)
    } wrong`;

    statistics[2].count += +(data.seconds / SECONDS).toFixed(1);

    this.saveToStorage(STORAGE_KEYS.CHART, statistics);
  } 

  private getFromStorage<T>(key: string, defaultValue: T): T {
    try {
      const data = localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }

  private saveToStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
