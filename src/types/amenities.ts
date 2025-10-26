import { IconType } from 'react-icons';

export interface IAmenitiesItem {
  icon: IconType | null;
  text: string | null;
}

export interface IImage {
  src: string;
  alt: string;
}
