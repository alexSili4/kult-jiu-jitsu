import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import { Container, Content, Section } from './CoachesSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import CoachesList from '@MainPageComponents/CoachesList';
import { useScroll } from 'framer-motion';
import CoachesSlider from '@MainPageComponents/CoachesSlider';

const CoachesSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <Section ref={containerRef}>
      <Container>
        <GeneralContainer>
          <Content>
            <SectionTitle text='тренери' />

            <CoachesList scrollYProgress={scrollYProgress} />
          </Content>
        </GeneralContainer>
        <CoachesSlider />
      </Container>
    </Section>
  );
};

export default CoachesSection;
