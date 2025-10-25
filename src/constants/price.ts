import { IMembership, IService } from '@/types/price';

const memberships: IMembership[] = [
  {
    name: 'Стандарт',
    benefits: [
      '12 тренувань на місяць',
      'Закріплення за одним тренером',
      'Фіксований графік',
      'Стабільна група і свій темп',
    ],
    price: {
      amount: '3 000 грн',
      period: 'місяць',
    },
    isFavorite: false,
  },
  {
    name: 'Безлім',
    benefits: [
      'Необмежена кількість тренувань',
      'Доступ до всіх тренерів і груп',
      'Вільний вибір часу',
      '-15% на каву у залі',
    ],
    price: {
      amount: '3 700 грн',
      period: 'місяць',
    },
    isFavorite: true,
  },
  {
    name: 'Разовий',
    benefits: ['Повноцінне тренування', 'Без обов’язкових підписок'],
    price: {
      amount: '400 грн',
      period: 'тренування',
    },
    isFavorite: false,
  },
];

const services: IService[] = [
  {
    title: 'Індивідуальні тренування',
    addTitle: 'Подарунковий сертифікат',
    services: [
      {
        service: 'Обговорюються окремо з адміністратором',
        price: null,
      },
    ],
  },
  {
    title: null,
    addTitle: null,
    services: [
      {
        service: 'Заморозка абонемента',
        price: '300 грн',
      },
      {
        service: 'Прокат гі',
        price: '300 грн',
      },
      {
        service: 'Прання гі',
        price: '100 грн',
      },
    ],
  },
  {
    title: 'Опенмати та заходи',
    addTitle: null,
    services: [
      {
        service: 'Для членів клубу з абонементом',
        price: 'безкоштовно',
      },
      {
        service: 'Для гостей',
        price: '400 грн',
      },
    ],
  },
];

export default { memberships, services };
