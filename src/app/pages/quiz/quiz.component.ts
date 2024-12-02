import { Component, Input, OnInit } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  imports: [UIKitModule],
})
export class QuizComponent implements OnInit {
  @Input() quiz: string = '';
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.quiz = this.route.snapshot.params['name'];
  }
}
