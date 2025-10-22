import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section } from './CoachesSection.styled';
import SectionTitle from '@/components/common/SectionTitle';

const CoachesSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <SectionTitle text='тренери' />
      </GeneralContainer>
    </Section>
  );
};

export default CoachesSection;
