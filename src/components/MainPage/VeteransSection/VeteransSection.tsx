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
  Founders,
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
  const bannerRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: bannerScrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: foundersScrollYProgress } = useScroll({
    target: foundersRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const scale = useTransform(bannerScrollYProgress, [0, 1], [1.5, 1]);
  const x = useTransform(foundersScrollYProgress, [0, 0.8], [400, 0]);

  const smoothScale = useSpring(scale, transition);
  const smoothX = useSpring(x, transition);

  const smoothNegativeX = useTransform(smoothX, (value) => -value);

  return (
    <Section>
      <SectionTitle text='Тренування для ветеранів' isHidden />

      <BannerWrap ref={bannerRef}>
        <Banner src={banner} alt='Банер' style={{ scale: smoothScale }} />
      </BannerWrap>

      <Container>
        <GeneralContainer>
          <Founders ref={foundersRef}>
            <Content>
              <Title>
                <TitlePart style={{ x: smoothX }}>
                  <AzovIconWrap>
                    <AzovIcon />
                  </AzovIconWrap>
                  <span>Безкоштовні</span>
                </TitlePart>
                <TitlePart style={{ x: smoothNegativeX }}>
                  <span>тренування</span>
                  <Accent>для</Accent>
                </TitlePart>
                <TitlePart style={{ x: smoothX }}>ветеранів</TitlePart>
              </Title>
            </Content>
          </Founders>

          {/* <Description></Description> */}
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default VeteransSection;
