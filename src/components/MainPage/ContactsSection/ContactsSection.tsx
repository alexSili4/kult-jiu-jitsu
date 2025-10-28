import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import {
  MapContainer,
  MapImg,
  Section,
  Container,
  Content,
  MapWrap,
} from './ContactsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';

const Map: FC = () => {
  return (
    <MapContainer>
      <MapWrap>
        <MapImg alt='Мапа' />
      </MapWrap>
    </MapContainer>
  );
};

const ContactForm: FC = () => {
  return <form></form>;
};

const ContactsSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Контакти' isHidden />

      <Map />

      <Container>
        <GeneralContainer>
          <Content>
            <ContactForm />
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
