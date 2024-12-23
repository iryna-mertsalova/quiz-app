import {
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexStates,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { ChartModel } from '../../services/model/chart.modal';
import { TextTypes, textTypesClasses } from './text-types';

export type ChartOptions = {
  series: number[];
  chart: ApexChart;
  responsive: ApexResponsive[];
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  states: ApexStates;
};

function getLegendChart(item: ChartModel): string {
  const countTextType: TextTypes = 'P1';
  const additionalInfoType: TextTypes = 'P2';
  const descriptionTextType: TextTypes = 'Label';

  const additionalHtml = item.additionalData
  .map(data => `<p class="pr-1.5 px-0.5 ${data.className} ${textTypesClasses[additionalInfoType]}">${data.value}</p>`)
  .join('');

  return `
      <div class='w-full flex lg:py-3 max-lg:py-1.5'>
        <span class='block bg-${item.color.className} w-10 h-10 rounded mx-2'></span>
          <span>
            <span class='flex items-end max-md:flex-wrap '>
            <p class='${textTypesClasses[countTextType]} text-primary'>${item.count}</p>
            <span class='flex items-end'>${additionalHtml}</span>
          </span>        
          <p class='${textTypesClasses[descriptionTextType]} text-secondary'>${item.description}</p>
        </span>
      </div>
    `;
}

const pieOptions = {
  startAngle: -45,
  endAngle: 315,
  expandOnClick: true,
  offsetX: 0,
  offsetY: 0,
  customScale: 1,
  donut: {
    size: '45%',
  },
};

const responsiveOptions = [
  {
    breakpoint: 768,
    options: {
      legend: {
        position: 'bottom',
        horizontalAlign: 'start',
      },
    },
  },
];

export function createChartOptions(data: ChartModel[]): Partial<ChartOptions> {
  return {
    series: data.map(item => item.count)!,
    chart: {
      type: 'donut',
      width: '100%',
      height: 500,
    },
    dataLabels: {
      enabled: false,
    },
    colors: data.map(item => item.color.value)!,
    legend: {
      markers: {
        customHTML: () => '',
      },
      show: true,
      formatter: (seriesName, opts) => getLegendChart(data[opts.seriesIndex]),
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
        },
      },
    },
    plotOptions: { pie: pieOptions },
    responsive: responsiveOptions,
  };
}
