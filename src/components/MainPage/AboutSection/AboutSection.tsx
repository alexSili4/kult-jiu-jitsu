import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section, Content, Container, Text } from './AboutSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import SectionLabel from '@CommonComponents/SectionLabel';

const AboutSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Про Культ' isHidden />
      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Про Культ' />
            <Text>
              Kult - це не просто про заняття спортом. Це також про оточення, атмосферу, людей навколо. “Живемо життя” - наш девіз, який ми готові підтверджувати не словом, а ділом. Доєднуйся до нашого клубу і ставай частиною великої сімʼї.
            </Text>
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default AboutSection;
