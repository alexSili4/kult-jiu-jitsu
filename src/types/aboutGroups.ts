import { FC } from 'react';
import { IconType } from 'react-icons';

export interface IAboutGroup {
  title: string;
  banner: string;
  text: string;
  about: {
    text: string;
    icon: IconType | FC;
  }[];
  goals: string[];
  levels: string[];
}
