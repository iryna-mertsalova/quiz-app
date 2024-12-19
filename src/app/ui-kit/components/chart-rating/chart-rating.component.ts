import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import { ChartModel } from '../../../services/model/chart.modal';
import { ChartOptions, createChartOptions } from '../../constants/chart.options';

@Component({
  selector: 'app-ui-chart-rating',
  templateUrl: './chart-rating.component.html',
})
export class ChartRatingComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() data: ChartModel[] = [];
  
  chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = createChartOptions(this.data);
  }
}
