import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Banner,
  BannerWrap,
  Container,
  Content,
  Section,
  Symbol,
  Title,
} from './FAQsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import {
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import banner from '@/images/faqs/banner.jpg';
import { faqs } from '@/constants';

const FAQsSection: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const smoothScale = useSpring(scale, transition);

  return (
    <Section>
      <SectionTitle text='Запитання та відповіді' isHidden />

      <BannerWrap ref={bannerRef}>
        <Banner src={banner} alt='Банер' style={{ scale: smoothScale }} />
      </BannerWrap>

      <Container>
        <GeneralContainer>
          <Content>
            <Title>
              <Symbol>•</Symbol>
              <span>[FAQs)</span>
            </Title>

            {/* {faqs} */}
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default FAQsSection;
