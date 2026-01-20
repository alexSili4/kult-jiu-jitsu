import { FC } from 'react';
import GeneralContainer from '@CommonComponents/GeneralContainer';
import {
  BambooLeft,
  Container,
  LeftWrap,
  BambooRight,
  MansLeft,
  MansRight,
  Section,
} from './BeginnersProgramDecorativeElements.styled';
import bambooLeft from '@/images/aboutGroup/beginners/bamboo-left.webp';
import mansLeft from '@/images/aboutGroup/beginners/mans-left.webp';
import bambooRight from '@/images/aboutGroup/beginners/bamboo-right.webp';
import mansRight from '@/images/aboutGroup/beginners/mans-left.webp';

const BeginnersProgramDecorativeElements: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <LeftWrap>
            <BambooLeft src={bambooLeft} alt='' />
            <MansLeft src={mansLeft} alt='' />
            <BambooRight src={bambooRight} alt='' />
          </LeftWrap>

          <MansRight src={mansRight} alt='' />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default BeginnersProgramDecorativeElements;
