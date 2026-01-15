import { Programs } from '@/types/programs';
import beginners from '@/images/programs/beginners.png';
import basic from '@/images/programs/basic.png';
import pro from '@/images/programs/mixed.png';
import kids from '@/images/programs/kids.png';
import personal from '@/images/programs/personal.png';
import events from '@/images/programs/events.png';

const programs: Programs = {
  beginners: {
    label: 'Початківці',
    desc: '(ноу гі, гі)',
    image: beginners,
  },
  basic: {
    label: 'Базова група',
    desc: '(ноу гі, гі)',
    image: basic,
  },
  pro: {
    label: 'Про група',
    desc: '(ноу гі, гі)',
    image: pro,
  },
  kids: {
    label: 'Дитячі групи',
    desc: null,
    image: kids,
  },
  personal: {
    label: 'Індивідуальні тренування',
    desc: null,
    image: personal,
  },
  events: {
    label: 'Спаринги та заходи',
    desc: null,
    image: events,
  },
};

export default programs;
