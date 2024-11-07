import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { QuizzesCatalogComponent } from './pages/quizzes-catalog/quizzes-catalog.component';
import { QuestionComponent } from './pages/question/question.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'quizzes-catalog', component: QuizzesCatalogComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: MainComponent },
];
