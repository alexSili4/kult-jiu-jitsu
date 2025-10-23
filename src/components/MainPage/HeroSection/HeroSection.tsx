import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import {
  Section,
  Container,
  Location,
  PageTitle,
  Country,
  Symbol,
  Video,
  StyledVideo,
} from './HeroSection.styled';
import { useVideo } from '@/hooks';
import preview from '@/video/preview.mp4';

const HeroSection: FC = () => {
  const { videoRef } = useVideo();

  return (
    <Section>
      <Video>
        <StyledVideo ref={videoRef} src={preview} muted playsInline loop />
      </Video>

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
