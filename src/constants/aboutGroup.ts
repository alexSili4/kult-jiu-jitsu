import kidsBanner from '@/images/aboutGroup/kids.jpg';
import { IAboutGroup } from '@/types/aboutGroups';
import Belt from '@/icons/aboutGroup/belt.svg?react';
import { LuBaby, LuTimer } from 'react-icons/lu';

const kids: IAboutGroup = {
  title: 'дитячі групи',
  banner: kidsBanner,
  text: 'Тренування для маленьких самураїв та амазонок !',
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
    'Програма побудована для гармонійного фізичного та ментального розвитку вашої малечі.',
    'Головне завдання груп привчити дітей до активного способу життя, взаємодії в колективі та навичкам самозахисту в ігровій формі.',
  ],
  levels: ['Базовий', 'Середній'],
};

export default { kids };
