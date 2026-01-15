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

const basic: IGroup[] = [
  {
    days: 'Вт / Чт',
    period: 'Вечір',
    start: '20:00',
    details: { format: 'Гі', coach: 'Володимир' },
  },
  {
    days: 'Сб',
    period: 'День',
    start: '12:00',
    details: { format: 'Гі / Ноу Гі', coach: 'Андрій' },
  },
];

const beginners: IGroup[] = [
  {
    days: 'Пн / Ср / Пт',
    period: 'Вечір',
    start: '18:30',
    details: { format: 'Гі', coach: 'Андрій' },
  },
  {
    days: 'Вт / Чт',
    period: 'Ранок',
    start: '08:00',
    details: { format: 'Ноу Гі', coach: 'Бучеча' },
  },
];

const pro: IGroup[] = [
  {
    days: 'Пн / Ср / Пт',
    period: 'Вечір',
    start: '20:00',
    details: { format: 'Гі / Ноу Гі', coach: 'Володимир' },
  },
  {
    days: 'Вт / Чт',
    period: 'Вечір',
    start: '18:30',
    details: { format: 'Ноу Гі', coach: 'Бучеча' },
  },
];

const events: IGroup[] = [
  {
    days: 'Нд',
    period: 'День',
    start: '11:00',
    details: { format: 'Семінар / Спарринги', coach: 'Запрошений гість' },
  },
];

const personal: IGroup[] = [
  {
    days: 'Пн - Нд',
    period: 'За домовленістю',
    start: 'Гнучкий графік',
    details: { format: 'Гі / Ноу Гі', coach: 'Будь-який тренер' },
  },
];

export default { kids, basic, beginners, pro, events, personal };
