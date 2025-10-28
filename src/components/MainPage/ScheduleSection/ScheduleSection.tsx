import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Content, Section, Container } from './ScheduleSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import ScheduleDetails from '@MainPageComponents/ScheduleDetails';
import SectionLabel from '@CommonComponents/SectionLabel';

const ScheduleSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Розклад' isHidden />

      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Розклад' />

            <ScheduleDetails />
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default ScheduleSection;
