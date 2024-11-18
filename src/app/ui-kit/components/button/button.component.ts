import { Component, Input, OnInit } from '@angular/core';
import { TextTypes } from '../../constants/text-types';

@Component({
  selector: 'app-ui-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type: 'accent' | 'ghost' = 'accent';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() iconState: 'next' | 'prev' | 'none' = 'none';
  @Input() disabled: boolean = false;
  @Input() textType: TextTypes = 'P1';

  imageSrc: string = 'chevron.svg';
  iconRotate: string = '';
  iconStyles: { [klass: string]: string | number } = {};

  get classes(): string {
    return [ this.iconStateStyle, this.sizeStyle, this.typeStyle ].join(' ');
  }

  get iconStateStyle(): string {
    switch (this.iconState) {
      case 'prev':
        this.iconRotate = '0deg';
        return 'flex-row-reverse pl-3';
      case 'next':
        this.iconRotate = '180deg';
        return 'pr-3';
      default:
        return '';
    }
  }

  get sizeStyle(): string {
    if (this.size == 'sm') {
      return 'py-1.5';
    }
    return 'py-3';
  }

  get typeStyle(): string {
    switch (this.type) {
      case 'accent':
        return 'bg-accent enabled:hover:bg-accent disabled:bg-secondary border-transparent';
      case 'ghost':
        return 'border-accent enabled:hover:border-accent disabled:border-secondary';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    if (this.iconState === 'next') {
      this.iconRotate = '180deg';
    }
    if (this.iconState === 'prev') {
      this.iconRotate = '0deg';
    }
    this.iconStyles = {
      'width.px': 14,
      'height.px': 14,
      'transform': `rotate(${this.iconRotate})`,
    };
  }
}
