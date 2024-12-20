import { ChartModel } from '../services/model/chart.modal';

export const CHART_DATA: ChartModel[] = [
  {
    count: 67,
    color: { className: 'warning', value: '#FEFD54' },
    description: '33 Quizzes were played',
    additionalData: [{ className: '', value: '' }],
  },
  {
    count: 670,
    color: { className: 'success', value: '#63C995' },
    description: '330 Questions have been answered',
    additionalData: [
      { className: 'text-success', value: '600 right' },
      { className: 'text-error', value: '70 wrong' },
    ],
  },
  {
    count: 675,
    color: { className: 'accent', value: '#3545E9' },
    description: '32 min Average time of answering quizzes',
    additionalData: [{ className: '', value: 'min' }],
  },
];