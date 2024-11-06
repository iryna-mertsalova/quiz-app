import { Component, Input, OnInit } from '@angular/core';
import { TextName } from '../../text-types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type: 'accent' | 'ghost' = 'accent';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() iconState: 'next' | 'prev' | 'none' = 'none';
  @Input() disabled: boolean = false;
  @Input() textType: TextName = 'P1';

  imageSrc: string = '../../..//assets/images/chevron.svg';
  iconDeg: string = '';
  iconStyles: { [klass: string]: number | string } = {};

  get classes(): string {
    return [
      this.iconState === 'prev'
        ? 'flex-row-reverse pl-3'
        : this.iconState === 'next'
          ? 'pr-3'
          : '',
      this.size === 'sm' ? 'py-1.5' : 'py-3',
      this.type === 'accent'
        ? 'bg-accent enabled:hover:bg-accent disabled:bg-secondary'
        : 'bg-transparent',
      this.type === 'ghost'
        ? 'border-accent enabled:hover:border-accent disabled:border-secondary'
        : 'border-transparent',
    ].join(' ');
  }

  ngOnInit(): void {
    this.iconStyles = {
      'width.px': 14,
      'height.px': 14,
      'transform': `rotate(${this.iconState == 'next' ? '180deg' : this.iconState === 'prev' ? '0deg' : ''})`,
    };
  }
}
