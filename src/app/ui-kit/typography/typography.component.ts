import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnInit {
  @Input() name: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P1' | 'P2' | 'Label' = 'P1';

  classes: string = '';
  ngOnInit(): void {
    this.classes = this.name === 'H1'
      ? 'text-7xl leading-[86px] font-semibold'
      : this.name == 'H2'
        ? 'text-[64px] leading-[76px] font-semibold'
        : this.name == 'H3'
          ? 'text-[56px] leading-[68px] font-light'
          : this.name == 'H4'
            ? 'text-4xl leading-10 font-semibold'
            : this.name == 'H5'
              ? 'text-3xl leading-9 font-semibold'
              : this.name == 'H6'
                ? 'text-2xl leading-7 font-semibold'
                : this.name == 'P1'
                  ? 'text-base leading-6 font-normal'
                  : this.name == 'P2'
                    ? 'text-sm leading-5 font-normal'
                    : this.name == 'Label'
                      ? 'text-xs leading-4 font-normal'
                      : '';
  }
}
