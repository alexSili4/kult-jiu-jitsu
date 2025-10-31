import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section, Content, Container, Text } from './AboutSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import SectionLabel from '@CommonComponents/SectionLabel';

const AboutSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Про нас' isHidden />
      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Про нас' />
            <Text>
              Ми не про змагання, ми про відчуття моменту. Про спокій у русі,
              про сміх після спарингу, про повагу без пафосу. Ми живемо життя,
              вчимося чути тіло та тримати баланс, коли навколо хаос. Kult це
              простір, де можна бути собою. Просто прийти, видихнути, і знайти
              ритм серед своїх.
            </Text>
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default AboutSection;
