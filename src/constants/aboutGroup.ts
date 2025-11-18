import kidsBanner from '@/images/aboutGroup/kids.jpg';
import { IAboutGroup } from '@/types/aboutGroups';
import Belt from '@/icons/aboutGroup/belt.svg?react';
import { LuBaby, LuTimer } from 'react-icons/lu';

const kids: IAboutGroup = {
  title: 'дитячі групи',
  banner: kidsBanner,
  text: 'Програма побудована навколо вправ і ігор, які допомагають ознайомити дітей із базовими рухами та основними цінностями джиу-джитсу.',
  about: [
    {
      text: 'Від 6 років',
      icon: LuBaby,
    },
    {
      text: 'Білий, сірий пояси',
      icon: Belt,
    },
    {
      text: 'Тренування 60 хв',
      icon: LuTimer,
    },
  ],
  goals: [
    'Ознайомлення з базовими позиціями та техніками джиу-джитсу',
    'Вправи для розвитку координації та рухливості',
    'Формування впевненості в собі та комунікативних навичок',
    'Розвиток здатності концентруватися у групі',
  ],
  levels: ['Базовий', 'Середній'],
};

export default { kids };
