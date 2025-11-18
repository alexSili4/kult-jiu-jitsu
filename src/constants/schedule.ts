import { ICoach, IScheduleItem } from '@/types/schedule';

export const andrew: ICoach = { name: 'Андрій', id: 'andrew' };
export const volodymyr: ICoach = { name: 'Володимир', id: 'volodymyr' };
export const buchecha: ICoach = { name: 'Бучеча', id: 'buchecha' };

const schedule: IScheduleItem[] = [
  {
    days: 'Пн / Ср / Пт',
    programs: [
      [
        { time: '07:30 - 09:00', program: 'Ноу Гі, база', coach: andrew },
        {
          time: '09:00 - 10:00',
          program: 'Ноу Гі, початківці',
          coach: andrew,
        },
        {
          time: '10:15 - 11:45',
          program: 'Ноу Гі, змішана',
          coach: andrew,
        },
      ],
      [
        {
          time: '18:00 - 19:00',
          program: 'Гі, початківці',
          coach: volodymyr,
        },
        { time: '19:15 - 20:45', program: 'Гі, базова', coach: volodymyr },
      ],
    ],
  },
  {
    days: 'Вт / Чт',
    programs: [
      [
        { time: '07:30 - 09:00', program: 'Гі, база', coach: buchecha },
        {
          time: '09:00 - 10:00',
          program: 'Гі, початківці',
          coach: buchecha,
        },
        { time: '10:15 - 11:45', program: 'Гі, змішана', coach: buchecha },
      ],
      [
        {
          time: '18:00 - 19:00',
          program: 'Ноу Гі, початківці',
          coach: andrew,
        },
        { time: '00:00 - 00:00', program: 'Ноу Гі, база', coach: andrew },
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
          coach: andrew,
        },
        { time: '10:00', program: 'Ноу Гі, леглоки', coach: andrew },
        { time: '11:00', program: 'Ноу Гі, спаринги', coach: andrew },
      ],
    ],
  },
  {
    days: 'Нд',
    programs: [
      [
        {
          time: '10:00-11:00',
          program: 'Гі, початківці',
          coach: buchecha,
        },
        { time: '11:00', program: 'Гі, стійка', coach: buchecha },
        { time: '12:00', program: 'Гі, спаринги', coach: buchecha },
      ],
    ],
  },
];

export default schedule;
