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
  inGroup?: string[];
  goals: string[] | null;
  levels: string[] | null;
  levelsDesc?: string;
  requirements?: string[];
  features?: string[];
  note?: string;
}
