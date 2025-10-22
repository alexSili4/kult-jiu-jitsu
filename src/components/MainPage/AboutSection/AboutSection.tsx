import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section } from './AboutSection.styled';

const AboutSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <p>AboutSection</p>
      </GeneralContainer>
    </Section>
  );
};

export default AboutSection;
