import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type: 'accent' | 'ghost' = 'accent';
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() iconState: string = '';
  @Input() disabled = false;

  classes: string = '';
  imageSrc: string = '../../..//assets/images/chevron.svg';
  iconDeg: string = '';
  iconStyles: any = '';

  ngOnInit(): void {
    this.iconDeg = this.iconState == 'next' ? '180deg' : '0deg';
    this.classes = `${this.iconState === 'prev' ? 'flex-row-reverse pl-3' : this.iconState === 'next' ? 'pr-3' : ''} ${this.size === 'sm' ? 'py-1.5' : 'py-3'} ${this.type === 'accent' ? 'bg-accent enabled:hover:bg-accent disabled:bg-secondary' : 'bg-transparent'} ${this.type === 'ghost' ? 'border-accent enabled:hover:border-accent disabled:border-secondary' : 'border-transparent'}`;
    this.iconStyles = { 'width.px': 14, 'height.px': 14, 'transform': `rotate(${this.iconDeg})` };
  }
}
