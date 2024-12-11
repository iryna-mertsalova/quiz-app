import { Injectable } from '@angular/core';
import { ModalWindowModel } from './model/modal.model';
import { ModalRoutes } from '../utils/modal-routes.enum';

@Injectable({
  providedIn: 'root',
})
export class ModalWindowService {
  private item: ModalWindowModel = { page: '', text: '', title: '', link: '' };

  getData(path: string): ModalWindowModel {
    const updatedPath = path.trim();
    switch (updatedPath) {
      case ModalRoutes.ToCatalog:
      case ModalRoutes.QuizzesCatalog:
        this.item.page = 'quizzes catalog';
        this.item.link = 'quizzes-catalog';
        break;
      case '':
        this.item.page = 'main page';
        this.item.link = 'main';
        break;
      default:
        this.item.page = updatedPath.toLowerCase();
        this.item.link = updatedPath.toLowerCase();
        break;
    }

    if (updatedPath.toLowerCase().includes('finish')) {
      this.item = {
        link: 'statistics',
        page: 'statistics',
        title: 'Finish quiz',
        text: 'To get your quiz result, please, confirm this action and go to the page with the conclusion.',
      };
    } else {
      this.item.title = 'Leave quiz';
      this.item.text = 'Are you sure you want to exit and cancel the quiz? Your answers will not be saved.';
    }
    return this.item;
  }
}
