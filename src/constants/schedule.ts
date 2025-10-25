import { IScheduleItem } from '@/types/schedule';

const schedule: IScheduleItem[] = [
  {
    days: 'Пн / Ср / Пт',
    programs: [
      [
        { time: '07:30 - 09:00', program: 'Ноу Гі, база', coach: 'Андрій' },
        {
          time: '09:00 - 10:00',
          program: 'Ноу Гі, початківці',
          coach: 'Андрій',
        },
        { time: '10:15 - 11:45', program: 'Ноу Гі, змішана', coach: 'Андрій' },
      ],
      [
        { time: '18:00 - 19:00', program: 'Гі, початківці', coach: 'Вова' },
        { time: '19:15 - 20:45', program: 'Гі, базова', coach: 'Вова' },
      ],
    ],
  },
  {
    days: 'Вт / Чт',
    programs: [
      [
        { time: '07:30 - 09:00', program: 'Гі, база', coach: 'Бучеча' },
        { time: '09:00 - 10:00', program: 'Гі, початківці', coach: 'Бучеча' },
        { time: '10:15 - 11:45', program: 'Гі, змішана', coach: 'Бучеча' },
      ],
      [
        {
          time: '18:00 - 19:00',
          program: 'Ноу Гі, початківці',
          coach: 'Андрій',
        },
        { time: '00:00 - 00:00', program: 'Ноу Гі, база', coach: 'Андрій' },
      ],
    ],
  },
  {
    days: 'Сб',
    programs: [
      [
        {
          time: '09:00 - 10:00',
          program: 'Ноу Гі, початківці',
          coach: 'Андрій',
        },
        { time: '10:00', program: 'Ноу Гі, леглоки', coach: 'Андрій' },
        { time: '11:00', program: 'Ноу Гі, спаринги', coach: 'Андрій' },
      ],
    ],
  },
  {
    days: 'Нд',
    programs: [
      [
        { time: '10:00-11:00', program: 'Гі, початківці', coach: 'Бучеча' },
        { time: '11:00', program: 'Гі, стійка', coach: 'Бучеча' },
        { time: '12:00', program: 'Гі, спаринги', coach: 'Бучеча' },
      ],
    ],
  },
];

export default schedule;
