import { INavLink } from '@/types/common';
import SectionId from './sectionId';

const navLinks: INavLink[] = [
  { href: `#${SectionId.coaches}`, label: 'Тренери', isPublic: true },
  { href: `#${SectionId.programs}`, label: 'Програми занять', isPublic: false },
  {
    href: `#${SectionId.schedule}`,
    label: 'Розклад',
    isPublic: false,
  },
  { href: `#${SectionId.price}`, label: 'Прайс', isPublic: true },
  { href: `#${SectionId.amenities}`, label: 'Зручності', isPublic: true },
  { href: `#${SectionId.veterans}`, label: 'Для ветеранів', isPublic: true },
  { href: `#${SectionId.map}`, label: 'Як знайти', isPublic: true },
];

export default navLinks;
