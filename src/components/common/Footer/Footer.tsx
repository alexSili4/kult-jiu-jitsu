import { FC } from 'react';
import {
  StyledFooter,
  Container,
  TextWrap,
  Copyright,
  Sun,
} from './Footer.styled';
import GeneralContainer from '@CommonComponents/GeneralContainer';
import SectionTitle from '@CommonComponents/SectionTitle';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <GeneralContainer>
        <Container>
          <SectionTitle text='KULT JIU JITSU' />

          <TextWrap>
            <Copyright>© 2025 Kult. Усі права захищені. </Copyright>
            <Sun
              href='https://sun.agency/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Створено сонцем☼
            </Sun>
          </TextWrap>
        </Container>
      </GeneralContainer>
    </StyledFooter>
  );
};

export default Footer;
