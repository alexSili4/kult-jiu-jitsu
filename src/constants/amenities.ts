import { IAmenitiesItem, IImage } from '@/types/amenities';
import {
  LuShowerHead,
  LuCarFront,
  LuBone,
  LuAccessibility,
  LuCupSoda,
} from 'react-icons/lu';
import photo1 from '@/images/amenities/photo-1.png';
import photo2 from '@/images/amenities/photo-2.png';
import photo3 from '@/images/amenities/photo-3.png';

const list: IAmenitiesItem[] = [
  { icon: LuCupSoda, text: 'Кав’ярня з фільтром і чаєм' },
  { icon: LuBone, text: 'Пет-френдлі простір' },
  { icon: LuCarFront, text: 'Парковка' },
  { icon: LuShowerHead, text: 'Душ і роздягальня' },
  { icon: LuAccessibility, text: 'Інклюзивний санвузол та  підйомник' },
  { icon: null, text: null },
];

const images: IImage[] = [
  { src: photo1, alt: 'Душ' },
  { src: photo2, alt: 'Зал' },
  { src: photo3, alt: 'Рецепція' },
];

export default { list, images };
