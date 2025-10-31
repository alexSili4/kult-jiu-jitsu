import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Content, Section, Container } from './ScheduleSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import ScheduleList from '@MainPageComponents/ScheduleList';
import SectionLabel from '@CommonComponents/SectionLabel';

const ScheduleSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Розклад' isHidden />

      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Розклад' />

            <ScheduleList />
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default ScheduleSection;
