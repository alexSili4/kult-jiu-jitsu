import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import {
  Content,
  Section,
  Container,
  Symbol,
  Title,
} from './ScheduleSection.styled';
import SectionTitle from '@/components/common/SectionTitle';

const ScheduleSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Розклад' isHidden />
      <Content>
        <GeneralContainer>
          <Container>
            <Title>
              <Symbol>•</Symbol>
              <span>[Розклад)</span>
            </Title>
            <ScheduleDetails />
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default ScheduleSection;
