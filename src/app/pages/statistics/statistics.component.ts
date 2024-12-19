import { Component } from '@angular/core';
import { UIKitModule } from '../../ui-kit/ui-kit.module';
import { QUESTIONS_SIZE } from '../../utils/constants';
import { ChartModel } from '../../services/model/chart.modal';
import { CHART_DATA } from '../../test-data/chart.data';

@Component({
  standalone: true,
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  imports: [UIKitModule],
})
export class StatisticsComponent {
  chartData: ChartModel[] = CHART_DATA;
  size: number = QUESTIONS_SIZE;
  testMark: number = 8;
  testTime: string = '24 min';
  testText: string = 'Good try! Why not have another go? You might get a bigger score!';
}
