import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Section,
  AzovIcon,
  AzovIconWrap,
  Banner,
  BannerWrap,
  Container,
  Content,
  Title,
  TitlePart,
  Accent,
} from './VeteransSection.styled';
import SectionTitle from '@/components/common/SectionTitle';
import banner from '@/images/veterans/banner.jpg';
import {
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const VeteransSection: FC = () => {
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerContainerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const smoothScale = useSpring(scale, transition);

  return (
    <Section>
      <SectionTitle text='Тренування для ветеранів' isHidden />

      <BannerWrap ref={bannerContainerRef}>
        <Banner src={banner} alt='Банер' style={{ scale: smoothScale }} />
      </BannerWrap>

      <Container>
        <GeneralContainer>
          <Content>
            <Title>
              <TitlePart>
                <AzovIconWrap>
                  <AzovIcon />
                </AzovIconWrap>
                <span>Безкоштовні</span>
              </TitlePart>
              <TitlePart>
                <span>тренування</span>
                <Accent>для</Accent>
              </TitlePart>
              <TitlePart>ветеранів</TitlePart>
            </Title>
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default VeteransSection;
