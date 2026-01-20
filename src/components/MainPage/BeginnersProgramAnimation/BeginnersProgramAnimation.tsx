import { FC } from 'react';
import {
  Container,
  TextWrap,
  LeftShadow,
  RightShadow,
  TopShadow,
  BottomShadow,
} from './BeginnersProgramAnimation.styled';
import leftShadow from '@/images/aboutGroup/beginners/shadow-left.webp';
import rightShadow from '@/images/aboutGroup/beginners/shadow-right.webp';
import topShadow from '@/images/aboutGroup/beginners/shadow-top.webp';
import bottomShadow from '@/images/aboutGroup/beginners/shadow-bottom.webp';

const BeginnersProgramAnimation: FC = () => {
  return (
    <Container>
      <LeftShadow src={leftShadow} alt='' />
      <RightShadow src={rightShadow} alt='' />
      <TopShadow src={topShadow} alt='' />
      <BottomShadow src={bottomShadow} alt='' />

      <TextWrap></TextWrap>
    </Container>
  );
};

export default BeginnersProgramAnimation;
