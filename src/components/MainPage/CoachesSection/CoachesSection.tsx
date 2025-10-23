import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section } from './CoachesSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import CoachesList from '@MainPageComponents/CoachesList';

const CoachesSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <SectionTitle text='тренери' />

        <CoachesList />
      </GeneralContainer>
    </Section>
  );
};

export default CoachesSection;
