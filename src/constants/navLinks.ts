import { INavLink } from '@/types/common';
import SectionId from './sectionId';

const navLinks: INavLink[] = [
  { href: `#${SectionId.coaches}`, label: 'Тренери' },
  { href: `#${SectionId.price}`, label: 'Прайс' },
  { href: `#${SectionId.amenities}`, label: 'Зручності' },
  { href: `#${SectionId.veterans}`, label: 'Для ветеранів' },
  { href: `#${SectionId.contacts}`, label: 'Як знайти' },
];

export default navLinks;
