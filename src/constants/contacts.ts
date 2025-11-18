import mapImgDesk from '@/images/contacts/map-desk.jpg';
import mapImgMob from '@/images/contacts/map-mob.jpg';
import { INavLink } from '@/types/common';
import { IMap } from '@/types/contacts';

const startMob = { bottom: '46%', right: '8%' };
const startDesk = { bottom: '45.44%', right: '23.34%' };

const map: Record<'mob' | 'desk', IMap> = {
  mob: {
    img: mapImgMob,
    start: startMob,
    finish: { bottom: '62.13%', right: '44.9%' },
    path: [
      startMob,
      { bottom: '25.7%', right: '29%' },
      { bottom: '43%', right: '48%' },
      { bottom: '52%', right: '39%' },
      { bottom: '59%', right: '48%' },
      { bottom: '61.19%', right: '46%' },
    ],
    parking: [
      { bottom: '47%', right: '36%' },
      { bottom: '54.5%', right: '52.5%' },
    ],
  },
  desk: {
    img: mapImgDesk,
    start: startDesk,
    finish: { bottom: '62.13%', right: '44.9%' },
    path: [
      startDesk,
      { bottom: '22.85%', right: '35.44%' },
      { bottom: '41.68%', right: '46%' },
      { bottom: '51.9%', right: '40.88%' },
      { bottom: '60.25%', right: '46%' },
      { bottom: '61.19%', right: '45.5%' },
    ],
    parking: [
      { bottom: '47.18%', right: '39%' },
      { bottom: '55.4%', right: '47.94%' },
    ],
  },
};

const mapLink =
  'https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+6,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.467195,30.5091715,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce6c9e78554d:0xe14ad1e3c6004a36!8m2!3d50.467195!4d30.5091715!16s%2Fg%2F1vn_xh4g?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D';

const coaches = ['Вова', 'Бучеча', 'Андрій'];

const instasport: INavLink = {
  href: 'https://instasport.ua/club/kult_jiujitsu',
  label: 'Instasport',
  isPublic: true,
};

export default { mapLink, coaches, map, instasport };
