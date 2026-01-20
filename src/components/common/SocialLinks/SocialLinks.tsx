import { FC } from 'react';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import { Container, SocialLink } from './SocialLinks.styled';
import { contacts } from '@/constants';

const SocialLinks: FC = () => {
  return (
    <Container>
      <SocialLink
        href={contacts.externalLinks.instagram}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagram />
      </SocialLink>

      <SocialLink
        href={contacts.externalLinks.telegram}
        target='_blank'
        rel='noopener noreferrer'
      >
        <PiTelegramLogo />
      </SocialLink>
    </Container>
  );
};

export default SocialLinks;
