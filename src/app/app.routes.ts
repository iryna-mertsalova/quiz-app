import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'quizzes-catalog', loadComponent: () => import('../app/pages/quizzes-catalog/quizzes-catalog.component').then(x => x.QuizzesCatalogComponent) },
  { path: 'quiz/:id', loadComponent: () => import('./pages/quiz/quiz.component').then(x => x.QuizComponent) },
  { path: 'statistics', loadComponent: () => import('../app/pages/statistics/statistics.component').then(x => x.StatisticsComponent) },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
];
