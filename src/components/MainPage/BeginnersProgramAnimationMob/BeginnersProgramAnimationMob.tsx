import { FC } from 'react';
import {
  Container,
  TextWrap,
  CenterShadow,
  Top,
  TopShadow,
  BottomShadow,
  Bottom,
  CenterWrap,
  Center,
  Text,
} from './BeginnersProgramAnimationMob.styled';
import { useInView } from 'framer-motion';

import { useRef } from 'react';

import centerShadow from '@/images/aboutGroup/beginners/shadow-center-mob.webp';
import topShadow from '@/images/aboutGroup/beginners/shadow-top-mob.webp';
import bottomShadow from '@/images/aboutGroup/beginners/shadow-bottom-mob.webp';
import top from '@/images/aboutGroup/beginners/top.webp';
import bottom from '@/images/aboutGroup/beginners/bottom.webp';
import center from '@/images/aboutGroup/beginners/center-mob.webp';

const BeginnersProgramAnimationMob: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 'all' });

  return (
    <Container ref={containerRef}>
      <TopShadow src={topShadow} alt='' />
      <BottomShadow src={bottomShadow} alt='' />
      <CenterShadow src={centerShadow} alt='' />

      <TextWrap
        initial={{ height: 140, overflow: 'hidden' }}
        animate={isInView ? { height: 580 } : { height: 140 }}
        transition={{
          duration: 1.2,
          type: 'spring',
          bounce: 0.2,
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
        <Top src={top} alt='' />
        <Bottom src={bottom} alt='' />
      </TextWrap>
    </Container>
  );
};

export default BeginnersProgramAnimationMob;
