import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import {
  Section,
  Container,
  Location,
  PageTitle,
  Country,
  Symbol,
} from './HeroSection.styled';

const HeroSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <Location>
            <Symbol>•</Symbol>
            <span>
              Ми в Києві, <Country>Україна</Country>
            </span>
          </Location>
          <PageTitle>
            KULT JIU JITSU<Symbol>*</Symbol>
          </PageTitle>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
