import { IGroup } from '@/types/groups';

const kids: IGroup[] = [
  {
    days: 'Пн / Ср / Пт',
    period: 'Ранок',
    start: '03.11',
    details: { format: 'Ноу Гі', coach: 'Андрій' },
  },
  {
    days: 'Пн / Ср / Пт',
    period: 'Вечір',
    start: '03.11',
    details: { format: 'Гі', coach: 'Володимир' },
  },
  {
    days: 'Вт / Чт',
    period: 'Вечір',
    start: '03.11',
    details: { format: 'Ноу Гі', coach: 'Бучеча' },
  },
];

export default { kids };
