import { FC } from 'react';
import {
  Container,
  TextWrap,
  LeftShadow,
  RightShadow,
  TopShadow,
  BottomShadow,
  Left,
  Right,
  CenterWrap,
  Center,
  Text,
} from './BeginnersProgramAnimation.styled';

import leftShadow from '@/images/aboutGroup/beginners/shadow-left.webp';
import rightShadow from '@/images/aboutGroup/beginners/shadow-right.webp';
import topShadow from '@/images/aboutGroup/beginners/shadow-top.webp';
import bottomShadow from '@/images/aboutGroup/beginners/shadow-bottom.webp';
import left from '@/images/aboutGroup/beginners/left.webp';
import right from '@/images/aboutGroup/beginners/right.webp';
import center from '@/images/aboutGroup/beginners/center.webp';

const BeginnersProgramAnimation: FC = () => {
  return (
    <Container>
      <LeftShadow src={leftShadow} alt='' />
      <RightShadow src={rightShadow} alt='' />
      <TopShadow src={topShadow} alt='' />
      <BottomShadow src={bottomShadow} alt='' />

      <TextWrap
        initial={{ width: 195, overflow: 'hidden' }}
        whileInView={{ width: 1046 }}
        viewport={{ once: true, amount: 'all' }}
        transition={{
          duration: 1.2,
          type: 'spring',
          bounce: 0.2,
          // ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <CenterWrap>
          <Center src={center} alt='' />
          <Text>
            “Колись шлях у джиу-джитсу починався жорстко: Дітей скидали в прірву
            з кольоровими пасками; Чоловіків змушували здаватись від коліна на
            животі. На щастя, ті часи минули!”
          </Text>
        </CenterWrap>
        <Left src={left} alt='' />
        <Right src={right} alt='' />
      </TextWrap>
    </Container>
  );
};

export default BeginnersProgramAnimation;
