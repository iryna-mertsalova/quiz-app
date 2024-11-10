import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  logoSrc: string = 'main-logo.svg';
  isMenuOpen = false;

  menuItems = [
    { link: 'quizzes-catalog', label: 'Quizzes catalog' },
    { link: 'question', label: 'Question' },
    { link: 'statistics', label: 'Statistics' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
