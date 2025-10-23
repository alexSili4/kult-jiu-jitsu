import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import { Container, Content, Section } from './CoachesSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import CoachesList from '@MainPageComponents/CoachesList';
import { useScroll } from 'framer-motion';

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
      </Container>
    </Section>
  );
};

export default CoachesSection;
